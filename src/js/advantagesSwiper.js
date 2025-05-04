import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const advSwiper = new Swiper('.advtg-swiper-js', {
  containerModifierClass: 'advtg-',
  watchSlidesProgress: true,
  loop: true,
  loopedSlides: 20,
  slidesPerView: 1,
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
    },
  },
});
