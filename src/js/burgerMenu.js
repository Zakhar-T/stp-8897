const openBtn = document.querySelector('[data-menu="open"]');
const closeBtn = document.querySelector('[data-menu="close"]');
const mobMenu = document.querySelector('[data-menu-opened]');

openBtn.addEventListener('click', handleOpen);
closeBtn.addEventListener('click', handleClose);

function handleOpen() {
  mobMenu.classList.toggle('is-open');
  openBtn.classList.toggle('inactive');
  closeBtn.classList.toggle('inactive');
}

function handleClose() {
  mobMenu.classList.toggle('is-open');
  openBtn.classList.toggle('inactive');
  closeBtn.classList.toggle('inactive');
}
