/* stats-counter.js — Angka statistik hero menghitung naik dari 0 */
(() => {
  /* Angka statistik naik dari 0 */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-count]').forEach(el => {
      const to = +el.dataset.count, t0 = performance.now();
      const tick = t => {
        const k = Math.min((t - t0) / 1200, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      el.textContent = 0; requestAnimationFrame(tick);
    });
  }
})();
