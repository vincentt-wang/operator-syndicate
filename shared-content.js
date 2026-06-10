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
    minDeal: "$20K",
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
    {id:1, name:'James C.',    company:'Google',      companyKey:'nexia',   color:'#4285F4', title:'VP, Enterprise Solutions',        years:20, img:1,  focus:'Cloud · Enterprise SaaS', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:2, name:'Michelle L.', company:'Microsoft',      companyKey:'nexia',   color:'#0EA5E9', title:'Director, Global Strategic Accounts', years:22, img:2, focus:'Strategic Partnerships', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:3, name:'Sarah K.',    company:'NVIDIA',      companyKey:'nexia',   color:'#76B900', title:'VP, Strategic Partnerships APAC', years:18, img:3,  focus:'APAC · B2B SaaS', linkedin:'', fn:'Partnerships', type:'Founding Council', visible:true},
    {id:4, name:'Ryan H.',     company:'AWS',      companyKey:'nexia',   color:'#FF9900', title:'Director, Cloud Business',        years:24, img:4,  focus:'Cloud Infrastructure', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:5, name:'Amy T.',      company:'Salesforce',      companyKey:'nexia',   color:'#14B8A6', title:'VP, Business Development Asia',   years:21, img:5,  focus:'Market Expansion · Asia', linkedin:'', fn:'Growth & BD', type:'Founding Council', visible:true},
    {id:6, name:'Patrick L.',  company:'Oracle',    companyKey:'oracore', color:'#EF4444', title:'Director, Regional Sales APAC',   years:19, img:6,  focus:'Database · Enterprise', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:7, name:'Wayne C.',    company:'SAP',    companyKey:'oracore', color:'#6366F1', title:'VP, Database & Cloud Solutions',  years:23, img:7, focus:'Cloud Migration · SaaS', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:8, name:'Yvonne M.',   company:'TSMC',    companyKey:'oracore', color:'#DC2626', title:'VP, Enterprise Accounts',         years:20, img:8,  focus:'Enterprise Accounts', linkedin:'', fn:'Enterprise Sales', type:'Founding Council', visible:true},
    {id:9, name:'David T.',    company:'Foxconn',    companyKey:'oracore', color:'#2563EB', title:'Director, Channel Partners',      years:25, img:9,  focus:'Channel · Resellers', linkedin:'', fn:'Channel', type:'Founding Council', visible:true},
    {id:10,name:'Henry C.',    company:'MediaTek',    companyKey:'globex',  color:'#F97316', title:'VP, Cloud Infrastructure',        years:22, img:10, focus:'Cloud · AI/ML', linkedin:'', fn:'Cloud & Infra', type:'Founding Council', visible:true},
    {id:11,name:'Emma M.',     company:'Delta',    companyKey:'globex',  color:'#06B6D4', title:'Director, B2B Partnerships',      years:18, img:11,  focus:'B2B · Developer Tools', linkedin:'', fn:'Partnerships', type:'Founding Member', visible:true},
    {id:12,name:'Kevin W.',    company:'Chunghwa Telecom',    companyKey:'globex',  color:'#EAB308', title:'Director, Startup Ecosystem',     years:21, img:13,  focus:'Startups · GTM', linkedin:'', fn:'Growth & BD', type:'Founding Member', visible:true},
    {id:13,name:'Lisa N.',     company:'Fubon',    companyKey:'globex',  color:'#059669', title:'Director, Partner Strategy',      years:24, img:14,  focus:'Partner Ecosystem', linkedin:'', fn:'Partnerships', type:'Founding Member', visible:true},
    {id:14,name:'Ben K.',      company:'Cathay',    companyKey:'globex',  color:'#10B981', title:'VP, Enterprise Sales APAC',       years:19, img:15, focus:'Enterprise Sales · APAC', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
    {id:15,name:'Thomas C.',   company:'ASUS',       companyKey:'acs',     color:'#3B82F6', title:'VP, Startup Programs',            years:20, img:16,  focus:'Startups · Cloud Credits', linkedin:'', fn:'Growth & BD', type:'Founding Member', visible:true},
    {id:16,name:'Grace S.',    company:'Acer',       companyKey:'acs',     color:'#84CC16', title:'Director, Enterprise Solutions',  years:23, img:17,  focus:'Enterprise Solutions', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
    {id:17,name:'Michael R.',  company:'Quanta',       companyKey:'acs',     color:'#0891B2', title:'VP, Channel Partnerships',        years:22, img:18, focus:'Channel · ISV', linkedin:'', fn:'Channel', type:'Founding Member', visible:true},
    {id:18,name:'Nancy P.',    company:'Pegatron',       companyKey:'acs',     color:'#A855F7', title:'Director, Cloud Sales APAC',      years:18, img:19,  focus:'Cloud Sales · APAC', linkedin:'', fn:'Cloud & Infra', type:'Founding Member', visible:true},
    {id:19,name:'Frank Y.',    company:'Uni-President',companyKey:'others',  color:'#E11D48', title:'VP, Digital Transformation',     years:21, img:20,  focus:'Digital Transformation', linkedin:'', fn:'Growth & BD', type:'Founding Member', visible:true},
    {id:20,name:'Alex L.',     company:'CTBC', companyKey:'others',  color:'#8B5CF6', title:'Director, Enterprise APAC',       years:20, img:21,  focus:'Enterprise Sales', linkedin:'', fn:'Enterprise Sales', type:'Founding Member', visible:true},
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
    role_en: "Founder · Gogolook · Appier · EvoScale Capital",
    role_zh: "發起人 · Gogolook · Appier · EvoScale Capital",
  },
  // ── Stats 標籤 ────────────────────────────────────
  statLabels: {
    operators_en: "Senior Operators", operators_zh: "資深高管",
    exits_en: "Founder Exits",         exits_zh: "團隊出場實績",
    tiers_en: "Investment Tiers",      tiers_zh: "投資層級",
    cycle_en: "Enterprise Cycle Cut",  cycle_zh: "縮短的銷售週期",
  },

  // ── 跑馬燈內容 ────────────────────────────────────
  marquee: [{n:'IBM',l:'assets/logos/ibm.svg',h:23},{n:'Microsoft',l:'assets/logos/microsoft.svg',h:25},{n:'Salesforce',l:'assets/logos/salesforce.svg',h:36},{n:'AWS',l:'assets/logos/aws.svg',h:30},{n:'NVIDIA',l:'assets/logos/nvidia.svg',h:40},{n:'Dentsu',l:'assets/logos/dentsu.svg',h:25},{n:'GlobalFoundries',l:'assets/logos/globalfoundries.svg',h:26},{n:'LINE',l:'assets/logos/line.svg',h:34},{n:'Sharp',l:'assets/logos/sharp.svg',h:28},{n:'UBS',l:''},{n:'IDC',l:''},{n:'Appier',l:''},{n:'iPassMoney',l:''}],

  // ── FAQ ───────────────────────────────────────────
  faq: [
    { q_en: "What B2B startups are a good fit?",
      q_zh: "什麼樣的 B2B 新創適合申請？",
      a_en: "B2B products where an operator LP can directly accelerate the enterprise sales cycle. Ideally: a specific target enterprise customer, early traction, and a founder who moves fast. Both Tier 1 (seed/early) and Tier 2 (pre-IPO) companies may apply.",
      a_zh: "高管 LP 能直接加速企業銷售週期的 B2B 產品。理想條件：明確的目標大廠、早期牽引力，以及能快速行動的創辦人。Tier 1（種子/早期）與 Tier 2（上市前）公司均可申請。" },
    { q_en: "How is this different from traditional VC?",
      q_zh: "這跟傳統創投有什麼不同？",
      a_en: "Traditional VCs provide capital and advice. EvoScale Capital provides capital plus direct enterprise channel access. The operators are decision-makers at the exact companies your startup is trying to sell to. Early alpha in B2B comes from changing the odds by putting you in the room.",
      a_zh: "傳統創投提供資金與建議。EvoScale Capital 提供資金加上直接的企業通路。這些運營者是你新創正在嘗試銷售的那些公司的決策者。B2B 早期 Alpha 來自把你直接送進那個房間。" },
    { q_en: "What happens after I submit?",
      q_zh: "提交之後會發生什麼？",
      a_en: "Every submission is reviewed personally by the team. If there's initial fit, a short call follows. Qualified deals enter our rapid assessment and are matched to relevant operator LPs. All submissions are kept confidential.",
      a_zh: "每份申請都由團隊親自審閱。若有初步契合度，會安排簡短通話。通過篩選的案源經快速評估後分配給相關高管 LP。所有申請嚴格保密。" },
    { q_en: "How does the deal review process work?",
      q_zh: "案源審核流程是什麼樣子？",
      a_en: "Every qualified deal goes through a proprietary rapid assessment — a structured review that gives operator LPs the key signals they need to decide in minutes, not days. It eliminates noise and surfaces only what matters: the problem, the opportunity, the strategic fit, and the honest risk.",
      a_zh: "每個通過篩選的案源都會經過一套專屬的快速決策流程，讓高管 LP 在幾分鐘內掌握關鍵信號。它去除噪音，只留下真正重要的：問題、機會、策略契合度、以及誠實的風險評估。" },
    { q_en: "What stage is EvoScale Capital at right now?",
      q_zh: "EvoScale Capital 目前處於什麼階段？",
      a_en: "Pre-launch. The operator LP network is being finalized and first deal submissions are being reviewed. The formal Launch event is planned for June 2026. Startups who submit before Launch receive priority review.",
      a_zh: "Launch 前。運營者 LP 網絡正在最終確認，首批案源申請正在審閱中。正式 Launch 大會預計 2026 年 6 月舉行。在 Launch 前提交的新創享有優先審閱資格。" },
  ],
};
