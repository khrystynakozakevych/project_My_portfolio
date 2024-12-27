// Импортируем библиотеку Accordion
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-accordion-container', {
  showMultiple: true,
});

window.addEventListener('load', () => {
  document
    .querySelector('.faq-accordion-container')
    .classList.remove('no-animation');
});
