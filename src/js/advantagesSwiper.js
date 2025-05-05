import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

new Swiper('.advtg-swiper-js', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  grid: {
    rows: 2,
  },
  spaceBetween: 8,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
