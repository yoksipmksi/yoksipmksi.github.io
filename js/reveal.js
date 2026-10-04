/* reveal.js — Elemen muncul bertahap saat masuk layar (IntersectionObserver) */
/* Scroll reveal: card proyek muncul bertahap saat masuk layar */
(() => {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.__revealOK = true;
  document.documentElement.classList.add('reveal-ready');

  const io = new IntersectionObserver(entries => {
    entries.filter(e => e.isIntersecting).forEach((e, i) => {
      e.target.style.transitionDelay = Math.min(i, 6) * 130 + 'ms';   // muncul berurutan
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    });
  }, { threshold: .15, rootMargin: '0px 0px -6% 0px' });

  items.forEach(el => io.observe(el));
})();
