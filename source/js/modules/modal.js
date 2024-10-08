import { setCustomSelect } from './form/custom-select';
import { initForm } from './form/validate-form';
import { initPhoneInput } from './form/init-phone';

const LABELCLASS = 'form__label--modal';

const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.about__button');
const aboutSection = document.querySelector('.about');
const modalCloseBtn = document.querySelector('.modal__close-button');
const overlay = document.querySelector('.modal__overlay');
const modalForm = document.querySelector('.modal__form');
const selectContainer = document.querySelector('.form__custom-select--modal');
const form = document.querySelector('.modal__form');
const inputs = form.querySelectorAll('input');
const nameInput = form.querySelector('.form__input--name');
const phoneInput = form.querySelector('.form__input--phone');
const selectElement = form.querySelector('.form__select--modal');
const selectInput = form.querySelector('.form__input--place-modal');

const modalClosed = () => {
  modal.classList.remove('modal--opened');
  aboutSection.scrollIntoView();
  overlay.style.display = 'none';
  modalForm.reset();
  inputs.forEach((input) => {
    input.classList.remove('form__input--error');
  });
};

const initModal = () => {
  if (!modal) {
    return;
  }

  // Добавляем маску телефона
  initPhoneInput(phoneInput);

  modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('modal--opened');
    window.scrollTo(0, 0);
    overlay.style.display = 'block';
  });

  modalCloseBtn.addEventListener('click', modalClosed);

  overlay.addEventListener('click', modalClosed);

  setCustomSelect(selectElement, LABELCLASS, selectContainer, selectInput);
  initForm(form, inputs, nameInput, phoneInput, selectInput);
};

export { initModal, modalClosed };
