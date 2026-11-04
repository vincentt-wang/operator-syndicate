/* 人物卡片篩選與排列（首頁、operators 共用）2026-11-04
   排列：依可見張數與欄數平均分排，各排張數最多差一張（13 張 4/3/3/3、10 張 4/3/3、5 張 3/2），
         避免最後一排只剩一張。寬度 4 欄（>1000）、3 欄（681 到 1000）、1 欄（手機），不用 2 欄，因為奇數張一定剩一張。
   篩選：不屬於的卡先淡出，留下的卡滑到新位置，新出現的卡由下往上淡入（FLIP）。 */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.2,.7,.2,1)';
  function cols() { var w = window.innerWidth; return w > 1000 ? 4 : w > 680 ? 3 : 1; }
  function layout(grid) {
    grid.querySelectorAll('.adv-br').forEach(function (b) { b.remove(); });
    var vis = Array.prototype.filter.call(grid.querySelectorAll('.adv-card'), function (c) { return !c.hidden; });
    var n = vis.length, c = cols();
    if (c < 2 || n <= c) return;
    var r = Math.ceil(n / c), q = Math.floor(n / r), rem = n % r, i = 0;
    for (var k = 0; k < r - 1; k++) {
      i += q + (k < rem ? 1 : 0);
      var br = document.createElement('span'); br.className = 'adv-br'; br.setAttribute('aria-hidden', 'true');
      vis[i - 1].after(br);
    }
  }
  document.querySelectorAll('.adv-filter').forEach(function (bar) {
    var grid = bar.nextElementSibling;
    if (!grid || !grid.classList.contains('adv-grid')) return;
    layout(grid);
    var lastCols = cols();
    window.addEventListener('resize', function () { if (cols() !== lastCols) { lastCols = cols(); layout(grid); } });
    var busy = false;
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('.adv-chip');
      if (!b || b.classList.contains('on') || busy) return;
      bar.querySelectorAll('.adv-chip').forEach(function (x) {
        var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      var cat = b.getAttribute('data-cat');
      var cards = Array.prototype.slice.call(grid.querySelectorAll('.adv-card'));
      var want = function (c) { return cat === 'all' || c.getAttribute('data-cat') === cat; };
      cards.forEach(function (c) { c.classList.add('vis'); });
      if (reduce || !grid.animate) { cards.forEach(function (c) { c.hidden = !want(c); }); layout(grid); return; }
      busy = true;
      var leaving = cards.filter(function (c) { return !c.hidden && !want(c); });
      var out = leaving.map(function (c) {
        return c.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.94)' }], { duration: 160, easing: 'ease-in', fill: 'forwards' });
      });
      setTimeout(function () {
        var first = new Map();
        cards.forEach(function (c) { if (!c.hidden) first.set(c, c.getBoundingClientRect()); });
        var h0 = grid.offsetHeight;
        cards.forEach(function (c) { c.hidden = !want(c); });
        layout(grid);
        out.forEach(function (a) { a.cancel(); });
        var h1 = grid.offsetHeight;
        if (h0 !== h1) grid.animate([{ height: h0 + 'px' }, { height: h1 + 'px' }], { duration: 380, easing: EASE });
        var n = 0;
        cards.forEach(function (c) {
          if (c.hidden) return;
          var last = c.getBoundingClientRect(), f = first.get(c);
          if (f) {
            var dx = f.left - last.left, dy = f.top - last.top;
            if (dx || dy) c.animate([{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'none' }], { duration: 420, easing: EASE });
          } else {
            c.animate([{ opacity: 0, transform: 'translateY(16px) scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 380, delay: Math.min(n++, 8) * 40, easing: EASE, fill: 'backwards' });
          }
        });
        setTimeout(function () { busy = false; }, 200);
      }, leaving.length ? 170 : 0);
    });
  });
})();
