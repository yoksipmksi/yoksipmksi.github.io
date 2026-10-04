/* navbar.js — Auto-hide navbar: sembunyi saat scroll turun, muncul saat kursor di tepi atas */
(() => {
  const bar = document.getElementById('topbar');
  const hotZone = document.getElementById('hotZone');
  const canHover = window.matchMedia('(hover: hover)').matches;
  const TOP_EDGE = 40;    // px dari atas layar yang memicu bar muncul
  const MIN_SCROLL = 80;  // bar baru boleh hilang setelah scroll sejauh ini
  let lastY = window.scrollY;
  let hideTimer;
  let hovering = false;   // true selama kursor berada di atas navbar

  /* ----- Auto-hide ----- */
  const show = () => { clearTimeout(hideTimer); bar.classList.remove('is-hidden'); };
  const hide = () => {
    if (hovering) return;   // jangan hilang selagi kursor masih di navbar
    if (window.scrollY > MIN_SCROLL) bar.classList.add('is-hidden');
  };

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y <= MIN_SCROLL) show();
    else if (y > lastY) hide();
    else if (!canHover) show();      // layar sentuh: muncul saat scroll ke atas
    lastY = y;
  }, { passive: true });

  hotZone.addEventListener('mouseenter', show);
  document.addEventListener('mousemove', e => { if (e.clientY <= TOP_EDGE) show(); });
  bar.addEventListener('mouseenter', () => { hovering = true; show(); });
  bar.addEventListener('mouseleave', () => {
    hovering = false;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 700);   // hilang setelah kursor pergi
  });
  bar.addEventListener('focusin', show);
})();
