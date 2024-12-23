import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.swiper-next-skill',
    },
  });
}

setupAccordion();
setupSwiper();
