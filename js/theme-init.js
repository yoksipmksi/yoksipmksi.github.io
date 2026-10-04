/* theme-init.js — Terapkan tema tersimpan sebelum halaman tampil (dimuat di <head>, tanpa defer) */
(function () {
  var t = null;
  try { t = localStorage.getItem('tema'); } catch (e) { }
  if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', t);
})();
