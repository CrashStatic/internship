// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { initMenu } from './modules/menu.js';
import { initSwiperHero } from './modules/slider/hero-slider.js';
import { initModal } from './modules/modal.js';
import { setCustomSelect } from './modules/form/custom-select.js';
import { initPhoneInput } from './modules/form/init-phone.js';
import { initForm } from './modules/form/validate-form.js';
import { initSwiperPrograms } from './modules/slider/programs-slider.js';
import { initSwiperNews } from './modules/slider/news-slider.js';
import { initFaqAccordion } from './modules/faq.js';

initMenu();
initSwiperHero();
initModal();
setCustomSelect();
initPhoneInput();
initForm();
initSwiperPrograms();
initSwiperNews();
initFaqAccordion();

// const select = document.querySelector('.modal__select option');
// const selectItem = document.querySelectorAll('.modal__item-option');

// const select = () => {
//   const selectHeader = document.querySelectorAll('.modal__item-header');


//   selectHeader.forEach((item) => {
//     item.addEventListener('click', selectToggle);
//   });

//   selectItem.forEach((item) => {
//     item.addEventListener('click', selectChoose);
//   });

//   function selectToggle() {
//     selectOption.classList.toggle('is-active');
//   }

//   function selectChoose() {
//     const text = this.innerText;
//     const selectValue = this.value;
//     const currentText = selectOption.querySelector('.modal__input--current');
//     currentText.innerText = text;
//     currentText.value = selectValue;
//     selectOption.classList.remove('is-active');
//   }
// };

// select();

// select.style.padding = '10px';
