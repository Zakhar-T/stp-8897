import Swiper from 'swiper';
import { Keyboard, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';

// new Swiper('.ftrs-swiper-js', {
//   modules: [Keyboard, Navigation, EffectCoverflow],
//   loop: true,
//   slidesPerView: 'auto',
//   watchOverflow: true,
//   centeredSlides: true,
//   spaceBetween: 12,
//   breakpoints: {
//     320: {
//       height: 203,
//       spaceBetween: 12,
//     },
//     1200: {
//       height: 386,
//       observer: true,
//       observeParents: true,
//       grabCursor: true,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       },
//       navigation: {
//         prevEl: '[data-ftrs-swiper-prev]',
//         nextEl: '[data-ftrs-swiper-next]',
//       },
//       keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//       },
//     },
//   },
// });

let swiper;

function initSwiper() {
  if (swiper) swiper.destroy(true, true);

  const isDesktop = window.innerWidth >= 1200;

  swiper = new Swiper('.ftrs-swiper-js', {
    modules: [Keyboard, Navigation, EffectCoverflow],
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 12,
    grabCursor: isDesktop,
    effect: isDesktop ? 'coverflow' : 'slide',
    coverflowEffect: isDesktop
      ? {
          rotate: -20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }
      : undefined,
    navigation: {
      prevEl: '[data-ftrs-swiper-prev]',
      nextEl: '[data-ftrs-swiper-next]',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
}

initSwiper();

window.addEventListener('resize', () => {
  initSwiper();
});
