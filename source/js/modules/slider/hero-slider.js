import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const swiperLinks = document.querySelectorAll('.hero__link');

const initSwiperHero = () => {
  const swiper = new Swiper('.hero__swiper', {
    modules: [ Pagination ],

    // If we need pagination
    pagination: {
      el: '.swiper-slide-active .hero__pagination',
      clickable: true,
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      bulletElement: 'button type="button" aria-label="Переключить слайд"',
    },

    spaceBetween: 40,
    slidesPerView: 1,
    centeredSlides: false,
    initialSlide: 0,
    slidesPerGroup: 1,
    loop: true,

    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    },

    // Устанавливает пагинацию на каждый слайд
    on: {
      slideChangeTransitionStart: () => {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      }
    }
  });

  // Запрещает Tab по неактивным слайдам
  function setTabIndex() {
    swiper.slides[swiper.activeIndex].querySelector('a').setAttribute('tabindex', '0');
  }

  for (const link of swiperLinks) {
    link.setAttribute('tabindex', '-1');
    setTabIndex();
  }

  swiper.on('activeIndexChange', () => {
    for (const link of swiperLinks) {
      link.setAttribute('tabindex', '-1');
    }
    setTabIndex();
  });
};

export { initSwiperHero };
