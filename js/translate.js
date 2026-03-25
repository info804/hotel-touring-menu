/**
 * translate.js — Auto-translate to the visitor's browser language
 * Uses the free Google Translate widget.
 * On first visit, if the browser language is not Italian, sets the
 * googtrans cookie and reloads once — the widget then translates in-place.
 */
window.googleTranslateElementInit = function () {
  // Create the hidden anchor element the widget needs
  const el = document.getElementById('google_translate_element');
  if (!el) return;

  new google.translate.TranslateElement(
    { pageLanguage: 'it', autoDisplay: false },
    'google_translate_element'
  );

  // Detect browser language (e.g. "en", "de", "fr", "ru" …)
  const browserLang = (navigator.language || navigator.userLanguage || 'it')
    .split('-')[0]
    .toLowerCase();

  if (browserLang === 'it') return; // already Italian — nothing to do

  // Only auto-trigger on the very first visit (no cookie set yet)
  if (!/googtrans/.test(document.cookie)) {
    const val = `/it/${browserLang}`;
    // Set cookie for current path and, if not localhost, for the domain root
    document.cookie = `googtrans=${val};path=/`;
    if (window.location.hostname && window.location.hostname !== 'localhost') {
      document.cookie = `googtrans=${val};path=/;domain=${window.location.hostname}`;
    }
    window.location.reload();
  }
};
