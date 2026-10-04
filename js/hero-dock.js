/* hero-dock.js — Hero: ikon medsos membesar mengikuti kursor */
(() => {
  /* Dock: ikon membesar sesuai jarak kursor */
  const dock = document.getElementById('dock');
  const items = [...dock.querySelectorAll('a')];
  if (matchMedia('(hover: hover)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    dock.addEventListener('mousemove', e => items.forEach(a => {
      const r = a.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      a.style.setProperty('--s', 1 + .2 * Math.max(0, 1 - d / 90));
    }));
    dock.addEventListener('mouseleave', () => items.forEach(a => a.style.setProperty('--s', 1)));
  }
})();
