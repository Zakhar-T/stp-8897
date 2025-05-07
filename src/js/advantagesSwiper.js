import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';

new Swiper('.advtg-swiper-js', {
  modules: [Keyboard, Navigation],
  height: 280,
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 8,
  breakpoints: {
    1200: {
      height: 500,
      slidesPerView: 2,
      spaceBetween: 24,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: {
        prevEl: '[data-advtg-swiper-prev]',
        nextEl: '[data-advtg-swiper-next]',
      },
    },
  },
});
