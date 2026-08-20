// 媒體專區的內容來源。要新增就在陣列最前面加一筆，不用動 index.html。
//
// 欄位：
//   kind   press 媒體報導 ／ pod Podcast ／ talk 演講活動 ／ news 公司動態
//   date   YYYY-MM-DD，用來排序，最新的自動排最上面
//   outlet 媒體或主辦單位
//   zh/en  標題　　dzh/den 一句話說明　　url 原文連結
//
// 兩條鐵則
// 1. **只收查得到出處的東西。**沒有可點的連結就不要收。這一頁會被搜尋引擎索引也會被人拿去查證，
//    放一則假的比少放十則真的傷害大得多。
// 2. **身分要標對。**下面每一則都是 Boice 以「Gogolook 商務長」身分的露出，不是以 EvoScale 創辦人身分，
//    所以說明文字裡一律點明當時的身分。不要讓讀者以為那是一春資本的報導。
//
// 2026-08-20 查證：EvoScale Capital／一春資本本身目前**零媒體露出**，這是現況不是遺漏。
window.NEWS = [
  {kind:'pod', date:'2026-06-11', outlet:'愛咪說業務 EP26',
   zh:'每次都押對新創的商業操盤手，賺到本業以外數十倍紅利',
   en:'The operator who keeps backing the right startups',
   dzh:'Boice 談他怎麼在本業之外看早期案子。節目標題標示為「前 Gogolook 商務長」。',
   den:'Boice on backing early-stage startups alongside a full-time operating role.',
   url:'https://amylovestalk.substack.com/p/ep26-ft-gogolook-boice-lin'},

  {kind:'pod', date:'2025-07-02', outlet:'CEO 的筆記本 EP27',
   zh:'主帥的左右手：從解題者到造局者的轉變',
   en:'From problem solver to system builder',
   dzh:'以 Gogolook 商務長身分受訪，談商務主管的角色如何從執行轉向布局。',
   den:'As CBO of Gogolook, on shifting from execution to building the board.',
   url:'https://podcasts.apple.com/tw/podcast/id1786079436?i=1000715372877'},

  {kind:'pod', date:'2025-06-05', outlet:'KPMG 知識音浪 EP430',
   zh:'數位長會客室：Gogolook 如何成為全球防詐軍火商',
   en:'Inside Gogolook: building a global anti-fraud arsenal',
   dzh:'與 KPMG 數位長對談，主題是防詐產品怎麼從 App 做成企業級的解決方案。',
   den:'In conversation with KPMG on scaling anti-fraud from app to enterprise.',
   url:'https://podcasts.apple.com/tw/podcast/id1548889200?i=1000711731669'},

  {kind:'talk', date:'2025-03-21', outlet:'鏡新聞',
   zh:'投資型詐騙科技防禦最前線系列論壇',
   en:'Frontline forum on investment-fraud defence',
   dzh:'以 Gogolook 商務長身分出席論壇，談投資型詐騙的科技防禦。',
   den:'Panel appearance as CBO of Gogolook on tech defences against investment fraud.',
   url:'https://www.youtube.com/watch?v=2sDbHQOCV0A'},

  {kind:'talk', date:'2024-12-03', outlet:'數位信任論壇',
   zh:'走著瞧高管談企業商譽的保護責任',
   en:'On corporate reputation as a trust obligation',
   dzh:'數位信任論壇的發言紀錄，主題是企業對商譽與用戶信任的責任。',
   den:'Remarks at the Digital Trust Forum on corporate reputation and user trust.',
   url:'https://www.sinotrade.com.tw/richclub/news/674e9e6a32ba0c9331ae9007'},

  {kind:'press', date:'2024-01-01', outlet:'商業周刊',
   zh:'林伯翰 Boice Lin 專欄',
   en:'Boice Lin column',
   dzh:'商周的個人專欄，多篇署名文章。這是他本人撰寫，不是媒體專訪。',
   den:'His own column at Business Weekly. Authored pieces, not interviews.',
   url:'https://www.businessweekly.com.tw/OpinionArticle?DocNo=0000000389'},

  {kind:'pod', date:'2025-01-01', outlet:'老闆，你在想什麼？',
   zh:'Boice 自己主持的 Podcast',
   en:'A podcast Boice hosts',
   dzh:'他本人主持的節目，隔週更新。這是主持不是受訪。',
   den:'He hosts this show. Not an interview appearance.',
   url:'https://podcasts.apple.com/de/podcast/id1868369654'},

  {kind:'news', date:'2023-06-30', outlet:'Gogolook 官方新聞稿',
   zh:'Gogolook 延攬新商務長，上市前再衝刺',
   en:'Gogolook appoints new CBO ahead of listing',
   dzh:'Gogolook 官方發布的人事新聞稿，明文點名林伯翰出任商務長。',
   den:'Official Gogolook release naming Boice Lin as Chief Business Officer.',
   url:'https://www.gogolook.com/zh-tw/newsroom/gogolook-shang-shi-qian-zai-chong-ci-xin-dong-shi-hui-jiu-xu-yu-yan-lan-xin-shang-wu-chang'},
];
