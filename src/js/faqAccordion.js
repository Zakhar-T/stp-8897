import Accordion from 'accordion-js';

const container = document.querySelector('[data-accordion-container]');
const accordion = new Accordion(container, {
  showMultiple: true,
});
