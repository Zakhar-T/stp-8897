const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const mobMenu = document.querySelector('[data-menu]');

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function disableScroll() {
  window.addEventListener('scroll', preventScroll, {
    passive: false,
  });
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, {
    passive: false,
  });
}

function enableScroll() {
  window.removeEventListener('scroll', preventScroll);
  window.removeEventListener('wheel', preventScroll);
  window.removeEventListener('touchmove', preventScroll);
}

function preventScroll(e) {
  e.preventDefault();
}

function toggleMenu() {
  if (mobMenu.dataset.menu === 'active') {
    mobMenu.dataset.menu = 'inactive';
    enableScroll();
  } else {
    mobMenu.dataset.menu = 'active';
    disableScroll();
  }
  mobMenu.classList.toggle('is-open');
  openBtn.classList.toggle('inactive');
  closeBtn.classList.toggle('inactive');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetPosition =
        target.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({
        top: offsetPosition,
      });
    }
  });
});

document.querySelectorAll('[data-menu] a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
});
