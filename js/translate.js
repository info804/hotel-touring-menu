/**
 * translate.js — traduzione automatica (Google) per le lingue senza testi nativi.
 * Viene caricata solo quando serve, così le pagine in italiano/inglese/tedesco restano leggere
 * e non contattano servizi esterni.
 */
(function () {
  'use strict';
  var loaded = false;

  function setCookie(target) {
    var host = location.hostname;
    var exp = 'Thu, 01 Jan 1970 00:00:00 GMT';
    var val = target ? '/it/' + target : '';
    function write(domain) {
      var base = 'googtrans=' + val + ';path=/' + (domain ? ';domain=' + domain : '');
      document.cookie = target ? base : base + ';expires=' + exp;
    }
    write(null);
    if (host.indexOf('.') > -1) { write(host); write('.' + host); }
  }

  window.googleTranslateElementInit = function () {
    var el = document.getElementById('google_translate_element');
    if (!el || !window.google || !google.translate) return;
    new google.translate.TranslateElement({ pageLanguage: 'it', autoDisplay: false }, 'google_translate_element');
    hideBanner();
  };

  function hideBanner() {
    function clean() {
      document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame, #goog-gt-tt, .skiptranslate > iframe').forEach(function (n) {
        n.style.setProperty('display', 'none', 'important');
      });
      if (document.body) document.body.style.setProperty('top', '0px', 'important');
    }
    clean();
    new MutationObserver(clean).observe(document.body, { childList: true, attributes: true, attributeFilter: ['style', 'class'] });
    new MutationObserver(clean).observe(document.documentElement, { childList: true });
  }

  function load(target) {
    setCookie(target);
    if (loaded) return;
    loaded = true;
    if (!document.getElementById('google_translate_element')) {
      var d = document.createElement('div'); d.id = 'google_translate_element'; document.body.appendChild(d);
    }
    var s = document.createElement('script');
    s.async = true; s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }

  window.TLGT = { load: load, setCookie: setCookie };
})();
