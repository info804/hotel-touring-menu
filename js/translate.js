/**
 * translate.js — Google Translate widget initialiser
 * Language is chosen once on lang.html and stored in localStorage.
 * The googtrans cookie is set there; the widget just picks it up silently.
 */
window.googleTranslateElementInit = function () {
  var el = document.getElementById('google_translate_element');
  if (!el) return;
  new google.translate.TranslateElement(
    { pageLanguage: 'it', autoDisplay: false },
    'google_translate_element'
  );
};
