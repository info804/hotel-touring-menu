/**
 * i18n.js — lingue del menù
 * ------------------------------------------------------------
 * Per aggiungere/togliere una lingua dal selettore basta cambiare
 * `enabled` nella lista LANGS qui sotto: nessun'altra modifica.
 *  - NATIVE: lingue con testi scritti a mano (data/i18n/*.js) sulle pagine che li hanno
 *  - tutte le altre: traduzione automatica Google (caricata solo quando serve)
 * Ordine = ordine nel selettore (le più usate per prime).
 */
(function () {
  'use strict';

  var LANGS = [
    { code: 'it',    name: 'Italiano',   enabled: true },
    { code: 'en',    name: 'English',    enabled: true },
    { code: 'de',    name: 'Deutsch',    enabled: true },
    { code: 'pl',    name: 'Polski',     enabled: true },
    { code: 'cs',    name: 'Čeština',    enabled: true },
    { code: 'fr',    name: 'Français',   enabled: true },
    { code: 'nl',    name: 'Nederlands', enabled: true },
    { code: 'ro',    name: 'Română',     enabled: true },
    { code: 'es',    name: 'Español',    enabled: true },
    { code: 'sr',    name: 'Srpski',     enabled: true },
    // disponibili ma nascoste (riattivabili con enabled: true)
    { code: 'zh-CN', name: '中文',        enabled: false },
    { code: 'ja',    name: '日本語',       enabled: false },
    { code: 'hi',    name: 'हिन्दी',       enabled: false }
  ];
  var NATIVE = ['it', 'en', 'de'];
  var KEY = 'tl_lang';

  var UI = {
    it: {
      contact: 'Contattaci', pricesEuro: 'Tutti i prezzi indicati in euro.',
      menu: 'Menù', open: 'Apri', home: 'Torna ai menù', language: 'Lingua', chooseLanguage: 'Scegli la lingua', close: 'Chiudi',
      allergens: 'Allergeni', allergensTitle: 'Allergeni', perPerson: 'a persona', tasting: 'Degustazioni',
      gtNote: 'Traduzione automatica: può contenere errori.',
      allergenNote: 'Alcuni prodotti possono essere surgelati o abbattuti secondo il reg. CE 852/04. Per info, rivolgersi al responsabile di sala.',
      alg: ['Glutine', 'Crostacei', 'Uova', 'Pesce', 'Arachidi', 'Soia', 'Latte', 'Frutta a guscio', 'Sedano', 'Senape', 'Sesamo', 'Anidride solforosa', 'Lupini', 'Molluschi']
    },
    en: {
      contact: 'Contact us', pricesEuro: 'All prices are in euro.',
      menu: 'Menu', open: 'Open', home: 'Back to menus', language: 'Language', chooseLanguage: 'Choose your language', close: 'Close',
      allergens: 'Allergens', allergensTitle: 'Allergens', perPerson: 'per person', tasting: 'Tasting menus',
      gtNote: 'Automatic translation: may contain errors.',
      allergenNote: 'Some products may be frozen or blast-chilled in accordance with EC Reg. 852/04. Please ask the dining room manager for information.',
      alg: ['Gluten', 'Crustaceans', 'Eggs', 'Fish', 'Peanuts', 'Soy', 'Milk', 'Tree nuts', 'Celery', 'Mustard', 'Sesame', 'Sulphur dioxide', 'Lupin', 'Molluscs']
    },
    de: {
      contact: 'Kontakt', pricesEuro: 'Alle Preise in Euro.',
      menu: 'Speisekarte', open: 'Öffnen', home: 'Zurück zu den Karten', language: 'Sprache', chooseLanguage: 'Sprache wählen', close: 'Schließen',
      allergens: 'Allergene', allergensTitle: 'Allergene', perPerson: 'pro Person', tasting: 'Degustationsmenüs',
      gtNote: 'Automatische Übersetzung: kann Fehler enthalten.',
      allergenNote: 'Einige Produkte können gemäß EG-Verordnung 852/04 tiefgekühlt oder schockgefrostet sein. Informationen erhalten Sie beim Restaurantleiter.',
      alg: ['Gluten', 'Krebstiere', 'Eier', 'Fisch', 'Erdnüsse', 'Soja', 'Milch', 'Schalenfrüchte', 'Sellerie', 'Senf', 'Sesam', 'Schwefeldioxid', 'Lupinen', 'Weichtiere']
    }
  };

  function enabled() { return LANGS.filter(function (l) { return l.enabled; }); }
  function isEnabled(code) { return enabled().some(function (l) { return l.code === code; }); }

  function detect() {
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) { /* storage non disponibile */ }
    if (stored && isEnabled(stored)) return stored;
    var prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'it'];
    for (var i = 0; i < prefs.length; i++) {
      var p = String(prefs[i]).toLowerCase();
      var hit = enabled().filter(function (l) { return p === l.code.toLowerCase() || p.split('-')[0] === l.code.toLowerCase().split('-')[0]; })[0];
      if (hit) return hit.code;
    }
    return 'it';
  }

  var lang = detect();

  function slugify(t) {
    return String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function t(key) {
    var d = UI[lang] || UI.it;
    return d[key] != null ? d[key] : UI.it[key];
  }

  /* ---------- sheet generica (focus gestito, Esc, tap sullo sfondo) ---------- */
  var openSheet = null;
  function makeSheet(id, titleText, bodyEl) {
    var back = document.createElement('div');
    back.className = 'sheet-back'; back.hidden = true;
    var sheet = document.createElement('div');
    sheet.className = 'sheet'; sheet.id = id; sheet.hidden = true;
    sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'true'); sheet.setAttribute('aria-labelledby', id + '-t');
    sheet.innerHTML = '<div class="sheet-grip"></div><div class="sheet-head"><h2 id="' + id + '-t"></h2>' +
      '<button class="sheet-x" type="button" aria-label=""><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 5l12 12M17 5L5 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></div>';
    sheet.querySelector('h2').textContent = titleText;
    sheet.querySelector('.sheet-x').setAttribute('aria-label', t('close'));
    sheet.appendChild(bodyEl);
    document.body.appendChild(back); document.body.appendChild(sheet);

    var opener = null;
    function close() {
      if (openSheet !== api) return;
      back.classList.remove('on'); sheet.classList.remove('on'); document.documentElement.classList.remove('sheet-open');
      openSheet = null;
      setTimeout(function () { back.hidden = true; sheet.hidden = true; }, 320);
      if (opener && opener.focus) opener.focus();
    }
    function open(from) {
      if (openSheet) return;
      opener = from || document.activeElement;
      back.hidden = false; sheet.hidden = false; openSheet = api;
      document.documentElement.classList.add('sheet-open');
      requestAnimationFrame(function () { requestAnimationFrame(function () { back.classList.add('on'); sheet.classList.add('on'); }); });
      var f = sheet.querySelector('[aria-checked="true"]') || sheet.querySelector('.sheet-x');
      setTimeout(function () { if (f) f.focus(); }, 60);
    }
    var api = { open: open, close: close };
    back.addEventListener('click', close);
    sheet.querySelector('.sheet-x').addEventListener('click', close);
    sheet.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var f = sheet.querySelectorAll('button, a[href]');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    return api;
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && openSheet) openSheet.close(); });

  /* ---------- selettore lingua ---------- */
  var langSheet = null;
  function setLang(code) {
    try { localStorage.setItem(KEY, code); } catch (e) { /* ignora */ }
    if (window.TLGT) window.TLGT.setCookie(NATIVE.indexOf(code) > -1 ? null : code);
    // stessa posizione dopo il ricarico + dissolvenza semplice del testo
    try { sessionStorage.setItem('tl_scroll', JSON.stringify({ p: location.pathname, y: window.scrollY })); } catch (e) { /* ignora */ }
    if (langSheet && langSheet.close) langSheet.close();
    document.documentElement.classList.add('lang-out');
    setTimeout(function () { location.reload(); }, 200);
  }
  function buildLangSheet() {
    var body = document.createElement('div');
    var grid = document.createElement('div');
    grid.className = 'langs'; grid.setAttribute('role', 'radiogroup');
    enabled().forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'lang-opt'; b.setAttribute('role', 'radio');
      b.setAttribute('aria-checked', l.code === lang ? 'true' : 'false');
      b.setAttribute('lang', l.code);
      b.innerHTML = '<span></span><small>' + l.code.split('-')[0] + '</small>';
      b.firstChild.textContent = l.name;
      b.addEventListener('click', function () { if (l.code === lang) { langSheet.close(); } else { setLang(l.code); } });
      grid.appendChild(b);
    });
    body.appendChild(grid);
    var note = document.createElement('p');
    note.className = 'lang-note'; note.textContent = t('gtNote');
    if (NATIVE.indexOf(lang) === -1) body.appendChild(note);
    langSheet = makeSheet('lang-sheet', t('chooseLanguage'), body);
  }

  /* ---------- sheet allergeni ---------- */
  var algSheet = null;
  function buildAlgSheet() {
    var body = document.createElement('div');
    var ul = document.createElement('ul'); ul.className = 'alg';
    t('alg').forEach(function (n, i) {
      var li = document.createElement('li');
      li.innerHTML = '<b>' + (i + 1) + '</b><span></span>'; li.lastChild.textContent = n; ul.appendChild(li);
    });
    var p = document.createElement('p'); p.className = 'alg-note'; p.textContent = t('allergenNote');
    body.appendChild(ul); body.appendChild(p);
    algSheet = makeSheet('alg-sheet', t('allergensTitle'), body);
  }

  function bind() {
    document.documentElement.lang = (NATIVE.indexOf(lang) > -1) ? lang : 'it';
    document.querySelectorAll('[data-lang-open]').forEach(function (el) {
      var code = el.querySelector('.code'); if (code) code.textContent = lang.split('-')[0].toUpperCase();
      el.setAttribute('aria-label', t('language') + ': ' + lang.toUpperCase());
      el.addEventListener('click', function () { if (!langSheet) buildLangSheet(); langSheet.open(el); });
    });
    document.querySelectorAll('[data-alg-open]').forEach(function (el) {
      el.addEventListener('click', function () { if (!algSheet) buildAlgSheet(); algSheet.open(el); });
    });
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.getAttribute('data-t')); });
    document.querySelectorAll('[data-t-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-t-aria'))); });
    if (location.hash === '#lang') { if (!langSheet) buildLangSheet(); langSheet.open(); }
  }

  /** Dopo il rendering: se la pagina non ha testi nativi per la lingua scelta, usa la traduzione automatica. */
  function afterRender(pageKey) {
    if (lang === 'it') { if (window.TLGT) window.TLGT.setCookie(null); return; }
    var hasNative = pageKey && window.I18N && window.I18N[pageKey] && window.I18N[pageKey][lang];
    if (hasNative) { if (window.TLGT) window.TLGT.setCookie(null); return; }
    if (window.TLGT) window.TLGT.load(lang);
  }

  window.TL = {
    LANGS: LANGS, NATIVE: NATIVE, lang: lang, t: t, slugify: slugify,
    afterRender: afterRender, tr: function (pageKey) { return (window.I18N && window.I18N[pageKey] && window.I18N[pageKey][lang]) || null; }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();
