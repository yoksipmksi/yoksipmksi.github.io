/* navbar-sync.js — Warna navbar ikut hijau selama hero mode hacker masih di belakangnya */
(() => {
  const hero = document.getElementById('beranda');
  const bar = document.getElementById('topbar');
  const sync = () => {
    const over = hero.dataset.mode === 'hack' && hero.getBoundingClientRect().bottom > 70;
    bar.dataset.over = over ? 'hack' : '';
  };
  window.addEventListener('scroll', sync, { passive: true });
  document.addEventListener('hero-mode', sync);   // dikirim hero-tabs.js saat mode berganti
  sync();
})();
