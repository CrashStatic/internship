import { setCustomSelect } from './form/custom-select';
import { initForm } from './form/validate-form';
import { initPhoneInput } from './form/init-phone';

const SETINPUTCLASS = 'form__input form__input--main form__input--place-main';
const LABELCLASS = 'form__label--main';

const selectContainer = document.querySelector('.form__custom-select--main');
const form = document.querySelector('.form__form');
const inputs = form.querySelectorAll('input');
const nameInput = form.querySelector('.form__input--name');
const phoneInput = form.querySelector('.form__input--phone');
const messageArea = form.querySelector('.form__input--message');

const initMainForm = () => {
  if (!form) {
    return;
  }

  // Добавляем маску телефона
  initPhoneInput(phoneInput);

  //Добавляем ошибки для невалидного поля ввода сообщения
  messageArea.addEventListener('invalid', () => {
    messageArea.classList.add('form__input--error');
  });

  messageArea.addEventListener('input', () => {
    messageArea.classList.remove('form__input--error');
  });

  setCustomSelect(SETINPUTCLASS, LABELCLASS, selectContainer);
  initForm(form, inputs, nameInput, phoneInput);
};

export { initMainForm };
