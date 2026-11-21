// Fades (and gently drifts) the hero background image as the reader scrolls toward the projects.
(function () {
  var bg = document.querySelector('.hero-bg');
  var hero = document.querySelector('.hero');
  if (!bg || !hero) return;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;
  function update() {
    ticking = false;
    var h = hero.offsetHeight;
    if (!h) return;
    var y = Math.max(0, window.scrollY);
    bg.style.opacity = Math.max(0, Math.min(1, 1 - y / (h * 0.85)));
    if (!still) bg.style.transform = 'translateY(' + (y * 0.25) + 'px)';
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();