import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import { renderSlider } from '../util';

const sliderElement = document.querySelector('.reviews__wrapper');
const slides = document.querySelectorAll('.reviews__slide');

const initSwiperReviews = () => {
  if (window.innerWidth > 1439) {
    renderSlider(sliderElement, slides);
  }

  new Swiper('.reviews__swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__navigation-next',
      prevEl: '.reviews__navigation-prev',
    },

    // Scrollbar
    scrollbar: {
      el: '.reviews__scrollbar',
      horizontalClass: 'slider__scrollbar',
      draggable: true,
      dragClass: 'reviews__drag-element',
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
        slidesPerView: 'auto',
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

export { initSwiperReviews };
