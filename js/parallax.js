/* parallax.js — Efek parallax scroll (glow hero, card kanan, mockup proyek) */
/* Parallax scroll: glow hero + card kanan bergerak beda kecepatan, mockup proyek bergeser di dalam card */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = document.documentElement;
  const cards = [...document.querySelectorAll('.project')];
  let ticking = false;

  const update = () => {
    const vh = innerHeight;
    root.style.setProperty('--sy', Math.min(scrollY, vh));       // hero: berhenti setelah 1 layar
    cards.forEach(c => {
      const r = c.getBoundingClientRect();
      const p = r.top + r.height / 2 - vh / 2;                   // jarak card dari tengah layar
      c.style.setProperty('--p', Math.max(-300, Math.min(300, p)));
    });
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener('resize', update);
  update();
})();
