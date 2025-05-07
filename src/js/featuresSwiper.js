import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';
import 'swiper/bundle';

new Swiper('.ftrs-swiper-js', {
  modules: [Keyboard, Navigation],
  loop: true,
  slidesPerView: 'auto',
  watchOverflow: true,
  centeredSlides: true,
  spaceBetween: 12,
  breakpoints: {
    320: {
      height: 203,
      spaceBetween: 12,
    },
    1200: {
      height: 386,
      observer: true,
      observeParents: true,
      grabCursor: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        prevEl: '[data-ftrs-swiper-prev]',
        nextEl: '[data-ftrs-swiper-next]',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    },
  },
});
