document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-cookies]');
  const acceptBtn = document.querySelector('[data-cookies-accept]');
  const declineBtn = document.querySelector('[data-cookies-decline]');
  const closeBtn = document.querySelector('[data-cookies-close]');
  const header = document.querySelector('[data-header]');

  const accepted = localStorage.getItem('cookiesAccepted');

  if (!accepted && modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    header?.setAttribute('data-hide-cursor', 'true');
  }

  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    closeCookies();
  });

  declineBtn?.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    closeCookies();
  });

  closeBtn?.addEventListener('click', () => {
    closeCookies();
  });

  function closeCookies() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    header?.removeAttribute('data-hide-cursor');
  }
});
