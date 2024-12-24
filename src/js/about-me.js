import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

function setupAccordion() {
  new Accordion('.accordion-block', {
    showMultiple: true,
    openOnInit: [0],
  });

  window.addEventListener('load', () => {
    document.querySelector('.accordion-block').classList.remove('no-animation');
  });
}

function setupSwiper() {
  const swiper = new Swiper('.skills-swiper', {
    modules: [Navigation, Keyboard],
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.swiper-next-skill',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}

setupAccordion();
setupSwiper();
