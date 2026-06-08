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
    name: "Operator Syndicate",
    tagline_en_1: "We Don't Just Invest,",
    tagline_en_2: "We Scale.",
    tagline_zh_1: "不只是投資",
    tagline_zh_2: "我們帶你做大",
    positioning_en: "Taiwan's first Sales-Driven syndicate. 50+ senior operators turning personal influence into enterprise deals — and capital returns.",
    positioning_zh: "全台首創 Sales-Driven 投資模式。50+ 位業務高管把個人影響力轉化為高槓桿資本報酬，帶你從個位數客戶走向億級規模。",
    launch_en: "Launching June 2026",
    launch_zh: "2026 年 6 月 Launch",
  },

  // ── 關鍵數字 ──────────────────────────────────────
  stats: {
    operators: "50+",
    response: "48hr",
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
    { title_en: "Science of Scaling", title_zh: "科學賦能",
      desc_en: "A repeatable playbook for B2B revenue growth — sales strategy, procurement navigation, AI-augmented coaching.",
      desc_zh: "可複製的 B2B 業績成長劇本：業務策略、採購引導、AI 輔助教練系統。" },
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
    {id:1, name:'James C.',    company:'Nexia',   companyKey:'nexia',   color:'#3B82F6', title:'VP, Enterprise Solutions',          img:1},
    {id:2, name:'Michelle L.', company:'Nexia',   companyKey:'nexia',   color:'#3B82F6', title:'Director, Global Strategic Accounts', img:5},
    {id:3, name:'Sarah K.',    company:'Nexia',   companyKey:'nexia',   color:'#3B82F6', title:'Head of Partnerships, APAC',         img:9},
    {id:4, name:'Ryan H.',     company:'Nexia',   companyKey:'nexia',   color:'#3B82F6', title:'Senior Manager, Cloud Business',     img:13},
    {id:5, name:'Amy T.',      company:'Nexia',   companyKey:'nexia',   color:'#3B82F6', title:'VP, Business Development Asia',      img:17},
    {id:6, name:'Patrick L.',  company:'Oracore', companyKey:'oracore', color:'#EF4444', title:'Regional Sales Director, APAC',      img:21},
    {id:7, name:'Wayne C.',    company:'Oracore', companyKey:'oracore', color:'#EF4444', title:'VP, Database & Cloud Solutions',     img:25},
    {id:8, name:'Yvonne M.',   company:'Oracore', companyKey:'oracore', color:'#EF4444', title:'Head of Enterprise Accounts',        img:29},
    {id:9, name:'David T.',    company:'Oracore', companyKey:'oracore', color:'#EF4444', title:'Director, Channel Partners',         img:33},
    {id:10,name:'Henry C.',    company:'Globex',  companyKey:'globex',  color:'#8B5CF6', title:'VP, Cloud Infrastructure',           img:37},
    {id:11,name:'Emma M.',     company:'Globex',  companyKey:'globex',  color:'#8B5CF6', title:'Director, B2B Partnerships',         img:41},
    {id:12,name:'Kevin W.',    company:'Globex',  companyKey:'globex',  color:'#8B5CF6', title:'Head of Startup Ecosystem',          img:45},
    {id:13,name:'Lisa N.',     company:'Globex',  companyKey:'globex',  color:'#8B5CF6', title:'Senior Partner Manager',             img:49},
    {id:14,name:'Ben K.',      company:'Globex',  companyKey:'globex',  color:'#8B5CF6', title:'VP, Enterprise Sales APAC',          img:53},
    {id:15,name:'Thomas C.',   company:'ACS',     companyKey:'acs',     color:'#0EA5E9', title:'Head of Startup Programs',           img:57},
    {id:16,name:'Grace S.',    company:'ACS',     companyKey:'acs',     color:'#0EA5E9', title:'Director, Enterprise Architecture',  img:61},
    {id:17,name:'Michael R.',  company:'ACS',     companyKey:'acs',     color:'#0EA5E9', title:'VP, Channel Partnerships',           img:65},
    {id:18,name:'Nancy P.',    company:'ACS',     companyKey:'acs',     color:'#0EA5E9', title:'Regional Manager, Cloud Sales',      img:68},
    {id:19,name:'Frank Y.',    company:'SalesBridge',companyKey:'others',color:'#10B981',title:'VP, Digital Transformation',         img:3},
    {id:20,name:'Alex L.',     company:'Microtek',companyKey:'others', color:'#6B7280', title:'Director, Enterprise APAC',          img:7},
  ],

  // ── Boice 引言 ────────────────────────────────────
  founderQuote: {
    en: "I spent 20 years at the front lines of enterprise sales. Every time I helped a startup land a major account, I kept asking: what if the people who know how to sell were also writing the checks? That's Operator Syndicate.",
    zh: "我在企業業務最前線待了 20 年。每次幫新創拿下大客戶，我都在問：如果真正懂得怎麼賣的人，同時也是寫支票的那個呢？這就是 Operator Syndicate。",
    name: "Boice Chen",
    role_en: "Founder · Gogolook · Appier · Operator Syndicate",
    role_zh: "發起人 · Gogolook · Appier · Operator Syndicate",
  },
};
