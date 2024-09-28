// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { initMenu } from './modules/menu';
import { initSwiperHero } from './modules/slider/hero-slider';
import { initModal } from './modules/modal';
// import { setCustomSelect } from './modules/form/custom-select';
import { initForm } from './modules/form/validate-form';
import { initSwiperPrograms } from './modules/slider/programs-slider';
import { initSwiperNews } from './modules/slider/news-slider';
import { initFaqAccordion } from './modules/faq';
import { initSwiperReviews } from './modules/slider/reviews-slider';
import { initMainForm } from './modules/form-main';

initMenu();
initSwiperHero();
initModal();
// setCustomSelect();
initForm();
initSwiperPrograms();
initSwiperNews();
initFaqAccordion();
initSwiperReviews();
initMainForm();
