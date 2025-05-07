import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.advtg-swiper-js', {
  modules: [Navigation, Pagination],
  watchOverflow: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    prevEl: '[data-advtg-swiper-prev]',
    nextEl: '[data-advtg-swiper-next]',
  },
  breakpoints: {
    1200: {
      spaceBetween: 24,
    },
  },
});
