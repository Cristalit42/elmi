import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const slider = new Swiper('.certificates__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
});

Fancybox.bind('[data-fancybox="projects-certificates"]', {
});