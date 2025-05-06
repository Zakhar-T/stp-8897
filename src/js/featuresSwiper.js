import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

new Swiper('.ftrs-swiper-js', {
  loop: true,
  slidesPerView: 'auto',
  watchOverflow: false,
  height: 203,
  resistance: false,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 12,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
