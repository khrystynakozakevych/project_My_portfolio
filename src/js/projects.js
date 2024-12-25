import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
  },
    grabCursor: true,
    simulateTouch: true, 
  });


