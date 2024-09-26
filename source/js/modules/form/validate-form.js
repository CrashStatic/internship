import { phoneInput } from './init-phone';
// const placeSelect = document.querySelector('.form__input--place');
// const placeInput = document.querySelector('.form__input--place');
// const placeInput = document.querySelector('.form__input--place');
const nameInput = document.getElementById('name');
// const checkboxInput = document.querySelector('.form__checkbox-input');

const baseCountryCode = '+7';
const baseMatrix = ' (___) ___-__-__';
const phoneLength = baseCountryCode.length + baseMatrix.length;
// const phoneLength = 18;


const form = document.querySelector('.form');
const inputs = form.querySelectorAll('input');

const initForm = () => {
  if (!form) {
    return;
  }

  const userPhone = phoneInput.value;

  // phoneInput.addEventListener('invalid', (evt) => {
  //   // // Предотвращение стандартного сообщения об ошибке
  //   // event.preventDefault();

  //   // Проверка длины номера телефона
  //   if (!(evt.length === phoneLength)) {
  //     phoneInput.classList.add('form__input--error');
  //     phoneInput.setCustomValidity('Телефон указан неверно');
  //     // phoneInput.setAttribute('invalid', 'true');
  //     // phoneInput.setAttribute('required', 'true');
  //     // phoneInput.setCustomValidity('Неполный номер телефона');
  //   } else {
  //     phoneInput.setCustomValidity('Имя пользователя не соответствует требованиям.');
  //   }

  //   // phoneInput.reportValidity();
  // });

  inputs.forEach((input) => {
    input.addEventListener('invalid', () => {
      input.classList.add('form__input--error');
    });

    input.addEventListener('input', () => {
      input.classList.remove('form__input--error');
    });
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //Получаем значения полей ввода
    // const userPhone = phoneInput.value;
    // const userPlace = placeSelect.value;
    // const userName = nameInput.value;
    // const userCheckbox = checkboxInput.value;

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
    // if (!(userPhone.length === phoneLength)) {
    //   phoneInput.classList.add('form__input--error');
    //   // phoneInput.setAttribute('invalid', 'true');
    //   // phoneInput.setAttribute('required', 'true');
    //   // phoneInput.setCustomValidity('Неполный номер телефона');
    // } else {
    //   phoneInput.classList.remove('form__input--error');
    // }

    // userPhone.addEventListener('invalid', () => {
    //   form.classList.add('form--error');
    // });

    // if (!userName) {
    //   nameInput.classList.add('form__input--error');
    //   // phoneInput.setCustomValidity('Неполный номер телефона');
    // } else {
    //   nameInput.classList.remove('form__input--error');
    // }

    // if (!userPhone) {
    //   phoneInput.classList.add('form__input--error');
    //   // phoneInput.setCustomValidity('Неполный номер телефона');
    // } else {
    //   phoneInput.classList.remove('form__input--error');
    // }

    // if (!userPlace) {
    //   placeSelect.classList.add('form__input--error');
    //   // phoneInput.setCustomValidity('Неполный номер телефона');
    // } else {
    //   placeSelect.classList.remove('form__input--error');
    // }

    // if (!userCheckbox) {
    //   checkboxInput.classList.add('form__input--error-checkbox');
    //   // phoneInput.setCustomValidity('Неполный номер телефона');
    // } else {
    //   checkboxInput.classList.remove('form__input--error-checkbox');
    // }

    // phoneInput.addEventListener('invalid', (event) => {
    //   // Предотвращение стандартного сообщения об ошибке
    //   event.preventDefault();

    //   // Проверка, если поле пустое
    //   if (!(userPhone.length === phoneLength)) {
    //     phoneInput.classList.add('form__input--error');
    //     // phoneInput.setAttribute('invalid', 'true');
    //     // phoneInput.setAttribute('required', 'true');
    //     // phoneInput.setCustomValidity('Неполный номер телефона');
    //   } else {
    //     phoneInput.classList.remove('form__input--error');
    //   }
    // });

    //Прописываем условия валидности формы
    const validForm = !phoneInput.classList.contains('form__input--error') && !nameInput.classList.contains('form__input--error');

    // Если всё в порядке, отправляем форму
    if (validForm) {
      form.submit();
      form.reset();
    }

    // if (validForm) {
    //   form.submit();
    //   form.reset();
    // } else {
    //   form.classList.add('form--error');
    // }
  });
};

export { initForm };
