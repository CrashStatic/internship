import { phoneInput } from './init-phone.js';
const placeSelect = document.querySelector('.form__input--place');
// const placeInput = document.querySelector('.form__input--place');
// const placeInput = document.querySelector('.form__input--place');
const nameInput = document.getElementById('name');
const checkboxInput = document.querySelector('.form__checkbox-input');

const baseCountryCode = '+7';
const baseMatrix = ' (___) ___ __ __';
const phoneLength = baseCountryCode.length + baseMatrix.length;

const form = document.querySelector('.form');

const initForm = () => {
  if (!form) {
    return;
  }

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //Получаем значения полей ввода
    const userPhone = phoneInput.value;
    // const userPlace = placeSelect.value;
    const userName = nameInput.value;
    const userCheckbox = checkboxInput.value;

    // //Проверяем длину номера телефона
    // const chekedNumber = () => {
    //   if(userPhone.length === phoneLength) {
    //     input.classList.remove('form__input--invalid');
    //   }
    // }

    // Проверяем, что поля заполнены
    // const chekedInput = (input) => {
    //   if (!userPhone || !userPlace || !userName) {
    //     input.classList.add('form__input--error');
    //   }
    // };

    // chekedInput(placeInput);
    // chekedInput(userPhone);
    // chekedInput(userName);

    const resetInput = (input) => {
      input.classList.remove('form__input--error');
      // input.value = '';
    };

    phoneInput.addEventListener('input', () => {
      if (phoneInput.value.length) {
        resetInput(phoneInput);
      }
    });

    phoneInput.addEventListener('click', () => {
      if (phoneInput.value.length) {
        resetInput(phoneInput);
      }
    });

    // function customValidation(input) {
    //   if (input.value.length < 5) {
    //     input.setCustomValidity('Должно быть не менее 5 символов.');
    //   } else {
    //     input.setCustomValidity('');
    //   }
    // }

    // phoneInput.addEventListener('input', () => customValidation(phoneInput));

    // Проверяем, что номер пользователя содержит нужное количество цифр
    if (!(userPhone.length === phoneLength)) {
      phoneInput.classList.add('form__input--error');
      // phoneInput.setAttribute('required', 'true');
      // phoneInput.setCustomValidity('Неполный номер телефона');
    } else {
      phoneInput.classList.remove('form__input--error');
    }

    if (!userName) {
      nameInput.classList.add('form__input--error');
      // phoneInput.setCustomValidity('Неполный номер телефона');
    } else {
      nameInput.classList.remove('form__input--error');
    }

    if (!userPhone) {
      phoneInput.classList.add('form__input--error');
      // phoneInput.setCustomValidity('Неполный номер телефона');
    } else {
      phoneInput.classList.remove('form__input--error');
    }

    // if (!userPlace) {
    //   placeSelect.classList.add('form__input--error');
    //   // phoneInput.setCustomValidity('Неполный номер телефона');
    // } else {
    //   placeSelect.classList.remove('form__input--error');
    // }

    if (!userCheckbox) {
      checkboxInput.classList.add('form__input--error-checkbox');
      // phoneInput.setCustomValidity('Неполный номер телефона');
    } else {
      checkboxInput.classList.remove('form__input--error-checkbox');
    }

    //Прописываем условия валидности формы
    const validForm = !phoneInput.classList.contains('form__input--error') && !nameInput.classList.contains('form__input--error') && !placeSelect.classList.contains('form__input--error') && !checkboxInput.classList.contains('form__input--error-checkbox');

    // Если всё в порядке, отправляем форму
    if (validForm) {
      form.submit();
      form.reset();
    }
  });
};

export { initForm };
