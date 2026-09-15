# -*- coding: utf-8 -*-
"""從 Operator Insider 文章 HTML 抽出中英全文，產成可直接拖進 Google Drive 的 .html。
拖進 Drive 會自動轉成 Google Doc，作者打開就能改字。

做法：直接掃所有帶 data-en 的開標籤，按文件順序取屬性值。
不從元素內容抽，因為巢狀 div 與 SVG text 會被非貪婪比對切掉（2026-09-15 踩過，133 個只抽到 39 個）。

用法: python3 _mkdoc.py <文章html> [輸出目錄]
"""
import io,re,html,sys,os

SKIP_CLASS = ('ey','byline','opi-au-kicker','opi-au-n','opi-au-t','opi-li','back','brand','lang',
              'oc-','cta-btn','related')
NOTE_CLASS = ('dsource','dchart-s','bkey','calc-s','opi-q-note','opi-q-cite','dband-s','matrix-s',
              'figcaption','cliff','dends','ends')
FIG_CLASS  = ('dchart-t','calc-h','matrix-t','dband-t')
LABEL_CLASS= ('lab','val','m','th','k','d','n','cell','rowlabel','colhead','stackkey','cblab')

def classify(tag, attr):
    cls = re.search(r'class="([^"]*)"', attr)
    cls = cls.group(1) if cls else ''
    parts = cls.split()
    if any(c.startswith(s) or s in cls for c in parts for s in SKIP_CLASS): return None
    if tag in ('h1','h2','h3'): return tag
    if 'opi-q-lead' in cls: return 'quote'
    if any(c in parts for c in FIG_CLASS) or any(f in cls for f in FIG_CLASS): return 'fig'
    if any(f in cls for f in NOTE_CLASS): return 'note'
    if cls.strip()=='ref' or 'class="ref"' in attr: return 'ref'
    if tag=='text': return 'label'
    if any(c in parts for c in LABEL_CLASS): return 'label'
    return 'p'

def build(src, outdir=None):
    t=io.open(src,encoding='utf-8').read()
    art=t[t.index('<article>'):t.index('</article>')]
    who=re.search(r'class="opi-au-n">([^<]+)<',t)
    who=who.group(1).strip() if who else ''
    role=re.search(r'class="opi-au-t"[^>]*data-zh="([^"]*)"',t)
    role=html.unescape(role.group(1)) if role else ''
    h1=re.search(r'<h1[^>]*data-zh="([^"]*)"',t)
    h1zh=html.unescape(h1.group(1)) if h1 else os.path.basename(src)

    blocks=[]
    # 開標籤的屬性值裡會有 <span class='hl'>，含 > 字元。
    # 用 [^>]* 比對會在那裡斷掉，20 個區塊、2000 個中文字就這樣消失（2026-09-15 踩過）。
    # 所以這個 pattern 允許引號內出現 >。
    TAG = re.compile(r'''<([a-zA-Z][\w-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>''')
    for m in TAG.finditer(art):
        if 'data-en="' not in m.group(2): continue
        tag,attr=m.group(1).lower(),m.group(2)
        kind=classify(tag,attr)
        if not kind: continue
        en=html.unescape(re.sub(r'<[^>]+>','',re.search(r'data-en="([^"]*)"',attr).group(1)))
        zh=re.search(r'data-zh="([^"]*)"',attr)
        zh=html.unescape(re.sub(r'<[^>]+>','',zh.group(1))) if zh else ''
        if not (en.strip() or zh.strip()): continue
        blocks.append((kind,en,zh))

    def render(lang):
        out=[]; pend=[]
        def flush():
            if pend:
                out.append('<p style="margin-left:1.5em"><i>圖內文字：'+'　｜　'.join(html.escape(x) for x in pend)+'</i></p>')
                pend.clear()
        for k,en,zh in blocks:
            s=(zh if lang=='zh' else en).strip()
            if not s: continue
            if k=='label': pend.append(s); continue
            flush()
            if k in ('h1','h2','h3'): out.append('<%s>%s</%s>'%(k,html.escape(s),k))
            elif k=='fig': out.append('<p><b>[圖／互動] %s</b></p>'%html.escape(s))
            elif k=='quote': out.append('<blockquote><p>%s</p></blockquote>'%html.escape(s))
            elif k=='note': out.append('<p><i>%s</i></p>'%html.escape(s))
            elif k=='ref': out.append('<p style="font-size:9pt">%s</p>'%html.escape(s))
            else: out.append('<p>%s</p>'%html.escape(s))
        flush()
        return '\n'.join(out)

    doc=('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Operator Insider · %s · %s</title></head><body>\n'%(h1zh,who)
     +'<h1>Operator Insider · %s</h1>\n'%html.escape(h1zh)
     +'<p><b>%s · %s</b></p>\n'%(html.escape(who),html.escape(role))
     +'<p><i>這一份是給作者改字用的。情境圖、分析圖、互動元素與動畫都已經做好了，在網頁上，不在這份文件裡。'
       '標 [圖／互動] 的地方就是它們的位置，下面那行「圖內文字」就是圖上會出現的字，要改直接改那一行。</i></p>\n'
     +'<p><i>中文與英文是兩個平行版本，不是互相翻譯，兩邊都可以各自改。</i></p>\n'
     +'<p><i>所有數字後面都附了來源與發布日，在最後一段。如果覺得哪一個數字不該用，直接刪掉那一句就好，不用替我們找替代。</i></p>\n'
     +'<hr>\n<h1>中文版</h1>\n'+render('zh')
     +'\n<hr>\n<h1>English version</h1>\n'+render('en')+'\n</body></html>')

    outdir=outdir or os.path.dirname(src)
    base=os.path.splitext(os.path.basename(src))[0]
    out=os.path.join(outdir,'DOC_%s.html'%base)
    io.open(out,'w',encoding='utf-8').write(doc)
    zhn=len(re.findall(r'[一-鿿]',render('zh')))
    return out,len(blocks),zhn

if __name__=='__main__':
    o,n,z=build(sys.argv[1], sys.argv[2] if len(sys.argv)>2 else None)
    print(o); print('  區塊 %d　中文字數約 %d'%(n,z))
