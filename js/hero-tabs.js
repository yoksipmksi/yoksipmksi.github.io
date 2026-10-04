/* hero-tabs.js — Hero: tab Developer/Hacker, ganti card + mode, kembali ke developer di mobile */
(() => {
  const hero = document.getElementById('beranda');
  const tabs = [...hero.querySelectorAll('[role="tab"]')];
  const panels = { dev: document.getElementById('panel-dev'), hack: document.getElementById('panel-hack') };
  const titles = { dev: 'dev.js', hack: 'zsh — root@portfolio' };
  const title = document.getElementById('winTitle');
  Object.values(panels).forEach(p => p.querySelectorAll('.l').forEach((l, i) => l.style.setProperty('--i', i)));

  function setMode(m) {
    hero.dataset.mode = m;
    tabs.forEach(t => {
      const on = t.dataset.mode === m;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
    });
    Object.entries(panels).forEach(([k, p]) => { p.hidden = k !== m; });
    title.textContent = titles[m];
    document.dispatchEvent(new CustomEvent('hero-mode'));   // kabari navbar-sync.js
    const p = panels[m];                       // putar ulang animasi baris
    p.classList.remove('play'); void p.offsetWidth; p.classList.add('play');
  }

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => setMode(t.dataset.mode));
    t.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const n = tabs[(i + 1) % tabs.length];
      n.focus(); setMode(n.dataset.mode);
    });
  });
  setMode('dev');

  const mobile = matchMedia('(max-width: 767.98px)');   // tab disembunyikan di mobile -> kembali ke developer
  mobile.addEventListener('change', e => { if (e.matches) setMode('dev'); });
})();
