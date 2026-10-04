/* contact-info.js — Info kontak: jam lokal (WIB) dan tombol cepat yang mengisi form */
/* Info kontak: jam lokal (WIB) dan tombol cepat yang mengisi form */
(() => {
  const clock = document.getElementById('clock');
  const fmt = new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' });
  const tick = () => { clock.textContent = fmt.format(new Date()).replace('.', ':') + ' WIB'; };
  tick(); setInterval(tick, 15000);

  const form = document.getElementById('contactForm');
  document.querySelectorAll('.quick').forEach(q => q.addEventListener('click', () => {
    form.querySelector('.filter button[data-t="' + q.dataset.t + '"]').click();   // ganti topik + warna card
    form.pesan.value = q.dataset.msg;
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    (form.nama.value ? form.pesan : form.nama).focus({ preventScroll: true });
  }));
})();
