# EvoScale apply backend — deploy guide

The front-end (`apply.html`) is already on GitHub Pages. This Worker is the only
piece that needs your Cloudflare account: it issues per-submission presigned R2
upload URLs and stores `answers.json`. Nothing here can be deployed without your
credentials, so run these steps once.

## 0. Prerequisites
- The `evoscalecapital.com` zone is already on this Cloudflare account (it is).
- Node 18+ and `npx wrangler` available locally.

## 1. Create the R2 bucket
```
cd worker
npx wrangler r2 bucket create evoscale-submissions
```

## 2. R2 bucket CORS (so the browser can PUT directly to R2)
Dashboard → R2 → `evoscale-submissions` → Settings → CORS policy:
```json
[
  {
    "AllowedOrigins": ["https://evoscalecapital.com"],
    "AllowedMethods": ["PUT"],
    "AllowedHeaders": ["content-type"],
    "MaxAgeSeconds": 3600
  }
]
```

## 3. Create an R2 S3 API token (for presigning)
Dashboard → R2 → Manage R2 API Tokens → Create API token → **Object Read & Write**,
scoped to `evoscale-submissions`. Copy the **Access Key ID** and **Secret Access Key**.

## 4. Fill config
Edit `wrangler.toml` → set `R2_ACCOUNT_ID` to your Cloudflare account ID
(Dashboard → R2 → "Account details", or `npx wrangler whoami`). Confirm `NOTIFY_TO`.

## 5. Set secrets
```
npx wrangler secret put R2_ACCESS_KEY_ID
npx wrangler secret put R2_SECRET_ACCESS_KEY
npx wrangler secret put RESEND_API_KEY     # optional; omit to skip email notifications
```

## 6. Email (optional, recommended)
Using [Resend](https://resend.com): verify the `evoscalecapital.com` domain (SPF/DKIM),
create an API key, set it as `RESEND_API_KEY` above. The Worker sends from
`apply@evoscalecapital.com` to `NOTIFY_TO`. Without the key, submissions still save to
R2 — you just read them there (or wire Airtable later).

## 7. Deploy
```
npm install
npx wrangler deploy
```
The `routes` entry in `wrangler.toml` binds `evoscalecapital.com/api/*` to this Worker,
so the front-end calls it same-origin (no CORS). GitHub Pages keeps serving everything
else.

## 8. Smoke test
```
curl -X POST https://evoscalecapital.com/api/init
# -> {"token":"<uuid>"}
```
Then open https://evoscalecapital.com/apply.html, fill a test application, upload a
small PDF, submit. Check the R2 bucket for `submissions/<token>/`.

## Data layout in R2
```
submissions/<token>/answers.json        # questionnaire + file manifest
submissions/<token>/deck/<filename>      # pitch deck
submissions/<token>/extra/<filename>     # supplementary files
```
Each token is a UUID; applicants only ever get write URLs scoped to their own token.

## Notes
- File cap is 40 MB/file (front-end `MAX_FILE_MB`); presigned URLs expire in 15 min.
- Supplement-later: re-issuing `/api/presign` with the same token writes into the same
  folder — a future "add files" link can reuse the token with no re-fill.
- Draft autosave is browser-local (localStorage). Cross-device magic-link drafts are the
  planned phase-2 add-on.
