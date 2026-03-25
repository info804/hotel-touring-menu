/**
 * translate.js — Google Translate widget initialiser
 * Language chosen once in lang.html; cookie already set when this runs.
 * MutationObserver + setProperty('important') permanently kills the GT banner.
 */
window.googleTranslateElementInit = function () {
  var el = document.getElementById('google_translate_element');
  if (!el) return;
  new google.translate.TranslateElement(
    { pageLanguage: 'it', autoDisplay: false },
    'google_translate_element'
  );
  suppressGTBanner();
};

function suppressGTBanner() {
  function clean() {
    // Hide every banner/toolbar frame GT might inject
    document.querySelectorAll(
      '.goog-te-banner-frame, .goog-te-menu-frame, #goog-gt-tt, .skiptranslate > iframe'
    ).forEach(function (node) {
      node.style.setProperty('display',    'none', 'important');
      node.style.setProperty('height',     '0',    'important');
      node.style.setProperty('visibility', 'hidden', 'important');
    });

    // GT sets body.style.top = '40px' (inline) to make room for the banner.
    // setProperty with 'important' wins over any other inline value.
    if (document.body) {
      document.body.style.setProperty('top',        '0px', 'important');
      document.body.style.setProperty('margin-top', '0px', 'important');
    }
  }

  clean();

  // Watch <body> for GT injecting frames and mutating its own style attribute
  new MutationObserver(clean).observe(document.body, {
    childList: true,
    attributes: true,
    attributeFilter: ['style', 'class']
  });

  // Watch <html> too — GT sometimes appends the frame there
  new MutationObserver(clean).observe(document.documentElement, {
    childList: true
  });

  // Belt-and-suspenders: clean after GT fully initialises
  setTimeout(clean, 200);
  setTimeout(clean, 800);
}
