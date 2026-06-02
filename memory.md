# Operator Syndicate — Project Memory
# 每次對這個專案動工前，Claude 必須讀取這份文件

## 讀取與更新規則（三層架構）

### 讀取順序（每次對話開始時）
1. 自動：Claude 全域記憶 `/Users/admin/.claude/projects/-Users-admin/memory/project_operator_syndicate.md`
2. 手動確認：`cat /Users/admin/Downloads/0｜Other/B2B/memory.md`（本文件）
3. 設計細節參考：瀏覽器打開 `/Users/admin/Downloads/0｜Other/B2B/memory.html`

### 更新規則
- 修 CSS/設計 → 同步更新本文件「設計規則」區塊
- 重大架構改動 → 同步更新 memory.html 的「設計決策記錄」區塊
- 新增設計規則 → 三個檔案同步更新
- 部署後 → git push，記錄 commit 到本文件「部署記錄」

### 各層檔案職責
- `memory.md`（本文件）：Claude 工作用的純文字規格書，所有規則的唯一來源
- `memory.html`：人類瀏覽器查閱的視覺文件，含色彩 swatches、roadmap、決策 log
- `project_operator_syndicate.md`（Claude 記憶）：跨對話的關鍵 bug 記錄、禁忌清單

---

## 專案基本資訊

- 網站名稱：Operator Syndicate
- 類型：靜態單頁 Demo 網站（純 HTML/CSS/JS）
- 上線網址：https://vincentt-wang.github.io/operator-syndicate/
- 本機路徑：/Users/admin/Downloads/0｜Other/B2B/index.html
- GitHub：https://github.com/vincentt-wang/operator-syndicate
- 版本：v3.0（2026-06-02）

---

## 專案定位

### 是什麼
由外商高管（Nexia/Oracore/Globex/ACS 等公司的 VP/Director 層）組成的天使投資飛輪。入股 B2B 新創，同時打通大廠採購通路。

### 發起人
- Boice Chen — GP，聚攏高管網絡
- Vincent Wang — Deal Flow Architect / AO，AI 篩選、A4 系統、方法論

### 兩個受眾
- B2B 新創創辦人：提交案源，跳過 12-18 個月企業冷開發期
- 外商高管（LP）：以企業通路為加值，共同投資

### 兩個投資 Tier
- Tier 1：$100K–$1M ARR（NT$300萬–3,000萬），Seed/Early Stage
- Tier 2：$2M–$20M ARR（NT$6,000萬–6億），Pre-IPO，上市前 3-5 年

---

## 設計系統（CIS）

### 字型
- 標題（H1–H3）：Playfair Display 700/800/900
- Body/UI：DM Sans 400/500/600/700
- 中文 serif fallback：Noto Serif TC
- 中文 sans fallback：Noto Sans TC
- 最小字體：20px（body base），16px（說明文字最低限）

### 顏色
- 主色 CTA：#FF6600（YC 橘）
- Hover 深化：#E55A00
- 點綴橘：#FB923C
- 橘底色：#FFF7ED
- 深色背景：#0A1628（Hero、Network、Submit）
- 正文：#0F172A
- 次要文字：#475569
- 卡片底色：#F8FAFC

### 圓角與陰影
- 卡片：--r: 20px
- 按鈕：--r-btn: 12px

---

## 假公司名稱對照

| 網站顯示名 | 對應真實公司 | 顏色碼 |
|---|---|---|
| Nexia | Meta | #3B82F6（藍） |
| Oracore | Oracle | #EF4444（紅） |
| Globex | Google | #8B5CF6（紫） |
| ACS | AWS | #0EA5E9（天藍） |
| SalesBridge | Salesforce | #10B981（綠） |
| Microtek | Microsoft | #6B7280（灰） |
| Rotarex B2B | 福輪社 | — |

### 高管假名列表（20人，Canvas 節點用）
Nexia：James C. / Michelle L. / Sarah K. / Ryan H. / Amy T.
Oracore：Patrick L. / Wayne C. / Yvonne M. / David T.
Globex：Henry C. / Emma M. / Kevin W. / Lisa N. / Ben K.
ACS：Thomas C. / Grace S. / Michael R. / Nancy P.
Others：Frank Y. (SalesBridge) / Alex L. (Microtek)

假頭像來源：https://i.pravatar.cc/100?img=N（各節點有對應 img ID）

---

## 頁面結構（共 9 個 section）

| # | ID | 英文標題 | 背景 | 備註 |
|---|---|---|---|---|
| 1 | hero | Enterprise Channel. Day One. | #0A1628 深色 | Canvas 網格動畫（22節點，稀疏，滑鼠互動） |
| — | marquee | — | #F8FAFC | 公司名跑馬燈 |
| 2 | audience | Built for builders. Powered by operators. | #FFFFFF | 新創 vs 高管兩欄 |
| 3 | network | Senior Operators. One Syndicate. | #0A1628 深色 | 軌道星座 Canvas（4 ring orbital） |
| 4 | tiers | Two tiers. One network. | #F8FAFC | 星鏈背景 Canvas，Tier 1/Tier 2 |
| 5 | why | Enterprise channels are the hardest problem in B2B. | #FFFFFF | 3 個痛點卡片 |
| 6 | pillars | More than capital. | #FFFFFF | 3 個 pillar |
| 7 | global | Operator networks across every major enterprise market. | 深棕漸層 | 琥珀橘地球儀（可拖動） |
| 8 | team | The people building this. | #FFFFFF | 6人 + 5 advisor，pravatar.cc |
| 9 | submit + faq | Submit your deal. / FAQ | #0A1628 + #F8FAFC | 深色 CTA + FAQ accordion |

**已移除的 sections：**
- How It Works（4步驟流程）→ 太詳細，放 portal 內部即可
- A4 Brief Demo → 移至第二層，之後作為高管專屬頁面

---

## Canvas 動畫規格

### Hero Canvas（#hero-canvas）
- 22 個節點，分佈在鬆散格子 + 隨機偏移
- 非常慢的小幅軌道漂移（速度 t+=.004，振幅 28px/18px）
- 靜止時：稀疏橘色網格，幾乎看不出移動
- 滑鼠互動：附近節點被吸引，同時出現橘色放射線 + 光暈
- 無任何球形聚合效果

### Operator Network Canvas（#network-canvas）
- 4 個傾斜橢圓軌道環（模擬 3D 衛星軌道）
- Ring 1：R=92%，速度 0.0006，正轉，傾角 0.28
- Ring 2：R=70%，速度 0.0010，反轉，傾角 -0.22
- Ring 3：R=50%，速度 0.0014，正轉，傾角 0.32
- Ring 4：R=28%，速度 0.0018，反轉，傾角 -0.18
- 每 ring 5 個節點，等間距
- 公司名標籤常駐（13px，公司色）
- 滑鼠接觸：節點停止公轉，磁吸跟隨，顯示 pravatar 頭像 + 姓名
- 無心跳動畫，無春聲引力

### Tiers Canvas（#tiers-canvas）
- 35 個慢速漂移節點，橘色連線
- 滑鼠移入時節點緩慢向游標聚集（非聚合，只是微吸引）
- 透明度 0.55，作為背景不干擾內容

### Globe Canvas（#globe-canvas）
- 背景：深棕色（#1C1005→#0A0601）
- 格線：rgba(255,140,30,.18)
- 大陸：rgba(255,100,10,.12) 填色，rgba(255,130,20,.35) 邊線
- 橘色飛行弧線，可拖動
- 台北為起點（黃色脈衝圓）

---

## 絕對禁忌清單

1. **nav 選擇器必須用 #nav，不能用 nav** — 否則 footer 的 `<nav class="ft-nav">` 也會被 fixed 到頂部（已發生過，根本問題）
2. **語言切換用 JS textContent swap，不用 CSS display:none** — `[data-zh]{display:none}` 會隱藏所有有 data-zh 屬性的元素，包括標題（已發生過）
3. **Reveal 動畫用 checkReveal() scroll 事件** — 不用 IntersectionObserver（rootMargin 太保守會不觸發）
4. **中文標題不加標點符號**（無句號、逗號、破折號）
5. **不顯示具體人數數字**（如「20+」在 Network section）
6. **不暴露真實公司名稱**，只用假名
7. **不暴露高管真實姓名**，只用「James C.」等縮寫
8. **不放真實投資金額或財務數字**
9. **不使用 Emoji**，只用 SVG icon

---

## 文案原則

- 中文不直翻英文，說人話
- 中文標題去掉所有標點符號
- 最長不超過 20 字
- 副標說明文字語氣：第三人稱或陳述句，不用「我們」

### Hero 主文案
- EN H1：Enterprise Channel. / Day One.
- ZH H1：外商高管入股 / 大廠通路隨之而來
- EN Sub：20+ senior operators from Nexia, Oracore, Globex and ACS co-invest in B2B startups. They don't just write checks — they open procurement doors.
- ZH Sub：Nexia、Oracore、Globex、ACS 的高層決策者共同投資你的 B2B 新創，並親自打通大廠採購通路，替你跳過 12–18 個月的企業業務開發期

---

## Portal Overlay（投遞系統）

三個 role：
- Startup（#ps-startup）：案源投遞表單（Formspree，待換真實 form ID）
- Executive（#ps-exec）：LP 加入申請
- Partner（#ps-partner）：創投合作

**待辦：** 替換 `YOUR_FORM_ID` 為真實 Formspree ID

---

## Roadmap

### Phase 1（已上線）
- 靜態 HTML 網站，GitHub Pages
- 雙語切換（EN/ZH）
- 20 人軌道星座動畫
- 琥珀橘地球儀
- Portal 投遞系統（Formspree）

### Phase 2（Q3 2026）
- 表單 → Claude API → 自動產 A4 Decision Brief
- 技術選型：Cloudflare Workers + D1
- LP 後台 Dashboard（高管登入，純 HTML）

### Phase 3（2027）
- LP Deal Portal（看案源、標記興趣）
- 投後追蹤系統
- 移轉到自訂網域

---

## 部署記錄

| 日期 | commit | 內容 |
|---|---|---|
| 2026-06-02 | cbca662 | 初始部署 |
| 2026-06-02 | 1eab1d3 | 加假名、引力系統、hero 連線動畫、amber globe |
| 2026-06-02 | 47e0a7a | 軌道網絡、移除 How+Brief、Tiers 星鏈、amber globe 重設計 |

---

## 已知 Bug 記錄

| 日期 | Bug | 根因 | 修法 |
|---|---|---|---|
| 2026-06-01 | footer nav 浮到頁面頂部 | CSS `nav{}` 影響所有 nav 元素 | 改成 `#nav{}` |
| 2026-06-01 | 所有頁面內容不可見 | `[data-zh]{display:none}` 隱藏有 data-zh 屬性的元素 | 改用 textContent swap |
| 2026-06-01 | Reveal 動畫不觸發 | IntersectionObserver rootMargin -60px 太保守 | 改用 scroll 事件 + 30ms 立即觸發 |
