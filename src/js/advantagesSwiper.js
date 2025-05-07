import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

new Swiper('.advtg-swiper-js', {
  modules: [Navigation, Keyboard],
  watchOverflow: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 8,
  navigation: {
    prevEl: '[data-advtg-swiper-prev]',
    nextEl: '[data-advtg-swiper-next]',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    1200: {
      spaceBetween: 24,
    },
  },
});
