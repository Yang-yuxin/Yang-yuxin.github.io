// Close the compact navigation after following an in-page link.
(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var button = nav.querySelector('button');
  var menu = nav.querySelector('.hidden-links');
  function closeMenu() {
    menu.classList.add('hidden');
    button.classList.remove('close');
    button.setAttribute('aria-expanded', 'false');
  }
  nav.addEventListener('click', function (event) {
    if (button.contains(event.target)) {
      button.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
    } else if (event.target.closest('a')) {
      closeMenu();
    }
  });
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });
}());
