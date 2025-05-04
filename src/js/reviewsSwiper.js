import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('[data-swiper="reviews"]', {
  modules: [Navigation, Pagination],
  watchOverflow: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 11.65,
  navigation: {
    nextEl: '[data-swiper-next]',
    prevEl: '[data-swiper-prev]',
  },
  slidesOffsetBefore: 5,
  slidesOffsetAfter: 5,
  observer: true,
  observeParents: true,
  breakpoints: {
    1200: {
      spaceBetween: 32,
    },
  },
});
