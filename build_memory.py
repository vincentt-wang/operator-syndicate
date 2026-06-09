#!/usr/bin/env python3
# build_memory.py — 從 Claude 自動記憶(md) 生成 EvoScale 專案的 memory.html
#
# 設計原則：md 是唯一真相源（Claude 每次工作都更新）；memory.html 是人類可讀視圖，
# 由本腳本自動生成，請勿手動編輯。Claude 每次更新完相關 md 後跑一次：
#     python3 build_memory.py
# HTML 就會與 md 同步，永不脫節。
import os, re, html, datetime

MEM = os.path.expanduser('~/.claude/projects/-Users-admin/memory')
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'memory.html')

# EvoScale 相關記憶檔（白名單）。新增 EvoScale 記憶時把檔名加進來。
FILES = [
    'project_operator_syndicate.md',
    'project_evoscale_domain_email.md',
    'project_evoscale_deal_screening.md',
    'project_evoscale_analytics.md',
    'feedback_remind_b2b_pending.md',
    'feedback_protect_vincent_interests.md',
]
TYPE_LABEL = {'project': '專案進度與規則', 'feedback': '工作回饋與原則',
              'reference': '參考資源', 'user': '關於用戶'}
ORDER = ['project', 'feedback', 'reference', 'user']

def esc(s): return html.escape(s)

def inline(s):
    s = esc(s)
    s = re.sub(r'\[\[([a-z0-9-]+)\]\]', r'<span class="xref">\1</span>', s)
    return s

def parse(path):
    txt = open(path, encoding='utf-8').read()
    fm, body = {}, txt
    m = re.match(r'^---\n(.*?)\n---\n(.*)$', txt, re.S)
    if m:
        head, body = m.group(1), m.group(2)
        for line in head.splitlines():
            mt = re.match(r'\s+type:\s*(.+)', line)
            if mt: fm['type'] = mt.group(1).strip()
            elif re.match(r'(name|description):', line):
                k, v = line.split(':', 1); fm[k.strip()] = v.strip()
    return fm, body.strip()

def md2html(body):
    out = []
    for blk in re.split(r'\n\s*\n', body):
        blk = blk.strip()
        if not blk: continue
        if blk.startswith('## '):
            out.append(f'<h4>{esc(blk[3:])}</h4>')
        elif all(l.lstrip().startswith('- ') for l in blk.splitlines()):
            items = ''.join(f'<li>{inline(l.lstrip()[2:])}</li>' for l in blk.splitlines())
            out.append(f'<ul>{items}</ul>')
        else:
            out.append(f'<p>{inline(blk)}</p>')
    return '\n'.join(out)

cards = []
for f in FILES:
    p = os.path.join(MEM, f)
    if not os.path.exists(p): continue
    fm, body = parse(p)
    cards.append((fm.get('type', 'project'), fm.get('name', f), fm.get('description', ''), md2html(body)))

groups = {}
for t, n, d, b in cards:
    groups.setdefault(t, []).append((n, d, b))

now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M')
sections = ''
for t in ORDER:
    if t not in groups: continue
    sections += f'<h2 class="grp">{TYPE_LABEL.get(t, t)}</h2><div class="grid">'
    for n, d, b in groups[t]:
        sections += (f'<div class="card"><div class="ctype">{esc(TYPE_LABEL.get(t, t))}</div>'
                     f'<h3>{esc(n)}</h3>'
                     + (f'<p class="desc">{esc(d)}</p>' if d else '')
                     + f'<div class="body">{b}</div></div>')
    sections += '</div>'

CSS = """
:root{--orange:#FF6600;--orange2:#FF8C42;--navy:#0A1628;--navy2:#0F1E35;--ink:#E8EDF2;--mut:#94A3B8;--border:rgba(255,255,255,.1)}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--navy);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,'Noto Sans TC',sans-serif;line-height:1.7;padding-bottom:60px}
header{background:linear-gradient(160deg,#15263f,#0A1628);padding:48px 6vw 30px;border-bottom:3px solid var(--orange)}
header h1{font-size:2.4rem;font-weight:800;font-family:Georgia,'Noto Serif TC',serif}
header h1 span{color:var(--orange)}
header .meta{color:var(--mut);font-size:.9rem;margin-top:10px}
header .note{color:var(--orange2);font-size:.86rem;margin-top:6px}
main{max-width:1120px;margin:0 auto;padding:32px 6vw}
.grp{font-size:1rem;color:var(--orange);text-transform:uppercase;letter-spacing:.12em;margin:38px 0 16px;font-weight:700}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:20px}
.card{background:var(--navy2);border:1px solid var(--border);border-radius:14px;padding:24px;transition:border-color .2s}
.card:hover{border-color:rgba(255,102,0,.4)}
.ctype{display:inline-block;font-size:.72rem;font-weight:700;letter-spacing:.08em;color:var(--orange);background:rgba(255,102,0,.12);border-radius:6px;padding:3px 10px;margin-bottom:12px}
.card h3{font-size:1.22rem;font-weight:700;margin-bottom:8px;font-family:Georgia,'Noto Serif TC',serif;color:#fff}
.desc{color:var(--mut);font-size:.92rem;margin-bottom:16px;font-style:italic;border-left:2px solid var(--orange);padding-left:12px}
.body{font-size:.96rem}
.body p{margin-bottom:12px}
.body h4{color:var(--orange2);font-size:1.02rem;margin:18px 0 8px}
.body ul{margin:8px 0 12px 22px}
.body li{margin-bottom:6px}
.xref{color:var(--orange);background:rgba(255,102,0,.1);padding:1px 7px;border-radius:4px;font-size:.86em;white-space:nowrap}
@media(max-width:768px){.grid{grid-template-columns:1fr}header{padding:34px 6vw 22px}header h1{font-size:1.7rem}main{padding:24px 6vw}}
"""

doc = (f'<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="UTF-8">'
       f'<meta name="viewport" content="width=device-width,initial-scale=1">'
       f'<title>EvoScale Capital · 記憶系統</title><style>{CSS}</style></head><body>'
       f'<header><h1>EvoScale Capital <span>記憶系統</span></h1>'
       f'<p class="meta">共 {len(cards)} 筆記憶 · 生成於 {now}</p>'
       f'<p class="note">本檔由 build_memory.py 從 Claude 自動記憶(md) 生成，請勿手動編輯；真相源是 md。</p>'
       f'</header><main>{sections}</main></body></html>')
open(OUT, 'w', encoding='utf-8').write(doc)
print(f'memory.html 生成完成：{len(cards)} 筆記憶 · {now}')
