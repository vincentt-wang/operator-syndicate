/* ═══════════════════════════════════════════════════════════════
   SHARED CONTENT — Single Source of Truth
   官網 (index.html) 與簡報 (pitch.html) 共用這份資料。
   改這裡，兩邊都會更新。

   非技術人員（如 Boice）也可以直接編輯下方的文字，
   只要不動到引號和逗號的結構即可。
═══════════════════════════════════════════════════════════════ */

window.OS_CONTENT = {

  // ── 品牌核心 ──────────────────────────────────────
  brand: {
    name: "EvoScale Capital",
    tagline_en_1: "We Don't Just Invest,",
    tagline_en_2: "We Scale.",
    tagline_zh_1: "不只是投資",
    tagline_zh_2: "我們帶你做大",
    positioning_en: "Taiwan's first operator-led syndicate. We're built to grow your revenue, from breaking into enterprise to scaling beyond it, with 50+ operators who've already done it.",
    positioning_zh: "全台首創 Operator-Led 投資飛輪。我們為放大你的營收而生，從打進企業到突破規模天花板，靠的是 50+ 位走過這條路的營運者。",
    launch_en: "Launching June 2026",
    launch_zh: "2026 年 6 月 Launch",
  },


  // ── 100% 網絡參與（Stage2 風格的核心承諾） ──────────
  involvement: {
    stat: "100%",
    headline_en: "Every deal. Every time.",
    headline_zh: "每一筆投資，每一次都動用網絡",
    body_en: "We match seasoned go-to-market operators to the exact strategic and operational needs of each B2B company we back — joining as advisors, board members, or hands-on executives. 100% of our investments involve the network, not just the check.",
    body_zh: "我們把資深 go-to-market 營運者，精準對接每家投組公司的策略與營運需求——以顧問、董事或實際操盤的高管身分加入。100% 的投資都有網絡參與，不只是一張支票。",
  },

  // ── 關鍵數字 ──────────────────────────────────────
  stats: {
    operators: "50+",
    exits: "3",
    tiers: "2",
    cycleCut: "12–18mo",
    markets: "TW · SEA · JP",
  },

  // ── 投資 Tier ─────────────────────────────────────
  tiers: [
    { label_en: "Tier 1 — Early Stage", label_zh: "Tier 1 — 早期階段",
      range_en: "$100K–$1M ARR", range_zh: "NT$300萬–3,000萬 ARR",
      sub_en: "Seed to Series A", sub_zh: "種子輪至 A 輪" },
    { label_en: "Tier 2 — Pre-IPO", label_zh: "Tier 2 — 上市前",
      range_en: "$2M–$20M ARR", range_zh: "NT$6,000萬–6億 ARR",
      sub_en: "Growth to Pre-IPO", sub_zh: "成長期至上市前" },
  ],

  // ── RaaS 三柱 ─────────────────────────────────────
  pillars: [
    { title_en: "Network Alpha", title_zh: "Network Alpha",
      desc_en: "Your enterprise relationships are your alpha. We measure, deploy, and monetize operator network value.",
      desc_zh: "你的企業關係就是你的 Alpha。我們衡量、部署並變現高管網絡價值。" },
    { title_en: "Revenue Intelligence Architecture", title_zh: "營收智能架構",
      desc_en: "A repeatable system for B2B revenue growth: sales strategy, procurement navigation, and AI-augmented coaching, engineered by operators who have scaled it.",
      desc_zh: "可複製的 B2B 營收成長系統：業務策略、採購引導，以及由實戰高管打造的 AI 輔助教練機制。" },
    { title_en: "Operator-Led Community", title_zh: "高管社群",
      desc_en: "Taiwan's highest-density community of senior sales executives who love tech and investing.",
      desc_zh: "台灣最高密度的頂尖業務高管社群，集結熱愛科技與投資的精英圈子。" },
  ],

  // ── Track Record ──────────────────────────────────
  trackRecord: [
    { en: "Gogolook · TSE Listed",        zh: "Gogolook · 台股上市" },
    { en: "Appier · JPX Listed",          zh: "Appier · 東証上場" },
    { en: "3 Growth-Stage Exits",         zh: "3 間增長期新創出場" },
    { en: "20+ Years · TW · SEA · Japan", zh: "20+ 年 · 台灣 · 東南亞 · 日本" },
  ],

  // ── 對標機構 ──────────────────────────────────────
  benchmarks: ["Stage2 Capital", "GTM Fund"],

  // ── 假公司 / 高管網絡（官網星座 + 名錄頁共用） ──────
  // 之後有真實名單，改這裡即可。companyKey: nexia|oracore|globex|acs|others
  operators: [
    {id:1, name:'James C.',   company:'NVIDIA',         confirmed:true, color:'#76B900', companyKey:'partner', title:'VP, Enterprise Solutions',        years:20, img:1,  focus:'AI · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:2, name:'Michelle L.',company:'Microsoft',      confirmed:true, color:'#2B88D8', companyKey:'partner', title:'Director, Global Strategic Accounts', years:22, img:2, focus:'Strategic Partnerships', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:3, name:'Sarah K.',   company:'AWS',            confirmed:true, color:'#FF9900', companyKey:'partner', title:'VP, Strategic Partnerships APAC', years:18, img:3,  focus:'Cloud · B2B SaaS', linkedin:'', fn:'Partnerships', type:'Founding Council', visible:true},
    {id:4, name:'Ryan H.',    company:'IBM',            confirmed:true, color:'#7B68EE', companyKey:'partner', title:'Director, Cloud Business',        years:24, img:4,  focus:'Enterprise · Cloud', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:5, name:'Amy T.',     company:'Salesforce',     confirmed:true, color:'#00C8F0', companyKey:'partner', title:'VP, Business Development Asia',   years:21, img:5,  focus:'Market Expansion · Asia', linkedin:'', fn:'Growth & BD', type:'Founding Council', visible:true},
    {id:6, name:'Patrick L.', company:'UBS',            confirmed:true, color:'#FF3355', companyKey:'partner', title:'Director, Regional Sales APAC',   years:19, img:6,  focus:'Financial · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:7, name:'Wayne C.',   company:'GlobalFoundries',confirmed:true, color:'#FF7733', companyKey:'partner', title:'VP, Cloud & Solutions',          years:23, img:7,  focus:'Semiconductor · Enterprise', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:8, name:'Yvonne M.',  company:'Sharp',          confirmed:true, color:'#E91E63', companyKey:'partner', title:'VP, Enterprise Accounts',        years:20, img:8,  focus:'Enterprise Accounts', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:9, name:'David T.',   company:'Dentsu',         confirmed:true, color:'#AEB6C2', companyKey:'partner', title:'Director, Channel Partners',     years:25, img:9,  focus:'Media · Channel', linkedin:'', fn:'Channel', type:'Founding Council', visible:true},
    {id:10,name:'Henry C.',   company:'LINE',           confirmed:true, color:'#00C300', companyKey:'partner', title:'VP, Platform Partnerships',      years:22, img:10, focus:'Platform · APAC', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:11,name:'Emma M.',    company:'IDC',            confirmed:true, color:'#4169E1', companyKey:'partner', title:'Director, B2B Partnerships',     years:18, img:11, focus:'Research · Advisory', linkedin:'', fn:'Partnerships', type:'Founding Council', visible:true},
    {id:12,name:'Kevin W.',   company:'Appier',         confirmed:true, color:'#FF5C39', companyKey:'partner', title:'Director, Startup Ecosystem',    years:21, img:13, focus:'AI · GTM', linkedin:'', fn:'Growth & BD', type:'Founding Council', visible:true},
    {id:13,name:'Lisa N.',    company:'iPassMoney',     confirmed:true, color:'#FFC400', companyKey:'partner', title:'Director, Partner Strategy',     years:24, img:14, focus:'Fintech · Partner', linkedin:'', fn:'Partnerships', type:'Founding Council', visible:true},
    {id:14,name:'Ben K.',     company:'TSMC',           confirmed:false,color:'#F25081', companyKey:'potential',title:'VP, Enterprise Sales APAC',     years:19, img:15, focus:'Semiconductor · APAC', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
    {id:15,name:'Thomas C.',  company:'Foxconn',        confirmed:false,color:'#5B9BD5', companyKey:'potential',title:'VP, Strategic Programs',        years:20, img:16, focus:'Manufacturing · Scale', linkedin:'', fn:'Growth & BD', type:'Founding Member', visible:true},
    {id:16,name:'Grace S.',   company:'MediaTek',       confirmed:false,color:'#ED7D31', companyKey:'potential',title:'Director, Enterprise Solutions',years:23, img:17, focus:'Chipset · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
    {id:17,name:'Michael R.', company:'ASUS',           confirmed:false,color:'#48C9B0', companyKey:'potential',title:'VP, Channel Partnerships',      years:22, img:18, focus:'Channel · ISV', linkedin:'', fn:'Channel', type:'Founding Member', visible:true},
    {id:18,name:'Nancy P.',   company:'Acer',           confirmed:false,color:'#A4C639', companyKey:'potential',title:'Director, Enterprise Solutions',years:18, img:19, focus:'Enterprise Solutions', linkedin:'', fn:'Cloud & Infra', type:'Founding Member', visible:true},
    {id:19,name:'Frank Y.',   company:'Quanta',         confirmed:false,color:'#9B59B6', companyKey:'potential',title:'VP, Digital Transformation',    years:21, img:20, focus:'Hardware · Cloud', linkedin:'', fn:'Growth & BD', type:'Founding Member', visible:true},
    {id:20,name:'Alex L.',    company:'Delta',          confirmed:false,color:'#16A085', companyKey:'potential',title:'Director, Enterprise APAC',     years:20, img:21, focus:'Energy · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
    {id:21,name:'Boice Lin',   company:'EvoScale Capital',companyKey:'team',color:'#FF6600',title:'Founder & Managing Partner',     img:57,years:20,focus:'Sales · Scaling',     fn:'Leadership',type:'EvoScale Capital Team',linkedin:'',visible:true},
    {id:22,name:'Vincent Wang', company:'EvoScale Capital',companyKey:'team',color:'#FF6600',title:'Deal Flow Architect / AO',    img:12,years:10,focus:'AI · Methodology',    fn:'Leadership',type:'EvoScale Capital Team',linkedin:'',visible:true},
    {id:23,name:'Alice Liu',    company:'EvoScale Capital',companyKey:'team',color:'#FF6600',title:'Enterprise Partnerships',     img:32,years:12,focus:'Enterprise · Channels',fn:'Leadership',type:'EvoScale Capital Team',linkedin:'',visible:true},
    {id:24,name:'Jason Lin',    company:'EvoScale Capital',companyKey:'team',color:'#FF6600',title:'AI Research & Analysis',      img:25,years:8, focus:'AI · Enterprise NLP',  fn:'Leadership',type:'EvoScale Capital Team',linkedin:'',visible:true},
    {id:25,name:'Tina Su',      company:'EvoScale Capital',companyKey:'team',color:'#FF6600',title:'LP Relations',               img:45,years:9, focus:'LP · Key Accounts',    fn:'Leadership',type:'EvoScale Capital Team',linkedin:'',visible:true},
    {id:26,name:'David Ko',     company:'EvoScale Capital',companyKey:'team',color:'#FF6600',title:'Portfolio Operations',       img:68,years:7, focus:'SPV · Portfolio Ops',  fn:'Leadership',type:'EvoScale Capital Team',linkedin:'',visible:true},
  ],

  // ── Boice 引言 ────────────────────────────────────
  founderQuote: {
    en: "I spent 20 years at the front lines of enterprise sales. Every time I helped a startup land a major account, I kept asking: what if the people who know how to sell were also writing the checks? That's EvoScale Capital.",
    zh: "我在企業業務最前線待了 20 年。每次幫新創拿下大客戶，我都在問：如果真正懂得怎麼賣的人，同時也是寫支票的那個呢？這就是 EvoScale Capital。",
    name: "Boice Lin",
    role_en: "Founder · EvoScale Capital",
    role_zh: "發起人 · EvoScale Capital",
  },
  // ── Stats 標籤 ────────────────────────────────────
  statLabels: {
    operators_en: "Senior Operators", operators_zh: "資深高管",
    exits_en: "Founder Exits",         exits_zh: "團隊出場實績",
    tiers_en: "Investment Tiers",      tiers_zh: "投資層級",
    cycle_en: "Enterprise Cycle Cut",  cycle_zh: "縮短的銷售週期",
  },

  // ── 跑馬燈內容 ────────────────────────────────────
  // Ordered by global prominence (Fortune 500 / Global 500) then Taiwan Top 100 — lays out as a clean 5×3 wall.
  marquee: [{n:'Microsoft',l:'assets/logos/microsoft.svg',h:32,wh:46,u:'https://www.microsoft.com'},{n:'AWS',l:'assets/logos/aws.svg',h:40,wh:50,u:'https://aws.amazon.com'},{n:'Oracle',l:'assets/logos/oracle.svg',h:46,wh:62,u:'https://www.oracle.com'},{n:'IBM',l:'assets/logos/ibm.svg',h:28,wh:40,u:'https://www.ibm.com'},{n:'SAP',l:'assets/logos/sap.svg',h:54,wh:68,u:'https://www.sap.com'},{n:'NVIDIA',l:'assets/logos/nvidia.svg',h:52,wh:64,u:'https://www.nvidia.com'},{n:'Salesforce',l:'assets/logos/salesforce.svg',h:50,wh:60,u:'https://www.salesforce.com'},{n:'UBS',l:'assets/logos/UBS.png?v=2',h:34,wh:52,u:'https://www.ubs.com'},{n:'Sharp',l:'assets/logos/sharp.svg?v=2',h:28,wh:40,u:'https://global.sharp'},{n:'Dentsu',l:'assets/logos/dentsu.svg',h:30,wh:42,u:'https://www.dentsu.com'},{n:'LINE',l:'assets/logos/line.svg',h:48,wh:60,u:'https://line.me'},{n:'GlobalFoundries',l:'assets/logos/globalfoundries.svg',h:28,wh:38,u:'https://gf.com'},{n:'IDC',l:'assets/logos/IDC.png?v=2',h:32,wh:50,u:'https://www.idc.com'},{n:'Appier',l:'assets/logos/Appier.png?v=3',h:38,wh:54,u:'https://www.appier.com'},{n:'TutorABC',l:'assets/logos/tutorabc.svg',h:30,wh:44,u:'https://www.tutorabc.com'},{n:'iPassMoney',l:'assets/logos/ipassmoney.png',h:44,wh:52,u:'https://www.i-pass.com.tw/en'}],

  // ── FAQ ───────────────────────────────────────────
  faq: [
    { q_en: "What B2B startups are a good fit?",
      q_zh: "什麼樣的 B2B 新創適合申請？",
      a_en: "B2B products where an operator LP can directly accelerate the enterprise sales cycle. Ideally: a specific target enterprise customer, early traction, and a founder who moves fast. Both Tier 1 (seed/early) and Tier 2 (pre-IPO) companies may apply.",
      a_zh: "高管 LP 能直接加速企業銷售週期的 B2B 產品。理想條件：明確的目標大廠、早期牽引力，以及能快速行動的創辦人。Tier 1（種子/早期）與 Tier 2（上市前）公司均可申請。" },
    { q_en: "How is this different from traditional VC?",
      q_zh: "這跟傳統創投有什麼不同？",
      a_en: "Traditional VCs provide capital and advice. EvoScale Capital provides capital plus direct enterprise channel access. The operators know the decision-makers at the exact companies your startup is trying to sell to. Early alpha in B2B comes from changing the odds by putting you in the room.",
      a_zh: "傳統創投提供資金與建議。EvoScale Capital 提供資金加上直接的企業通路。這些運營者認識你新創正在嘗試銷售的那些公司的決策者。B2B 早期 Alpha 來自把你直接送進那個房間。" },
    { q_en: "What happens after I submit?",
      q_zh: "提交之後會發生什麼？",
      a_en: "Every submission is reviewed personally by the team. If there's initial fit, a short call follows. Qualified deals enter our rapid assessment and are matched to relevant operator LPs. All submissions are kept confidential.",
      a_zh: "每份申請都由團隊親自審閱。若有初步契合度，會安排簡短通話。通過篩選的案源經快速評估後分配給相關高管 LP。所有申請嚴格保密。" },
    { q_en: "How does the deal review process work?",
      q_zh: "案源審核流程是什麼樣子？",
      a_en: "Every qualified deal first goes through a rapid initial assessment that gives operator LPs the key signals to weigh in within minutes. Once the LPs reach consensus, the deal advances to the Investment Committee for formal due diligence. The early read stays fast and operator-led, while the deeper DD stays rigorous.",
      a_zh: "每個合格案源會先經過快速初步評估，讓高管 LP 在幾分鐘內掌握關鍵訊號做出判斷。當 LP 評估達成共識後，案源就進入投審會進行正式的盡職調查（DD）。前期判斷快速、由高管主導，後段的 DD 仍然嚴謹。" },
    { q_en: "When does EvoScale meet, and how can I take part?",
      q_zh: "EvoScale 多久聚會一次？我能怎麼參與？",
      a_en: "Two recurring gatherings anchor the community. EvoScale 01: The Operator-Led Blueprint brings founding members together to align on how the syndicate works. The Dealroom runs on the last Friday of each month, where three startups that fit our sweet spot pitch to the operator network. Submit a deal or express interest to join the next one.",
      a_zh: "兩場固定聚會構成社群的節奏。EvoScale 01：The Operator-Led Blueprint 讓創始成員齊聚，對齊飛輪的運作機制；Dealroom 案源交易室則在每月最後一個星期五舉行，由三家符合我們 Sweet Spot 的新創向高管網絡簡報。歡迎提交案源或表達加入意願，參與下一場。" },
  ],
};
