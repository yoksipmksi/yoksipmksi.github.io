/* contact-form.js — Form kontak: pilih topik, kirim lewat mailto, salin email */
(() => {
  const form = document.getElementById('contactForm'), EMAIL = 'dhimasindramaulana@gmail.com';
  let topic = 'Proyek';
  const btns = [...form.querySelectorAll('.filter button')];
  btns.forEach(b => b.addEventListener('click', () => {
    topic = b.dataset.t; form.dataset.tone = b.dataset.f || '';
    btns.forEach(x => x.setAttribute('aria-pressed', x === b));
  }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(form), nama = f.get('nama');
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('[' + topic + '] Pesan dari ' + nama) +
      '&body=' + encodeURIComponent(f.get('pesan') + '\n\n- ' + nama);
  });

  const copy = document.getElementById('copyMail'), label = copy.querySelector('span');
  copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(EMAIL); label.textContent = 'Tersalin!'; }
    catch (err) { label.textContent = 'Gagal'; }
    setTimeout(() => label.textContent = 'Salin', 1600);
  });
})();
