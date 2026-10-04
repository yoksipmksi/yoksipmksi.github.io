/* theme.js — Tombol ganti tema terang/gelap (disimpan di localStorage) */
(() => {
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  /* ----- Tema gelap / terang ----- */
  const updateLabel = () => {
    const dark = root.getAttribute('data-bs-theme') === 'dark';
    themeBtn.setAttribute('aria-label', dark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap');
  };
  updateLabel();

  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', next);
    try { localStorage.setItem('tema', next); } catch (e) { }
    updateLabel();
  });
})();
