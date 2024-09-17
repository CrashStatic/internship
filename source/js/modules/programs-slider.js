import Swiper from 'swiper/bundle';
// import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperPrograms = () => {
  new Swiper('.programs__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.programs__navigation-next',
      prevEl: '.programs__navigation-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false
      }
    },
  });
};

export { initSwiperPrograms };
