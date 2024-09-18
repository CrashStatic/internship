import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';

// const swiperContainer = document.querySelector('.swiper-wrapper');
// const swiperLinks = swiperContainer.querySelectorAll('a[href]');

const swiperLinks = document.querySelectorAll('.hero__link');

const initSwiperHero = () => {
  const swiper = new Swiper('.hero__swiper', {
    modules: [ Pagination ],

    // If we need pagination
    // pagination: {
    //   el: '.swiper-slide-active .swiper-pagination',
    //   type: 'bullets',
    //   bulletClass: 'hero__pagination-bullet',
    //   bulletActiveClass: 'hero__pagination-bullet--active',
    //   clickable: true,
    // },

    pagination: {
      el: '.swiper-slide-active .hero__pagination',
      clickable: true,
      bulletElement: 'button type="button" aria-label="Переключить слайд"',
    },

    // watchOverflow: true,
    spaceBetween: 40,
    slidesPerView: 1,
    centeredSlides: false,
    direction: 'horizontal',
    initialSlide: 0,
    slidesPerGroup: 1,
    loop: true,
    speed: 600,
    // preventClicks: true,

    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true,
    // },

    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },

    // keyboard: true,
    // focusableElements: 'a, button',

    // loop: true,


    // Default parameters
    // slidesPerView: 1,
    // spaceBetween: 40,

    breakpoints: {
      1440: {
        allowTouchMove: false,
      }
    },

    // breakpointsBase: 'window',

    // Устанавливает пагинацию на каждый слайд
    on: {
      slideChangeTransitionStart: () => {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
        // swiperLinks.forEach((button) => {
        //   button.setAttribute('tabindex', '-1');
        // });
        // swiperLinks[swiper.realIndex].setAttribute('tabindex', '0');
      }
    }
  });

  // const heroLinks = document.querySelectorAll('.hero__link');

  // heroLinks.forEach((link, index) => {
  //   link.addEventListener('focus', () => {
  //     swiper.slideTo(index);
  //   });
  // });

  // swiper.params.pagination

  // const heroLinks = document.querySelectorAll('.hero__link');

  // heroLinks.forEach((link, index) => {
  //   link.addEventListener('focus', () => {
  //     swiper.slideTo(index);
  //   });
  // });

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


  // swiper.enable();

  // const heroSlider = document.querySelector('.hero__wrapper ');
  // const heroSlides = heroSlider.querySelectorAll('.hero__slide');

  // heroSlides.forEach((slide) => {
  //   if (!slide.classList.contains('swiper-slide-duplicate')) {
  //     slide.setAttribute('tabindex', 0);
  //   } else {
  //     const pagination = slide.querySelector('.hero__pagination');
  //     const button = slide.querySelector('.hero__link');
  //     pagination.setAttribute('inert', '');
  //     button.setAttribute('tabindex', '-1');
  //   }
  // });
};

export { initSwiperHero };


// import Swiper from 'swiper';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// // import 'swiper/css/pagination';

// const initSwiperHero = () => {
//   const heroSlider = document.querySelector('.hero__swiper');
//   let isFirstLoad = true;

//   const initActiveSlide = () => {
//     const activeSlide = document.querySelector('.swiper-slide-active');
//     if (!activeSlide) {
//       return;
//     }

//     const allSlides = document.querySelectorAll('.hero-slide');
//     allSlides.forEach((slide) => {
//       slide.querySelectorAll('a').forEach((slideLink) => {
//         slideLink.setAttribute('tabindex', '-1');
//       });
//     });

//     activeSlide.querySelectorAll('a').forEach((slideLink) => {
//       slideLink.setAttribute('tabindex', '0');
//     });
//   };

//   const setActiveLink = () => {
//     if (isFirstLoad) {
//       return;
//     }

//     setTimeout(() => {
//       const activeSlide = document.querySelector('.swiper-slide-active');
//       if (activeSlide) {
//         const slideLink = activeSlide.querySelector('a');
//         if (slideLink) {
//           slideLink.focus();
//         }
//       }
//     }, 200);
//   };

//   const addAriaAttributesToBullets = () => {
//     const bullets = document.querySelectorAll('.hero__slider-bullet');
//     bullets.forEach((bullet, index) => {
//       bullet.setAttribute('role', 'button');
//       bullet.setAttribute('aria-label', `слайд №${index + 1}`);
//     });
//   };

//   new Swiper(heroSlider, {
//     modules: [Pagination],
//     watchOverflow: true,
//     grabCursor: false,
//     simulateTouch: false,
//     speed: 500,
//     loop: true,
//     slidesPerView: 1,
//     autoHeight: true,
//     pagination: {
//       el: '.hero__pagination',
//       clickable: true,
//       bulletElement: 'button type="button"',
//       // type: 'bullets',
//       // bulletClass: 'hero__pagination-bullet',
//       // bulletActiveClass: 'hero__pagination-bullet--active',
//       bulletClass: 'hero__slider-bullet',
//       bulletActiveClass: 'hero__slider-bullet--is-active',
//     },
//     on: {
//       init: () => {
//         initActiveSlide();
//         addAriaAttributesToBullets();
//         isFirstLoad = false;
//       },
//       slideChange: () => {
//         initActiveSlide();
//         setActiveLink();
//       },
//       slideChangeTransitionStart: () => {
//         initActiveSlide();
//       },
//     },
//     breakpoints: {
//       320: {
//         pagination: {
//           clickable: false,
//           grabCursor: true,
//           simulateTouch: true,
//         },
//       },
//       768: {
//         pagination: {
//           clickable: false,
//           grabCursor: true,
//           simulateTouch: true,
//         },
//       },
//       1440: {
//         allowTouchMove: false,
//         clickable: true,
//       }
//     },
//   });
// };

// export { initSwiperHero };


// import Swiper from 'swiper/bundle';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// // import 'swiper/css/pagination';

// const swiperContainer = document.querySelector('.swiper-wrapper');
// const swiperLinks = swiperContainer.querySelectorAll('a[href]');

// const initSwiperHero = () => {

//   let isFirstLoad = true;

//   const initActiveSlide = () => {
//     const activeSlide = document.querySelector('.swiper-slide-active');
//     if (!activeSlide) {
//       return;
//     }

//     const allSlides = document.querySelectorAll('.hero-slide');
//     allSlides.forEach((slide) => {
//       slide.querySelectorAll('a').forEach((slideLink) => {
//         slideLink.setAttribute('tabindex', '-1');
//       });
//     });

//     activeSlide.querySelectorAll('a').forEach((slideLink) => {
//       slideLink.setAttribute('tabindex', '0');
//     });
//   };

//   const setActiveLink = () => {
//     if (isFirstLoad) {
//       return;
//     }

//     setTimeout(() => {
//       const activeSlide = document.querySelector('.swiper-slide-active');
//       if (activeSlide) {
//         const slideLink = activeSlide.querySelector('a');
//         if (slideLink) {
//           slideLink.focus();
//         }
//       }
//     }, 200);
//   };

//   const addAriaAttributesToBullets = () => {
//     const bullets = document.querySelectorAll('.hero__slider-bullet');
//     bullets.forEach((bullet, index) => {
//       bullet.setAttribute('role', 'button');
//       bullet.setAttribute('aria-label', `слайд №${index + 1}`);
//     });
//   };

//   const swiper = new Swiper('.hero__swiper', {
//     modules: [ Pagination ],

//     // If we need pagination
//     pagination: {
//       el: '.swiper-slide-active .hero__pagination',
//       type: 'bullets',
//       bulletClass: 'hero__pagination-bullet',
//       bulletActiveClass: 'hero__pagination-bullet--active',
//       clickable: true,
//     },

//     loop: true,
//     autoHeight: true,

//     // Default parameters
//     slidesPerView: 1,
//     spaceBetween: 40,

//     breakpoints: {
//       1440: {
//         allowTouchMove: false,
//       }
//     },

//     breakpointsBase: 'window',

//     // Устанавливает пагинацию на каждый слайд
//     on: {
//       init: () => {
//         initActiveSlide();
//         addAriaAttributesToBullets();
//         isFirstLoad = false;
//       },
//       slideChange: () => {
//         initActiveSlide();
//         setActiveLink();
//         // swiper.pagination.init();
//         // swiper.pagination.render();
//         // swiper.pagination.update();
//       },
//       slideChangeTransitionStart: function () {
//         initActiveSlide();
//         setActiveLink();
//         swiper.pagination.init();
//         swiper.pagination.render();
//         swiper.pagination.update();
//       }
//     }
//   });

//   // Запрещает Tab по неактивным слайдам
//   // function setTabIndex() {
//   //   swiper.slides[swiper.activeIndex].querySelector('a').setAttribute('tabindex', '0');
//   // }

//   // for (const link of swiperLinks) {
//   //   link.setAttribute('tabindex', '-1');
//   //   setTabIndex();
//   // }

//   // swiper.on('activeIndexChange', () => {
//   //   for (const link of swiperLinks) {
//   //     link.setAttribute('tabindex', '-1');
//   //   }
//   //   setTabIndex();
//   // });
// };

// export { initSwiperHero };
