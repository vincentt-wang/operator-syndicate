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
    positioning_en: "Taiwan's first operator-led syndicate. We help B2B startups land enterprise customers and break through the next revenue ceiling.",
    positioning_zh: "全台首創 Operator-Led 投資飛輪。我們幫 B2B 新創打進企業客戶，再突破下一個營收天花板。",
    // 2026-07-15：原為「Launching June 2026／2026 年 6 月 Launch」，該日期已過，改用邀請制框架（不綁日期）。
    // 只有 pitch.html 讀這兩個 key（index.html／operators.html 未使用）。
    launch_en: "Invitation-Only",
    launch_zh: "邀請制",
  },


  // ── 100% 網絡參與（Stage2 風格的核心承諾） ──────────
  involvement: {
    stat: "100%",
    headline_en: "Every deal. Every time.",
    headline_zh: "每一筆投資，每一次都動用網絡",
    body_en: "We match seasoned go-to-market operators to the exact strategic and operational needs of each B2B company we back — joining as advisors, board members, or hands-on executives. Every investment we make puts the network to work, not just a check.",
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
    { label_en: "Tier 1 — Early Stage", label_zh: "Tier 1：早期階段",
      range_en: "US$150K–1.5M ARR", range_zh: "NT$500萬–5,000萬 ARR",
      sub_en: "Seed to Series A", sub_zh: "種子輪至 A 輪" },
    { label_en: "Tier 2 — Pre-IPO", label_zh: "Tier 2：上市前",
      range_en: "US$1.5M–20M ARR", range_zh: "NT$5,000萬–6億 ARR",
      sub_en: "Growth to Pre-IPO", sub_zh: "成長期至上市前" },
  ],

  // ── RaaS 三柱 ─────────────────────────────────────
  pillars: [
    { title_en: "Network Alpha", title_zh: "Network Alpha",
      desc_en: "Your enterprise relationships are the alpha. We measure them, put them to work for the companies we back, and turn them into returns.",
      desc_zh: "你的企業關係就是 Alpha。我們盤點這些關係，用在投資的公司身上，再轉成報酬。" },
    { title_en: "Revenue Intelligence Architecture", title_zh: "營收智能架構",
      desc_en: "Capital, operating experience, and relationships, run as one repeatable growth system.",
      desc_zh: "把資金、實戰經驗與人脈，放進同一套可重複的成長方法。" },
    { title_en: "Operator-Led Community", title_zh: "高管社群",
      desc_en: "Taiwan's densest network of senior sales executives, all active in tech and investing. Members who put in hands-on work earn Spring Credit.",
      desc_zh: "台灣密度最高的業務高管社群，成員都活躍於科技與投資。實際下場幫忙的會員，會得到 Spring Credit 點數回饋。" },
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
    {id:1, name:'',   company:'NVIDIA',         confirmed:true, color:'#76B900', companyKey:'partner', title:'',        years:20, img:1,  focus:'AI · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:2, name:'',company:'Microsoft',      confirmed:true, color:'#2B88D8', companyKey:'partner', title:'', years:22, img:2, focus:'Strategic Partnerships', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:3, name:'',   company:'AWS',            confirmed:true, color:'#FF9900', companyKey:'partner', title:'', years:18, img:3,  focus:'Cloud · B2B SaaS', linkedin:'', fn:'Partnerships', type:'Founding Council', visible:true},
    {id:4, name:'',    company:'IBM',            confirmed:true, color:'#7B68EE', companyKey:'partner', title:'',        years:24, img:4,  focus:'Enterprise · Cloud', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:5, name:'',     company:'Salesforce',     confirmed:true, color:'#00C8F0', companyKey:'partner', title:'',   years:21, img:5,  focus:'Market Expansion · Asia', linkedin:'', fn:'Growth & BD', type:'Founding Council', visible:true},
    {id:6, name:'', company:'UBS',            confirmed:true, color:'#FF3355', companyKey:'partner', title:'',   years:19, img:6,  focus:'Financial · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:7, name:'',   company:'GlobalFoundries',confirmed:true, color:'#FF7733', companyKey:'partner', title:'',          years:23, img:7,  focus:'Semiconductor · Enterprise', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:8, name:'',  company:'Sharp',          confirmed:true, color:'#E91E63', companyKey:'partner', title:'',        years:20, img:8,  focus:'Enterprise Accounts', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:9, name:'',   company:'Dentsu',         confirmed:true, color:'#AEB6C2', companyKey:'partner', title:'',     years:25, img:9,  focus:'Media · Channel', linkedin:'', fn:'Channel', type:'Founding Council', visible:true},
    {id:10,name:'',   company:'LINE',           confirmed:true, color:'#00C300', companyKey:'partner', title:'',      years:22, img:10, focus:'Platform · APAC', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:11,name:'',    company:'IDC',            confirmed:true, color:'#4169E1', companyKey:'partner', title:'',     years:18, img:11, focus:'Research · Advisory', linkedin:'', fn:'Partnerships', type:'Founding Council', visible:true},
    {id:12,name:'',   company:'Appier',         confirmed:true, color:'#FF5C39', companyKey:'partner', title:'',    years:21, img:13, focus:'AI · GTM', linkedin:'', fn:'Growth & BD', type:'Founding Council', visible:true},
    {id:13,name:'',    company:'iPassMoney',     confirmed:true, color:'#FFC400', companyKey:'partner', title:'',     years:24, img:14, focus:'Fintech · Partner', linkedin:'', fn:'Partnerships', type:'Founding Council', visible:true},
    {id:14,name:'',     company:'TSMC',           confirmed:false,color:'#F25081', companyKey:'potential',title:'',     years:19, img:15, focus:'Semiconductor · APAC', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
    {id:15,name:'',  company:'Foxconn',        confirmed:false,color:'#5B9BD5', companyKey:'potential',title:'',        years:20, img:16, focus:'Manufacturing · Scale', linkedin:'', fn:'Growth & BD', type:'Founding Member', visible:true},
    {id:16,name:'',   company:'MediaTek',       confirmed:false,color:'#ED7D31', companyKey:'potential',title:'',years:23, img:17, focus:'Chipset · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
    {id:17,name:'', company:'ASUS',           confirmed:false,color:'#48C9B0', companyKey:'potential',title:'',      years:22, img:18, focus:'Channel · ISV', linkedin:'', fn:'Channel', type:'Founding Member', visible:true},
    {id:18,name:'',   company:'Acer',           confirmed:false,color:'#A4C639', companyKey:'potential',title:'',years:18, img:19, focus:'Enterprise Solutions', linkedin:'', fn:'Cloud & Infra', type:'Founding Member', visible:true},
    {id:19,name:'',   company:'Quanta',         confirmed:false,color:'#9B59B6', companyKey:'potential',title:'',    years:21, img:20, focus:'Hardware · Cloud', linkedin:'', fn:'Growth & BD', type:'Founding Member', visible:true},
    {id:20,name:'',    company:'Delta',          confirmed:false,color:'#16A085', companyKey:'potential',title:'',     years:20, img:21, focus:'Energy · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
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
    cycle_en: "Sales Cycle Reduction",  cycle_zh: "縮短的銷售週期",
  },

  // ── 跑馬燈內容 ────────────────────────────────────
  // Ordered by global prominence (Fortune 500 / Global 500) then Taiwan Top 100 — lays out as a clean 5×3 wall.
  marquee: [{n:'Microsoft',l:'assets/logos/microsoft.svg',h:32,wh:46,u:'https://www.microsoft.com'},{n:'AWS',l:'assets/logos/aws.svg',h:40,wh:50,u:'https://aws.amazon.com'},{n:'Oracle',l:'assets/logos/oracle.svg',h:46,wh:62,u:'https://www.oracle.com'},{n:'IBM',l:'assets/logos/ibm.svg',h:28,wh:40,u:'https://www.ibm.com'},{n:'SAP',l:'assets/logos/sap.svg',h:54,wh:68,u:'https://www.sap.com'},{n:'NVIDIA',l:'assets/logos/nvidia.svg',h:52,wh:64,u:'https://www.nvidia.com'},{n:'Salesforce',l:'assets/logos/salesforce.svg',h:50,wh:60,u:'https://www.salesforce.com'},{n:'UBS',l:'assets/logos/UBS.png?v=2',h:34,wh:52,u:'https://www.ubs.com'},{n:'Sharp',l:'assets/logos/sharp.svg?v=2',h:28,wh:40,u:'https://global.sharp'},{n:'Dentsu',l:'assets/logos/dentsu.svg',h:30,wh:42,u:'https://www.dentsu.com'},{n:'LINE',l:'assets/logos/line.svg',h:48,wh:60,u:'https://line.me'},{n:'GlobalFoundries',l:'assets/logos/globalfoundries.svg',h:28,wh:38,u:'https://gf.com'},{n:'IDC',l:'assets/logos/IDC.png?v=2',h:32,wh:50,u:'https://www.idc.com'},{n:'Appier',l:'assets/logos/Appier.png?v=3',h:38,wh:54,u:'https://www.appier.com'},{n:'TutorABC',l:'assets/logos/tutorabc.svg',h:30,wh:44,u:'https://www.tutorabc.com'},{n:'iPassMoney',l:'assets/logos/ipassmoney.png',h:44,wh:52,u:'https://www.i-pass.com.tw/en'}],

  // ── FAQ ───────────────────────────────────────────
  faq: [
    { q_en: "What B2B startups are a good fit?",
      q_zh: "什麼樣的 B2B 新創適合申請？",
      a_en: "B2B companies whose enterprise sales cycle an operator LP can shorten directly. We look for a clear target customer, early traction, and a founder who moves fast. Both Tier 1 (seed to Series A) and Tier 2 (pre-IPO) companies can apply.",
      a_zh: "高管 LP 能直接縮短企業銷售週期的 B2B 公司。我們看三件事：目標客戶明確、已有初步成績、創辦人動作快。Tier 1（種子輪至 A 輪）與 Tier 2（上市前）的公司都可以申請。" },
    { q_en: "How is this different from traditional VC?",
      q_zh: "這跟傳統創投有什麼不同？",
      a_en: "Most VCs bring capital and advice. EvoScale Capital brings capital plus direct access to enterprise buyers. Our operators have spent decades selling into large companies, and they coach founders on how those companies actually buy.",
      a_zh: "傳統創投給資金和建議。EvoScale Capital 給資金，也直接帶你接觸企業買方。我們的高管在大企業做了幾十年銷售，會教創辦人企業實際上怎麼採購。" },
    { q_en: "What happens after I submit?",
      q_zh: "提交之後會發生什麼？",
      a_en: "Our team reads every submission. If it looks like a fit, we set up a 30-minute call. Deals that move forward get a quick assessment and are matched with operator LPs who know the space. Every submission stays confidential.",
      a_zh: "每份申請都由團隊親自讀過。看起來適合的話，我們會約一場 30 分鐘的線上會議。繼續往下走的案子會經過快速評估，再配對給熟悉這個領域的高管 LP。所有申請都保密。" },
    { q_en: "How does the deal review process work?",
      q_zh: "案源審核流程是什麼樣子？",
      a_en: "Each qualified deal starts with a short assessment that lets operator LPs weigh in within minutes. If the LPs agree, the deal moves to the Investment Committee for formal due diligence. The first read is fast and run by operators. The diligence is thorough.",
      a_zh: "合格的案子先做一輪快速評估，讓高管 LP 幾分鐘內就能看懂重點、表達意見。LP 有共識之後，案子進投審會做正式的盡職調查（DD）。前段快，由高管主導；後段的 DD 照樣嚴謹。" },
    { q_en: "When does EvoScale meet, and how can I take part?",
      q_zh: "EvoScale 多久聚會一次？我能怎麼參與？",
      a_en: "We run two recurring gatherings. EvoScale 01: The Operator-Led Blueprint brings founding members together to agree on how the syndicate runs. The Dealroom meets on the last Thursday of each month, when three startups that fit our thesis pitch to the operator network. To join the next one, submit a deal or tell us you want a seat.",
      a_zh: "我們有兩場固定聚會。EvoScale 01：The Operator-Led Blueprint 讓創始成員聚在一起，談定飛輪怎麼運作。Dealroom 案源交易室在每月最後一個星期四舉行，由三家符合我們投資方向的新創向高管網絡簡報。想參加下一場，可以提交案源或跟我們說一聲。" },
  ],
};
