const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const mobMenu = document.querySelector('[data-menu]');

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (mobMenu.dataset === 'active') {
    mobMenu.dataset = 'inactive';
  } else {
    mobMenu.dataset = 'active';
  }
  mobMenu.classList.toggle('is-open');
  openBtn.classList.toggle('inactive');
  closeBtn.classList.toggle('inactive');
}
