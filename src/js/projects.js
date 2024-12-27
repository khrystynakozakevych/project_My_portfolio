import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
    slidesPerView: 1,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
  },
    speed: 400,
    simulateTouch: true, 
});
  
const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.cursor = 'grab';
  });

  image.addEventListener('mouseout', () => {
    image.style.cursor = 'default';
  });
});