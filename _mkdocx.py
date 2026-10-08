# -*- coding: utf-8 -*-
"""從 Operator Insider 文章 HTML 產出給作者改字的 .docx，直接上傳 Google Drive 就能開。

用法: python3 _mkdocx.py <文章html> [輸出目錄] [額外說明檔.txt]

為什麼不是 .html：Vincent 2026-09-15「google drive 沒有的話就給我 doc 文件我上傳雲端」。
拖 HTML 進 Drive 雖然也會轉，但多一步而且格式常跑掉，.docx 是 Drive 原生支援的。

2026-09-16 改版（Vincent：「有些地方你應該用表格的形式去做，不然這兩個人的文章
他去看自己的文章跟這個內容好像會有點對不起來」「廢話不要太多」）：
  · 每一段一張兩欄表：左欄是網頁上現在的字，右欄整段合併成一個空白寫字區。
  · 段落標題就是網頁上的小標，作者左右兩個視窗對照時靠它對齊。
  · 左欄每一列前面有型別標（內文／圖‧互動／圖內文字／引用／來源），
    讓作者一眼知道那一段在畫面上是什麼東西。
  · 重複十二次的操作說明砍掉，只在最前面留一張三列的說明表。
"""
import io,re,html,sys,os
from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util
spec=importlib.util.spec_from_file_location('mk', os.path.join(os.path.dirname(os.path.abspath(__file__)),'_mkdoc.py'))
mk=importlib.util.module_from_spec(spec); spec.loader.exec_module(mk)

TAG = re.compile(r'''<([a-zA-Z][\w-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>''')

NAVY  = RGBColor(0x0A,0x16,0x28)
ORANGE= RGBColor(0xC2,0x41,0x0C)
GREY  = RGBColor(0x6C,0x7A,0x87)
GREY2 = RGBColor(0x94,0xA3,0xB2)

KIND_LABEL = {
    'p'    : ('內文',      False),
    'fig'  : ('圖 · 互動',  True),
    'label': ('圖內文字',   False),
    'quote': ('引用',      True),
    'note' : ('附註',      False),
    'ref'  : ('來源',      False),
}

def shade(cell, hexcolor):
    tcPr = cell._tc.get_or_add_tcPr()
    el = OxmlElement('w:shd'); el.set(qn('w:val'),'clear')
    el.set(qn('w:color'),'auto'); el.set(qn('w:fill'),hexcolor)
    tcPr.append(el)

def cell_text(cell, text, size=10.5, color=None, italic=False, bold=False, space_after=3):
    p = cell.paragraphs[0] if not cell.paragraphs[0].runs and not cell.paragraphs[0].text else cell.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(0)
    r = p.add_run(text)
    r.font.size = Pt(size); r.italic = italic; r.bold = bold
    if color is not None: r.font.color.rgb = color
    return p

def blocks_of(src):
    t=io.open(src,encoding='utf-8').read()
    art=t[t.index('<article>'):t.index('</article>')]
    out=[]
    for m in TAG.finditer(art):
        tag,attr=m.group(1).lower(),m.group(2)
        if 'data-en="' not in attr: continue
        kind=mk.classify(tag,attr)
        if not kind: continue
        en=html.unescape(re.sub(r'<[^>]+>','',re.search(r'data-en="([^"]*)"',attr).group(1)))
        zh=re.search(r'data-zh="([^"]*)"',attr)
        zh=html.unescape(re.sub(r'<[^>]+>','',zh.group(1))) if zh else ''
        if not (en.strip() or zh.strip()): continue
        out.append((kind,en,zh))
    meta={}
    w=re.search(r'class="opi-au-n">([^<]+)<',t); meta['who']=w.group(1).strip() if w else ''
    r=re.search(r'class="opi-au-t"[^>]*data-zh="([^"]*)"',t); meta['role']=html.unescape(r.group(1)) if r else ''
    h=re.search(r'<h1[^>]*data-zh="([^"]*)"',t); meta['h1zh']=html.unescape(h.group(1)) if h else ''
    h=re.search(r'<h1[^>]*data-en="([^"]*)"',t); meta['h1en']=html.unescape(h.group(1)) if h else ''
    return out, meta

def to_sections(blocks, lang, lead=''):
    """把線性區塊切成 [(小標, [(kind, text), ...]), ...]。"""
    secs=[]; cur=None; pend=[]
    def flushlabels(items):
        if pend:
            items.append(('label','　｜　'.join(pend))); pend.clear()
    for k,en,zh in blocks:
        s=(zh if lang=='zh' else en).strip()
        if not s: continue
        if k=='h1': continue
        if k=='label': pend.append(s); continue
        if k in ('h2','h3'):
            if cur: flushlabels(cur[1]); secs.append(cur)
            cur=(s,[]); continue
        if cur is None: cur=(lead or ('開場' if lang=='zh' else 'Opening'),[])
        flushlabels(cur[1])
        items=cur[1]
        # 連續同型別、而且前一段很短的，併進同一格。一行一列會把一張圖的
        # 五六個標籤拆成五六列，作者對照網頁時反而找不到那是同一個東西。
        if items and items[-1][0]==k and (len(items[-1][1])<60 or len(s)<60) and k!='p':
            items[-1]=(k, items[-1][1]+'\n'+s)
        elif items and items[-1][0]==k=='p' and len(items[-1][1])<28 and len(s)<28:
            items[-1]=(k, items[-1][1]+'\n'+s)
        else:
            items.append((k,s))
    if cur: flushlabels(cur[1]); secs.append(cur)
    return [s for s in secs if s[1]]

def how_to(doc, lang):
    rows = [
        ('左欄','網頁上現在的字。型別標告訴你那一段在畫面上是什麼：內文、圖、圖內文字、引用、來源。'),
        ('右欄','你要改的就寫這裡。整段不用改就留白，我們直接用左欄。'),
        ('圖與互動','情境圖、分析圖、互動元素、動畫都已經做好在網頁上。要改圖上的字，改「圖內文字」那一列。'),
        ('數字','每個數字都附了來源與發布日。覺得哪個不該用就整句刪掉，不用替我們找替代。'),
        ('中英文','兩個平行版本，不是互相翻譯，可以各自改。'),
    ] if lang=='zh' else [
        ('Left','What is on the page now. The tag tells you what that block is on screen.'),
        ('Right','Write your version here. Leave it blank and we keep the left.'),
        ('Visuals','Charts, interactives and animation are already built on the page. To change text inside a chart, edit the "chart text" row.'),
        ('Numbers','Every figure carries a source and publication date. Delete a sentence you would rather not run; no need to find a replacement.'),
        ('Languages','The two versions are parallel, not translations. Edit either independently.'),
    ]
    t=doc.add_table(rows=0, cols=2); t.style='Table Grid'; t.alignment=WD_TABLE_ALIGNMENT.CENTER
    t.autofit=False
    for k,v in rows:
        c=t.add_row().cells
        c[0].width=Cm(3.0); c[1].width=Cm(13.5)
        shade(c[0],'F2F5F7')
        cell_text(c[0],k,size=10,bold=True,color=NAVY)
        cell_text(c[1],v,size=10,color=GREY)
    doc.add_paragraph()

def section_table(doc, n, heading, items, lang):
    t=doc.add_table(rows=0, cols=2); t.style='Table Grid'
    t.autofit=False
    # 標題列（跨欄）
    hr=t.add_row().cells
    hr[0].merge(hr[1])
    shade(hr[0],'0A1628')
    lab = ('第 %d 段' % n) if lang=='zh' else ('Section %d' % n)
    p=hr[0].paragraphs[0]; p.paragraph_format.space_after=Pt(2)
    r=p.add_run(lab+'　'); r.bold=True; r.font.size=Pt(9); r.font.color.rgb=RGBColor(0xFF,0x8C,0x42)
    r=p.add_run(heading); r.bold=True; r.font.size=Pt(12); r.font.color.rgb=RGBColor(0xFF,0xFF,0xFF)
    # 欄頭
    hd=t.add_row().cells
    shade(hd[0],'F2F5F7'); shade(hd[1],'FDF3EE')
    cell_text(hd[0],'網頁上現在是這樣' if lang=='zh' else 'On the page now',size=9,bold=True,color=GREY)
    cell_text(hd[1],'你要改的寫這裡' if lang=='zh' else 'Your edits',size=9,bold=True,color=ORANGE)
    # 內容
    first=None
    for k,s in items:
        row=t.add_row().cells
        row[0].width=Cm(10.4); row[1].width=Cm(6.1)
        if first is None: first=row[1]
        lbl,emph = KIND_LABEL.get(k,('內文',False))
        if k!='p':
            cell_text(row[0],lbl,size=8,color=GREY2,space_after=1)
        for j,line in enumerate(s.split('\n')):
            cell_text(row[0], line, size=10.5,
                      color=(GREY if k in ('ref','note','label') else None),
                      italic=(k in ('quote','ref','note','label')),
                      bold=(k=='fig'), space_after=(2 if j<len(s.split('\n'))-1 else 3))
    # 右欄整段合併成一個寫字區
    if first is not None:
        last=t.rows[-1].cells[1]
        merged=first.merge(last)
        merged.paragraphs[0].add_run('')
    doc.add_paragraph()
    return t

def build(src, outdir=None, notes_file=None):
    blocks, meta = blocks_of(src)
    doc=Document()
    for s in doc.sections:
        s.left_margin=Cm(1.8); s.right_margin=Cm(1.8)
        s.top_margin=Cm(1.8); s.bottom_margin=Cm(1.8)
    st=doc.styles['Normal']; st.font.name='Calibri'; st.font.size=Pt(11)

    doc.add_heading('Operator Insider · '+meta['h1zh'], 0)
    p=doc.add_paragraph(); r=p.add_run('%s · %s' % (meta['who'], meta['role']))
    r.bold=True; r.font.color.rgb=NAVY
    p=doc.add_paragraph(); r=p.add_run('左邊是網頁上現在的字，右邊留給你改。兩個視窗並排看，段落標題跟網頁上的小標是同一個。')
    r.font.size=Pt(10); r.font.color.rgb=GREY
    doc.add_paragraph()
    how_to(doc,'zh')

    if notes_file and os.path.exists(notes_file):
        doc.add_page_break()
        for line in io.open(notes_file,encoding='utf-8').read().split('\n'):
            line=line.strip()
            if not line: continue
            if line.startswith('#'):
                h=doc.add_paragraph(); r=h.add_run(line.lstrip('# ').strip()); r.bold=True; r.font.size=Pt(12)
            else:
                pp=doc.add_paragraph(); r=pp.add_run(line); r.font.size=Pt(10); r.font.color.rgb=GREY

    nsec=0
    for lang,title in (('zh','中文版'),('en','English version')):
        doc.add_page_break()
        doc.add_heading(title, 1)
        secs=to_sections(blocks,lang, meta['h1zh'] if lang=='zh' else meta['h1en'])
        for i,(heading,items) in enumerate(secs,1):
            section_table(doc,i,heading,items,lang)
        nsec=max(nsec,len(secs))

    outdir=outdir or os.path.dirname(src)
    base=os.path.splitext(os.path.basename(src))[0]
    out=os.path.join(outdir,'%s.docx'%base)
    doc.save(out)
    return out, len(blocks), nsec

if __name__=='__main__':
    o,n,s=build(sys.argv[1], sys.argv[2] if len(sys.argv)>2 else None,
                sys.argv[3] if len(sys.argv)>3 else None)
    print(o); print('  區塊 %d　段落 %d'%(n,s))
