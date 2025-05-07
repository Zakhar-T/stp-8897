const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const mobMenu = document.querySelector('[data-menu]');

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobMenu.classList.toggle('is-open');
  openBtn.classList.toggle('inactive');
  closeBtn.classList.toggle('inactive');
}
