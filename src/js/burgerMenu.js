const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const mobMenu = document.querySelector('[data-menu]');

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function disableScroll() {
  window.addEventListener('scroll', e => e.preventDefault(), {
    passive: false,
  });
  window.addEventListener('wheel', e => e.preventDefault(), { passive: false });
  window.addEventListener('touchmove', e => e.preventDefault(), {
    passive: false,
  });
}

function enableScroll() {
  window.removeEventListener('scroll', e => e.preventDefault());
  window.removeEventListener('wheel', e => e.preventDefault());
  window.removeEventListener('touchmove', e => e.preventDefault());
}

function toggleMenu() {
  if (mobMenu.dataset.menu === 'active') {
    mobMenu.dataset.menu = 'inactive';
  } else {
    mobMenu.dataset.menu = 'active';
  }
  mobMenu.classList.toggle('is-open');
  openBtn.classList.toggle('inactive');
  closeBtn.classList.toggle('inactive');
  if (mobMenu.dataset.menu === 'active') {
    disableScroll();
  } else {
    enableScroll();
  }
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
