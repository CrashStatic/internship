import Swiper from 'swiper/bundle';
// import 'swiper/css';
import 'swiper/css/bundle';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


const ADDITIONAL_PAGES = 3;
const sliderElement = document.querySelector('.news__wrapper');
const fragment = document.createDocumentFragment();
const slides = document.querySelectorAll('.news__slide');
const newsTabs = document.querySelectorAll('.news__tab');
// const newsWrapper = document.querySelector('.news__wrapper');

const renderSlider = (container, slider) => {
  slider.forEach((slide) => {
    const doubleSlide = slide.cloneNode(true);
    fragment.appendChild(doubleSlide);
  });

  container.appendChild(fragment);
};


const initSwiperNews = () => {
  if (window.innerWidth < 1439) {
    for (let i = 0; i < ADDITIONAL_PAGES; i++) {
      renderSlider(sliderElement, slides);
    }
  } else {
    for (let i = 1; i <= ADDITIONAL_PAGES; i++) {
      renderSlider(sliderElement, slides);
    }
  }

  new Swiper('.news__swiper', {
    modules: [Grid, Pagination],

    // slidesPerView: 'auto',
    // slidesPerGroup: 1,
    // spaceBetween: 20,
    loop: false,

    // grid: {
    //   rows: 2,
    // },

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
      // el: '.news__pagination-inner',
      el: '.news__pagination',
      dynamicBullets: true,
      dynamicMainBullets: 3,
      // bulletClass: 'news__pagination-button',
      // bulletActiveClass: 'news__pagination-button--active',
      clickable: true,
      renderBullet: (index, className) => `<button class="${className}">${index + 1}</button>`,
    },

    // on: {
    //   slideChange: function () {
    //     updatePaginationPosition();
    //   },
    // },


    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        // slidesPerGroup: 1,
        spaceBetween: 20,
        // slidesPerView: 1,
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
        // slidesPerGroup: 3,
        // slidesPerView: 3,
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

      // if (currentTab.hasAttribute('all')) {
      //   slider.update();
      // } else {
      //   newsWrapper.innerHTML = '';
      // }

    });
  });

  // function updatePaginationPosition() {
  //   const bullets = document.querySelectorAll('.news__pagination-button');
  //   const activeIndex = swiper.activeIndex % bullets.length; // Получаем индекс активного слайда
  //   const activeBullet = bullets[activeIndex];

  //   // Сдвигаем пагинацию под активный слайд
  //   const bulletWidth = activeBullet.offsetWidth;
  //   const bulletOffset = activeBullet.offsetLeft;

  //   // Применяем стили для сдвига

  //   if (swiper.activeIndex > 4) {
  //     document.querySelector('.news__pagination-inner').style.transform = `translateX(-${bulletOffset}px)`;

  //   }
  // }

  // Инициализация позиции пагинации
  // updatePaginationPosition();

  // const hidePaginationButton = (button) => {
  //   button.classList.add('visually-hidden');
  //   button.style.disable = 'true';
  //   button.setAttribute('tab-index', '-1');
  // };

  // const showPaginationButton = (button) => {
  //   button.classList.remove('visually-hidden');
  //   button.style.disable = '';
  //   button.setAttribute('tab-index', '0');
  // };

  // const newsPagination = document.querySelector('.news__pagination');
  // const paginationList = newsPagination.children;
  // const shownButtons = 4;
  // let firstShownButton = 0;
  // let lastShownButton = paginationList.length < shownButtons ? paginationList.length : shownButtons - 1;

  // for (let i = shownButtons; i < paginationList.length; i++) {
  //   hidePaginationButton(paginationList[i]);
  // }

  // const onSlideChange = () => {
  //   const currentSlideIndex = swiper.realIndex;

  //   if (currentSlideIndex === firstShownButton && currentSlideIndex !== 0) {
  //     firstShownButton -= 1;
  //     showPaginationButton(paginationList[firstShownButton]);
  //     hidePaginationButton(paginationList[lastShownButton]);
  //     lastShownButton -= 1;
  //   }
  //   if (currentSlideIndex === lastShownButton && currentSlideIndex !== paginationList.length - 1) {
  //     hidePaginationButton(paginationList[firstShownButton]);
  //     lastShownButton += 1;
  //     firstShownButton += 1;
  //     showPaginationButton(paginationList[lastShownButton]);
  //   }
  // };

  // swiper.on('slideChange', onSlideChange);
};

export { initSwiperNews };
