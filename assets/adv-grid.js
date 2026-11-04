/* 人物卡片篩選（首頁、operators 共用）2026-11-04
   點上方分類：不屬於的卡先淡出，留下的卡滑到新位置，新出現的卡由下往上淡入（FLIP）。
   最後一排置中由 adv-grid.css 處理。 */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.2,.7,.2,1)';
  document.querySelectorAll('.adv-filter').forEach(function (bar) {
    var grid = bar.nextElementSibling;
    if (!grid || !grid.classList.contains('adv-grid')) return;
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
      if (reduce || !grid.animate) { cards.forEach(function (c) { c.hidden = !want(c); }); return; }
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
