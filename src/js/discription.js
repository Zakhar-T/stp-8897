const readBtn = document.querySelector('[data-action="open"]');
const textTwo = document.querySelector('[data-visible]');

readBtn.addEventListener('click', () => {
  textTwo.dataset.visible = 'open';
  readBtn.dataset.visible = 'hide';
});
