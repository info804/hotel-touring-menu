/**
 * site.js — comportamenti comuni a tutte le pagine
 *  - conteggio visite (solo se TRACK_URL è impostato)
 *  - ricarica automatica quando il menù cambia (data/version.json)
 */
(function () {
  'use strict';

  // URL del worker admin, es. 'https://hotel-menu-admin.<sottodominio>.workers.dev'. Vuoto = nessun conteggio.
  var TRACK_URL = '';

  var page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
  if (TRACK_URL) {
    try { fetch(TRACK_URL + '/track?page=' + encodeURIComponent(page), { method: 'POST', mode: 'no-cors' }).catch(function () {}); } catch (e) { /* ignora */ }
  }

  // Sfondo: a inizio pagina è in cima, scorrendo scende pian piano fino ad arrivare in fondo a fine pagina
  (function () {
    var root = document.documentElement, mtn = document.querySelector('.mtn'), tk = false;
    if (!mtn || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    function upd() {
      tk = false;
      var max = root.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      mtn.style.setProperty('--p', p.toFixed(4));
    }
    function req() { if (!tk) { tk = true; requestAnimationFrame(upd); } }
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    window.addEventListener('load', req);
    upd();
  })();

  // Tasto flottante "Menù": compare dopo un po' di scroll
  var fab = document.getElementById('fab');
  if (fab) {
    var ticking = false;
    var upd = function () { ticking = false; fab.classList.toggle('visible', window.scrollY > 320); };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }

  var known = null;
  function check() {
    fetch('data/version.json?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (known === null) { known = d.v; return; }
        if (d.v !== known) { var u = new URL(location.href); u.searchParams.set('_r', d.v); location.replace(u.toString()); }
      })
      .catch(function () {});
  }
  check();
  setInterval(function () { if (!document.hidden) check(); }, 60000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) check(); });
})();
