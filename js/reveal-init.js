/* reveal-init.js — Aktifkan mode reveal sejak awal agar tidak berkedip (dimuat di <head>) */
(function () {
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reveal-ready');
    setTimeout(function () { if (!window.__revealOK) document.documentElement.classList.remove('reveal-ready'); }, 2500);
  }
})();
