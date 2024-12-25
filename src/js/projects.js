import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },
    grabCursor: true,
    simulateTouch: true, 
  });


