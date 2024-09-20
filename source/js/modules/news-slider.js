import Swiper from 'swiper';
import 'swiper/css';
import { Grid, Pagination } from 'swiper/modules';

const initSwiperNews = () => {
  const swiper = new Swiper('.news__swiper', {

    slidesPerView: 'auto',
    spaceBetween: 20,

    modules: [Grid, Pagination],
    grid: {
      rows: 2,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.news__navigation-next',
      prevEl: '.news__navigation-prev',
    },

    pagination: {
      el: '.news__pagination-inner',
      // dynamicBullets: true,
      dynamicMainBullets: 3,
      bulletClass: 'news__pagination-button',
      bulletActiveClass: 'news__pagination-button--active',
      clickable: true,
      renderBullet: (index, className) => `<button class="${className}">${index + 1}</button>`,
    },

    // on: {
    //   slideChange: function () {
    //     updatePaginationPosition();
    //   },
    // },

    // // Scrollbar
    // scrollbar: {
    //   el: '.programs__scrollbar',
    //   horizontalClass: 'slider__scrollbar',
    //   draggable: true,
    //   dragClass: 'programs__drag-element',
    //   dragSize: 326,
    // },

    // Responsive breakpoints
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 15,
    //     allowTouchMove: true,
    //     scrollbar: {
    //       enabled: false,
    //     },
    //   },

    //   768: {
    //     slidesPerView: 'auto',
    //     spaceBetween: 30,
    //     allowTouchMove: true,
    //     scrollbar: {
    //       enabled: true,
    //     },
    //   },

    //   1440: {
    //     slidesPerView: 3,
    //     spaceBetween: 32,
    //     allowTouchMove: false,
    //     scrollbar: {
    //       enabled: true,
    //       dragSize: 394,
    //     },
    //   }
    // },
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

  // // Установка высоты для каждого слайда на основе их содержимого
  // const slides = document.querySelectorAll('.swiper-slide');
  // slides.forEach((slide) => {
  //   const height = slide.scrollHeight;
  //   slide.style.height = `${height}px`;
  // });
};

export { initSwiperNews };
