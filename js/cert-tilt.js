/* cert-tilt.js — Kartu sertifikat miring + kilau mengikuti kursor */
(() => {
  if (matchMedia('(hover: hover)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.cert').forEach(c => {
      c.addEventListener('mousemove', e => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty('--mx', x * 100 + '%'); c.style.setProperty('--my', y * 100 + '%');
        c.style.setProperty('--rx', (.5 - y) * 8 + 'deg'); c.style.setProperty('--ry', (x - .5) * 8 + 'deg');
      });
      c.addEventListener('mouseleave', () => { c.style.removeProperty('--rx'); c.style.removeProperty('--ry'); });
    });
  }
})();
