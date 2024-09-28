import { setCustomSelect } from './form/custom-select';
import { initForm } from './form/validate-form';

const selectContainer = document.querySelector('.form__custom-select--main');
const form = document.querySelector('.form__form');
const inputs = form.querySelectorAll('input');
const nameInput = form.querySelector('.form__input--name');
const phoneInput = form.querySelector('.form__input--phone');
const messageArea = form.querySelector('.form__input--message');

const initMainForm = () => {
  //Добавляем ошибки для невалидного поля ввода сообщения
  messageArea.addEventListener('invalid', () => {
    messageArea.classList.add('form__input--error');
  });

  messageArea.addEventListener('input', () => {
    messageArea.classList.remove('form__input--error');
  });

  setCustomSelect(selectContainer);
  initForm(form, inputs, nameInput, phoneInput);
};

export { initMainForm };
