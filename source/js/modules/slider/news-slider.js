import Swiper from 'swiper/bundle';
import 'swiper/css';
import { Grid, Pagination } from 'swiper/modules';
import { renderSlider } from '../util';

const ADDITIONAL_PAGES = 3;
const SHOWNBUTTONS = 4;
const sliderElement = document.querySelector('.news__wrapper');
const slides = document.querySelectorAll('.news__slide');
const newsTabs = document.querySelectorAll('.news__tab');
const newsPagination = document.querySelector('.news__pagination');

const initSwiperNews = () => {
  if (window.innerWidth < 1439) {
    for (let i = 0; i < ADDITIONAL_PAGES; i++) {
      renderSlider(sliderElement, slides);
    }
  } else {
    for (let i = 1; i < ADDITIONAL_PAGES; i++) {
      renderSlider(sliderElement, slides);
    }
  }

  const newsSwiper = () => new Swiper('.news__swiper', {
    modules: [Grid, Pagination],

    loop: false,

    grid: {
      rows: 2,
      fill: 'column',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.news__navigation-next',
      prevEl: '.news__navigation-prev',
    },

    pagination: {
      el: '.news__pagination',
      dynamicBullets: true,
      dynamicMainBullets: 3,
      bulletClass: 'news__pagination-button',
      bulletActiveClass: 'news__pagination-button--active',
      clickable: true,
      renderBullet: (index, className) => `<button class="${className}">${index + 1}</button>`,
    },

    on: {
      slideChange: function () {
        onSlideChange();
      },
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
        grid: {
          rows: 2,
        },
      },

      768: {
        spaceBetween: 30,
        allowTouchMove: true,
        slidesPerGroup: 2,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
        pagination: {
          dynamicMainBullets: 4,
        }
      },

      1440: {
        spaceBetween: 32,
        allowTouchMove: false,
        slidesPerGroup: 3,
        slidesPerView: 'auto',
        grid: {
          rows: 1,
          fill: 'row'
        },
        pagination: {
          dynamicMainBullets: 4,
        }
      }
    },
  });

  newsTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const currentTab = tab;

      if (currentTab.classList.contains('news__tab--active')) {
        return;
      }

      newsTabs.forEach((button) => {
        button.classList.remove('news__tab--active');
      });

      currentTab.classList.add('news__tab--active');
    });
  });

  const newsSlider = newsSwiper();

  const hideBullet = (button) => {
    button.classList.add('visually-hidden');
    button.style.disable = 'true';
    button.setAttribute('tab-index', '-1');
  };

  const showBullet = (button) => {
    button.classList.remove('visually-hidden');
    button.style.disable = '';
    button.setAttribute('tab-index', '0');
  };

  const paginationList = newsPagination.children;
  let firstButton = 0;
  let lastButton = paginationList.length < SHOWNBUTTONS ? paginationList.length : SHOWNBUTTONS - 1;

  for (let i = SHOWNBUTTONS; i < paginationList.length; i++) {
    hideBullet(paginationList[i]);
  }

  function onSlideChange () {
    let currentSlideIndex = newsSlider.realIndex;

    if (window.innerWidth > 1439) {
      currentSlideIndex = Math.ceil(currentSlideIndex / 3);
    }

    if (currentSlideIndex === firstButton && currentSlideIndex !== 0) {
      firstButton--;
      showBullet(paginationList[firstButton]);
      hideBullet(paginationList[lastButton]);
      lastButton--;
    }
    if (currentSlideIndex === lastButton && currentSlideIndex !== paginationList.length - 1) {
      hideBullet(paginationList[firstButton]);
      firstButton++;
      lastButton++;
      showBullet(paginationList[lastButton]);
    }
  }
};

export { initSwiperNews };
