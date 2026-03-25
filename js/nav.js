/**
 * nav.js — Smooth page transitions
 * Exit: header slides up + fades, main slides down + fades.
 * Entrance: handled by CSS headerIn / pageIn animations.
 */
(function () {
  var navigating = false;

  document.addEventListener('click', function (e) {
    if (navigating) return;

    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href ||
        href.charAt(0) === '#' ||
        href.indexOf('://') !== -1 ||
        href.indexOf('tel:') === 0 ||
        href.indexOf('mailto:') === 0) return;

    e.preventDefault();
    navigating = true;

    var header = document.querySelector('.site-header');
    var main   = document.querySelector('main');
    var EASE   = 'cubic-bezier(0.25,0.46,0.45,0.94)';
    var DUR    = '0.2s';

    if (header) {
      header.style.transition = 'opacity ' + DUR + ' ' + EASE + ', transform ' + DUR + ' ' + EASE;
      header.style.opacity    = '0';
      header.style.transform  = 'translateY(-8px)';
    }
    if (main) {
      main.style.transition = 'opacity ' + DUR + ' ' + EASE + ', transform ' + DUR + ' ' + EASE;
      main.style.opacity    = '0';
      main.style.transform  = 'translateY(10px)';
    }

    setTimeout(function () { window.location.href = href; }, 220);
  }, true);
})();
