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
