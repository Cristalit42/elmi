import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const slider = new Swiper('.projects__swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
});

Fancybox.bind('[data-fancybox="projects-gallery"]', {
});