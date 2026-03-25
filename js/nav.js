/**
 * nav.js — Smooth page exit transitions
 * Uses event delegation so it catches all links, including dynamically created ones.
 */
(function () {
  var navigating = false;

  document.addEventListener('click', function (e) {
    if (navigating) return;

    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    // Skip anchors, tel, mailto, external URLs
    if (!href ||
        href.charAt(0) === '#' ||
        href.indexOf('://') !== -1 ||
        href.indexOf('tel:') === 0 ||
        href.indexOf('mailto:') === 0) return;

    e.preventDefault();
    navigating = true;

    var main = document.querySelector('main');
    if (main) {
      main.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
      main.style.opacity    = '0';
      main.style.transform  = 'translateY(8px)';
    }

    setTimeout(function () { window.location.href = href; }, 200);
  }, true); // capture phase — fires before child handlers
})();
