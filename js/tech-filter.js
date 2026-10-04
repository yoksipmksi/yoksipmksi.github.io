/* tech-filter.js — Filter tech stack Semua/Developer/Hacker + warna card */
/* Filter tech stack: sisi yang tidak dipilih meredup */
(() => {
  const stack = document.getElementById('stack');
  const btns = [...document.querySelectorAll('.about .filter button')];
  btns.forEach(b => b.addEventListener('click', () => {
    stack.dataset.filter = b.dataset.f;
    stack.closest('.glass').dataset.tone = b.dataset.f === 'all' ? '' : b.dataset.f;
    btns.forEach(x => x.setAttribute('aria-pressed', x === b));
  }));
})();
