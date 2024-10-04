import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import { renderSlider } from '../util';

const sliderElement = document.querySelector('.programs__wrapper');
const slides = document.querySelectorAll('.programs__slide');

const initSwiperPrograms = () => {
  const sliceSliders = Array.from(slides).splice(2);
  renderSlider(sliderElement, sliceSliders);

  new Swiper('.programs__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.programs__navigation-next',
      prevEl: '.programs__navigation-prev',
    },

    // Scrollbar
    scrollbar: {
      el: '.programs__scrollbar',
      horizontalClass: 'slider__scrollbar',
      draggable: true,
      dragClass: 'programs__drag-element',
      dragSize: 326,
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove: true,
        scrollbar: {
          enabled: false,
        },
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          enabled: true,
        },
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          enabled: true,
          dragSize: 394,
        },
      }
    },
  });
};

export { initSwiperPrograms };
