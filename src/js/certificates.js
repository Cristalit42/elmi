import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const slider = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
});

Fancybox.bind('[data-fancybox="projects-certificates"]', {
});