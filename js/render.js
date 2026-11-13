/**
 * render.js — motore di rendering dei menù
 * Costruisce DOM con textContent (nessun innerHTML su dati): sicuro anche se un testo contiene < o &.
 * Traduzioni native: window.I18N[pagina][lingua] = { cats, subs, items } (vedi data/i18n/).
 */
(function () {
  'use strict';

  var RIDGE = '<svg class="ridge" viewBox="0 0 112 14" fill="none" aria-hidden="true"><path d="M1 12.5 L16 8 L25 10.5 L44 2 L55 8.5 L63 6 L78 11 L87 8.5 L111 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var PAGE_TEXT = {
    ristorante: { en: ['Restaurant', 'Valtellina specialities and mountain dishes'], de: ['Restaurant', 'Veltliner Spezialitäten und Bergküche'] },
    pizzeria:   { en: ['Pizzeria', 'Our pizzas'], de: ['Pizzeria', 'Unsere Pizzen'] }
  };

  var scrollLock = false, lockTimer = 0;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null && text !== '') n.textContent = text;
    return n;
  }
  function fmtPrice(p) { return String(p).replace(/\./g, ','); }
  var REGIONS = /(lombardia|piemonte|veneto|trentino|friuli|toscana|emilia|sicilia|puglia|campania|umbria|marche|abruzzo|sardegna|liguria|lazio|francia|alto adige)/g;
  function sentence(s) {
    if (s !== s.toUpperCase()) return s;
    var l = s.toLowerCase();
    l = l.charAt(0).toUpperCase() + l.slice(1);
    l = l.replace(REGIONS, function (m) { return m.charAt(0).toUpperCase() + m.slice(1); });
    return l.replace(/\ba\.\a\./g, 'A.A.');
  }
  function tabLabel(name) {
    var t = name.replace(/^Vini\s+/i, '').replace(/spumanti.*champagne/i, 'Spumanti').replace(/\s—\s/g, ' · ');
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function prefersReduced() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function scrollToCat(id, smooth) {
    var t = document.getElementById(id);
    if (!t) return;
    t.scrollIntoView({ behavior: (smooth && !prefersReduced()) ? 'smooth' : 'auto', block: 'start' });
  }

  function makeHead(name, note) {
    var h = el('div', 'cat-head');
    h.appendChild(el('h2', '', name));
    h.insertAdjacentHTML('beforeend', RIDGE);
    if (note) h.appendChild(el('p', 'cat-note', note));
    return h;
  }

  /* ---------------- piatto / bevanda ---------------- */
  function dishNode(item, tr) {
    var d = el('article', 'dish');
    var row = el('div', 'dish-row');
    var name = el('h3', 'dish-name', item.name);
    if (item.allergens) name.appendChild(el('span', 'al', String(item.allergens).replace(/\s+/g, '-')));
    row.appendChild(name);
    if (item.price) row.appendChild(el('span', 'price', fmtPrice(item.price)));
    d.appendChild(row);
    var key = window.TL.slugify(item.name);
    var desc = (tr && tr.items && tr.items[key]) || item.desc;
    if (desc) d.appendChild(el('p', 'dish-desc', desc));
    return d;
  }

  function wineNode(item) {
    var w = el('article', 'wine');
    var info = el('div', 'wine-info');
    info.appendChild(el('div', 'wine-name', item.name));
    if (item.producer) info.appendChild(el('div', 'wine-producer', item.producer));
    if (item.notes) info.appendChild(el('div', 'wine-notes', item.notes));
    w.appendChild(info);
    var pr = el('div', 'wine-prices');
    if (item.bottle) pr.appendChild(el('span', 'wine-bottle', fmtPrice(item.bottle)));
    if (item.glass) pr.appendChild(el('span', 'wine-glass', 'calice ' + fmtPrice(item.glass)));
    w.appendChild(pr);
    return w;
  }

  /* ---------------- degustazioni (da SPECIALI_DATA) ---------------- */
  function tastingSection(spec, tr) {
    var tt = window.I18N && window.I18N.speciali && window.I18N.speciali[window.TL.lang];
    var sec = el('section', 'cat');
    sec.id = 'cat-degustazioni';
    sec.appendChild(makeHead(window.TL.t('tasting')));
    Object.keys(spec).forEach(function (k) {
      var m = spec[k];
      var box = el('div', 'tasting');
      var head = el('div', 'tasting-head');
      head.appendChild(el('h3', '', (tt && tt.menus && tt.menus[k]) || m.title));
      var right = el('div');
      right.appendChild(el('div', 'tasting-price', fmtPrice(m.fixedPrice)));
      right.appendChild(el('div', 'tasting-per', window.TL.t('perPerson')));
      head.appendChild(right);
      box.appendChild(head);
      (m.courses || []).forEach(function (c) {
        var cs = el('div', 'course');
        cs.appendChild(el('div', 'course-name', (tt && tt.courses && tt.courses[window.TL.slugify(c.name)]) || c.name));
        (c.dishes || []).forEach(function (dish) {
          var tr2 = tt ? { items: tt.items } : null;
          cs.appendChild(dishNode(dish, tr2));
        });
        box.appendChild(cs);
      });
      sec.appendChild(box);
    });
    return sec;
  }

  /* ---------------- struttura comune ---------------- */
  function mountChrome(titleText, subtitleText, tabs) {
    var h1 = document.getElementById('page-title'), sub = document.getElementById('page-subtitle');
    if (h1) h1.textContent = titleText;
    var ct = document.getElementById('compact-title'); if (ct) ct.textContent = titleText;
    if (sub) { sub.textContent = subtitleText || ''; sub.hidden = !subtitleText; }
    document.title = titleText + ' — Hotel Touring Livigno';
    var tabsEl = document.getElementById('tabs');
    if (!tabsEl) return null;
    tabs.forEach(function (t, i) {
      var a = el('a', 'tab' + (i === 0 ? ' active' : ''), t.label);
      a.href = '#' + t.id;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        scrollLock = true; clearTimeout(lockTimer); lockTimer = setTimeout(function () { scrollLock = false; }, 900);
        setActive(tabsEl, a);
        scrollToCat(t.id, true);
        history.replaceState(null, '', '#' + t.id);
      });
      tabsEl.appendChild(a);
    });
    return tabsEl;
  }

  function setActive(tabsEl, tab) {
    tabsEl.querySelectorAll('.tab.active').forEach(function (x) { x.classList.remove('active'); });
    tab.classList.add('active');
    var target = tab.offsetLeft - (tabsEl.clientWidth - tab.offsetWidth) / 2;
    tabsEl.scrollTo({ left: target, behavior: prefersReduced() ? 'auto' : 'smooth' });
  }

  function spy(tabsEl) {
    var secs = document.querySelectorAll('.cat');
    if (!tabsEl || !secs.length || !('IntersectionObserver' in window)) return;
    var bar = document.querySelector('.navbar');
    var top = (bar ? bar.offsetHeight : 56) + 12;
    var io = new IntersectionObserver(function (entries) {
      if (scrollLock) return;
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var tab = tabsEl.querySelector('a[href="#' + en.target.id + '"]');
        if (tab) setActive(tabsEl, tab);
      });
    }, { rootMargin: '-' + top + 'px 0px -62% 0px', threshold: 0 });
    secs.forEach(function (s) { io.observe(s); });
  }

  function finish(pageKey, tabsEl) {
    spy(tabsEl);
    window.TL.afterRender(pageKey);
    var h = location.hash;
    if (h && h.indexOf('#cat-') === 0) {
      var tab = tabsEl && tabsEl.querySelector('a[href="' + h + '"]');
      requestAnimationFrame(function () { scrollToCat(h.slice(1), false); if (tab) setActive(tabsEl, tab); });
    }
  }

  /* ---------------- API pubblica ---------------- */
  /** Ristorante, Pizzeria, Bar. opts: { key, tasting } */
  window.renderMenu = function (data, opts) {
    opts = opts || {};
    var key = opts.key;
    var lang = window.TL.lang;
    var tr = window.TL.tr(key);
    var container = document.getElementById('menu-container');
    if (!data || !container) return;

    var pt = PAGE_TEXT[key] && PAGE_TEXT[key][lang];
    var tabs = [];
    var frag = document.createDocumentFragment();

    if (opts.tasting) {
      var tsec = tastingSection(opts.tasting);
      frag.appendChild(tsec);
      tabs.push({ id: 'cat-degustazioni', label: window.TL.t('tasting') });
    }

    data.categories.forEach(function (cat) {
      var name = (tr && tr.cats && tr.cats[cat.id]) || cat.name;
      var sec = el('section', 'cat' + (cat.special ? ' cat--special' : ''));
      sec.id = 'cat-' + cat.id;
      sec.appendChild(makeHead(name, cat.note));
      cat.items.forEach(function (item) {
        if (item.sub) {
          var s = (tr && tr.subs && tr.subs[window.TL.slugify(item.sub)]) || item.sub;
          sec.appendChild(el('h3', 'sub', s));
        }
        sec.appendChild(dishNode(item, tr));
      });
      if (cat.footnote) sec.appendChild(el('p', 'cat-foot', cat.footnote));
      frag.appendChild(sec);
      tabs.push({ id: sec.id, label: name });
    });

    container.appendChild(frag);
    var tabsEl = mountChrome(pt ? pt[0] : data.title, pt ? pt[1] : data.subtitle, tabs);
    finish(key, tabsEl);
  };

  /** Carta dei vini (struttura con produttore, note, bottiglia/calice). */
  window.renderWine = function (data) {
    var container = document.getElementById('menu-container');
    if (!data || !container) return;
    var tabs = [], frag = document.createDocumentFragment();
    data.categories.forEach(function (cat) {
      var name = sentence(cat.name);
      var sec = el('section', 'cat');
      sec.id = 'cat-' + cat.id;
      sec.appendChild(makeHead(name, cat.note));
      cat.items.forEach(function (it) { sec.appendChild(wineNode(it)); });
      frag.appendChild(sec);
      tabs.push({ id: sec.id, label: tabLabel(name) });
    });
    container.appendChild(frag);
    var tabsEl = mountChrome(data.title, (data.subtitle || '').replace(/^"|"$/g, ''), tabs);
    finish(null, tabsEl);
  };
})();
