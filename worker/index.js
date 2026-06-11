/**
 * EvoScale — deal-submission Worker
 * Routes (same-origin via evoscalecapital.com/api/*):
 *   POST /api/init      -> { token }                          create an isolated submission folder
 *   POST /api/presign   -> { url, key }                       presigned R2 PUT for one file
 *   POST /api/complete  -> { ok, token }                      store answers.json + notify
 *
 * Isolation: every file lives under submissions/<token>/...  The applicant only ever
 * receives presigned write URLs scoped to their own token; they cannot read others.
 * The Worker (this code) is the only reader.
 *
 * Bindings / config (see wrangler.toml + DEPLOY.md):
 *   BUCKET                R2 bucket binding (server-side writes)
 *   R2_ACCOUNT_ID         var
 *   R2_BUCKET             var (bucket name, for the S3 endpoint)
 *   NOTIFY_TO             var (comma-separated emails)
 *   R2_ACCESS_KEY_ID      secret (R2 S3 API token)
 *   R2_SECRET_ACCESS_KEY  secret
 *   RESEND_API_KEY        secret (optional — skip email if absent)
 */
import { AwsClient } from 'aws4fetch';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const ALLOW_ORIGIN = 'https://evoscalecapital.com';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '');

    if (request.method === 'OPTIONS') return cors(new Response(null, { status: 204 }));

    try {
      if (request.method === 'POST' && path === '/api/init')     return cors(await handleInit());
      if (request.method === 'POST' && path === '/api/presign')  return cors(await handlePresign(request, env));
      if (request.method === 'POST' && path === '/api/complete') return cors(await handleComplete(request, env, ctx));
    } catch (err) {
      return cors(json({ error: 'server_error', detail: String(err && err.message || err) }, 500));
    }
    return cors(json({ error: 'not_found' }, 404));
  },
};

/* ---------- handlers ---------- */

async function handleInit() {
  return json({ token: crypto.randomUUID() });
}

async function handlePresign(request, env) {
  const { token, kind, filename, contentType } = await request.json();
  if (!UUID_RE.test(token || '')) return json({ error: 'bad_token' }, 400);
  if (kind !== 'deck' && kind !== 'extra') return json({ error: 'bad_kind' }, 400);

  const safe = sanitize(filename || 'file');
  const key = `submissions/${token}/${kind}/${safe}`;

  const aws = new AwsClient({
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    service: 's3',
    region: 'auto',
  });
  const endpoint = new URL(`https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${env.R2_BUCKET}/${key}`);
  endpoint.searchParams.set('X-Amz-Expires', '900'); // 15 minutes

  const signed = await aws.sign(endpoint.toString(), {
    method: 'PUT',
    aws: { signQuery: true },
  });
  return json({ url: signed.url, key });
}

async function handleComplete(request, env, ctx) {
  const body = await request.json();
  const { token, answers, files, lang } = body;
  if (!UUID_RE.test(token || '')) return json({ error: 'bad_token' }, 400);

  const record = {
    token,
    submittedAt: new Date().toISOString(),
    lang: lang || 'en',
    answers: answers || {},
    files: Array.isArray(files) ? files : [],
  };
  await env.BUCKET.put(`submissions/${token}/answers.json`, JSON.stringify(record, null, 2), {
    httpMetadata: { contentType: 'application/json' },
  });

  if (env.RESEND_API_KEY && env.NOTIFY_TO) {
    ctx.waitUntil(notify(env, record).catch(() => {}));
  }
  return json({ ok: true, token });
}

/* ---------- email notification (Resend) ---------- */

async function notify(env, rec) {
  const a = rec.answers || {};
  const row = (k, v) => `<tr><td style="padding:4px 12px 4px 0;color:#5A6A7A;vertical-align:top">${esc(k)}</td><td style="padding:4px 0;color:#0B1623">${esc(v)}</td></tr>`;
  const mkts = Array.isArray(a.target_markets) ? a.target_markets.join(', ') : (a.target_markets || '');
  const fileLines = (rec.files || []).map(f => `${f.kind}/${f.filename} (${Math.round((f.size || 0) / 1024)} KB)`).join('<br>') || '—';

  const html = `<div style="font-family:Arial,sans-serif;max-width:640px">
    <h2 style="color:#FF6600;margin:0 0 4px">New deal submission</h2>
    <p style="color:#5A6A7A;margin:0 0 16px">Token <code>${esc(rec.token)}</code> · ${esc(rec.submittedAt)}</p>
    <table style="border-collapse:collapse;font-size:14px">
      ${row('Company', a.company)}
      ${row('Founder', a.founders)}
      ${row('Email', a.email)}${row('Phone', a.phone)}
      ${row('Website', a.website)}${row('LinkedIn', a.linkedin)}
      ${row('Based in', a.hq_location)}${row('Target markets', mkts)}
      ${row('One-liner', a.one_liner)}
      ${row('Pain', a.pain)}${row('Solution', a.solution)}
      ${row('Target customer', a.target_customer)}${row('Business model', a.business_model)}
      ${row('Product stage', a.product_stage)}${row('Paid validation', (a.paid_validation || '') + (a.paid_validation_note ? ' — ' + a.paid_validation_note : ''))}
      ${row('Round', a.round)}${row('Target raise', a.raise_target)}${row('Valuation', a.valuation)}${row('Instrument', a.instrument)}
      ${row('Referral', a.referral)}${row('Time sensitivity', a.time_sensitivity)}
      ${row('Consent (AI)', a.consent_ai ? 'yes' : 'no')}${row('Consent (referral)', a.consent_referral ? 'yes' : 'no')}
      ${row('Files', fileLines)}
    </table>
    <p style="color:#94A3B8;font-size:12px;margin-top:16px">R2: submissions/${esc(rec.token)}/</p>
  </div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'EvoScale Apply <apply@evoscalecapital.com>',
      to: env.NOTIFY_TO.split(',').map(s => s.trim()).filter(Boolean),
      subject: `New deal submission — ${a.company || 'Unknown'}`,
      html,
    }),
  });
  if (!res.ok) throw new Error('resend ' + res.status);
}

/* ---------- helpers ---------- */

function sanitize(name) {
  const base = String(name).split(/[\\/]/).pop().slice(0, 120);
  return base.replace(/[^A-Za-z0-9._一-鿿-]/g, '_').replace(/^\.+/, '') || 'file';
}
function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
function cors(res) {
  const h = new Headers(res.headers);
  h.set('Access-Control-Allow-Origin', ALLOW_ORIGIN);
  h.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  h.set('Access-Control-Allow-Headers', 'Content-Type');
  h.set('Access-Control-Max-Age', '86400');
  return new Response(res.body, { status: res.status, headers: h });
}
