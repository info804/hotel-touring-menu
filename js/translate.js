/**
 * translate.js — Google Translate widget initialiser
 * Language is chosen once on lang.html and stored in localStorage.
 * The googtrans cookie is set there; the widget just picks it up silently.
 * A MutationObserver actively removes the GT banner and resets body.top.
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
    // Hide the banner iframe
    document.querySelectorAll(
      '.goog-te-banner-frame, .goog-te-menu-frame, #goog-gt-tt'
    ).forEach(function (el) {
      el.style.cssText = 'display:none!important;height:0!important;';
    });
    // Undo the body offset GT injects as inline style
    if (document.body && document.body.style.top !== '0px') {
      document.body.style.top = '0';
    }
  }

  clean();

  // Watch body for GT injecting the iframe and setting style.top
  var bodyObserver = new MutationObserver(clean);
  bodyObserver.observe(document.body, {
    childList: true,
    attributes: true,
    attributeFilter: ['style', 'class']
  });

  // Also watch <html> in case GT appends the frame there
  var htmlObserver = new MutationObserver(clean);
  htmlObserver.observe(document.documentElement, { childList: true });

  // Belt-and-suspenders: clean again after GT finishes initialising
  setTimeout(clean, 300);
  setTimeout(clean, 1000);
}
