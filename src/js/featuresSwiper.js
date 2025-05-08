import Swiper from 'swiper';
import { Keyboard, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/scss/keyboard';

let swiper;

function initSwiper() {
  if (swiper) swiper.destroy(true, true);

  const isDesktop = window.innerWidth >= 1200;

  swiper = new Swiper('[data-ftrs-swiper]', {
    modules: [Keyboard, Navigation, EffectCoverflow],
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 12,
    grabCursor: isDesktop,
    effect: isDesktop ? 'coverflow' : 'slide',
    coverflowEffect: isDesktop
      ? {
          rotate: 30,
          stretch: 280,
          depth: 350,
          modifier: 0.9,
          slideShadows: false,
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
