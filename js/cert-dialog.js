/* cert-dialog.js — Popup sertifikat (dialog): klik kartu, panah, Esc */
/* Popup sertifikat: klik kartu, panah kiri/kanan untuk berpindah, Esc atau klik di luar untuk menutup */
(() => {
  const dlg = document.getElementById('certDialog'), img = document.getElementById('certImg'), fb = document.getElementById('certFallback');
  const $ = id => document.getElementById(id);
  const cards = [...document.querySelectorAll('.cert')];
  let i = 0;

  const show = n => {
    i = (n + cards.length) % cards.length;
    const c = cards[i], src = c.getAttribute('href');
    dlg.dataset.tone = c.dataset.side;
    $('certTitle').textContent = c.querySelector('h3').textContent;
    $('certTag').textContent = c.querySelector('.cert-tag').textContent;
    $('certMeta').textContent = c.querySelector('p.small').textContent;
    $('certId').textContent = c.querySelector('.cert-id span').textContent;
    $('certCount').textContent = (i + 1) + ' / ' + cards.length;
    $('certOpen').href = src; $('certPath').textContent = src;
    img.alt = 'Sertifikat ' + $('certTitle').textContent;
    img.hidden = false; fb.hidden = true;
    img.onerror = () => { img.hidden = true; fb.hidden = false; };
    img.src = src;
  };
  cards.forEach((c, n) => c.addEventListener('click', e => {
    e.preventDefault(); show(n);
    dlg.showModal(); document.documentElement.style.overflow = 'hidden';
  }));
  $('certPrev').addEventListener('click', () => show(i - 1));
  $('certNext').addEventListener('click', () => show(i + 1));
  $('certClose').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });       // klik area gelap
  dlg.addEventListener('close', () => { document.documentElement.style.overflow = ''; });
  dlg.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();
