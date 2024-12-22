import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-block', {
  showMultiple: true,
  openOnInit: [0],
});

window.addEventListener('load', () => {
  document.querySelector('.accordion-block').classList.remove('no-animation');
});
