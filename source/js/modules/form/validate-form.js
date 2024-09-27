import { initPhoneInput, phoneInput } from './init-phone';
const VALID_NAME = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;
// const VALID_NUMBER = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
const VALID_NUMBER = /[+][7][\d ()-]{12,16}/gu;
// const VALID_NUMBER = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{12,16}$/;
// const VALID_NUMBER = /^((\+7|7|8)+([0-9]){12})$/;
// const placeSelect = document.querySelector('.form__input--place');
// const placeInput = document.querySelector('.form__input--place');
// const placeInput = document.querySelector('.form__input--place');
const nameInput = document.getElementById('name');
// const phoneInput = document.querySelector('.form__input--phone');
// const checkboxInput = document.querySelector('.form__checkbox-input');

// const baseCountryCode = '+7';
// const baseMatrix = ' (___) ___-__-__';
// const phoneLength = baseCountryCode.length + baseMatrix.length;
// const phoneLength = 10;


const form = document.querySelector('.form');
const inputs = form.querySelectorAll('input');

// const newPhone = initPhoneInput();

const chekedName = (input) => {
  const nameValue = input.value;

  if (!VALID_NAME.test(nameValue)) {
    input.classList.add('form__input--error');
    input.setCustomValidity('Введите имя, начинающееся с заглавной буквы');
    input.reportValidity();
    return false;
  } else {
    input.classList.remove('form__input--error');
    input.setCustomValidity('');
    return true;
  }
};

const chekedPhone = (input) => {
  const phoneValue = input.value;

  // if (!(input.value = phoneInput)) {
  //   input.classList.add('form__input--error');
  // }

  if (!VALID_NUMBER.test(phoneValue)) {
    input.classList.add('form__input--error');
    input.setCustomValidity('Введите номер телефона в формате +7 777 777 77 77');
    input.reportValidity();
    return false;
  } else {
    input.classList.remove('form__input--error');
    input.setCustomValidity('');
    return true;
  }
};

const initForm = () => {
  if (!form) {
    return;
  }

  initPhoneInput(phoneInput);

  // const userPhone = phoneInput.value;
  // const userName = nameInput.value;

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

    // const resetInput = (input) => {
    //   input.classList.remove('form__input--error');
    // };

    phoneInput.addEventListener('input', () => {
      // if (phoneInput.value.length) {
      //   resetInput(phoneInput);
      // }
      phoneInput.classList.remove('form__input--error');
      phoneInput.setCustomValidity('');
      initPhoneInput(phoneInput);
      onInputChange(phoneInput);
    });

    // phoneInput.addEventListener('click', () => {
    //   if (phoneInput.value.length) {
    //     resetInput(phoneInput);
    //   }
    // });

    nameInput.addEventListener('input', () => {
      onInputChange(nameInput);
    });

    // phoneInput.addEventListener('input', () => customValidation(phoneInput));

    // Проверяем, что номер пользователя верный
    if (!chekedPhone(phoneInput)) {
      phoneInput.classList.add('form__input--error');
    } else {
      phoneInput.classList.remove('form__input--error');
    }

    // Проверяем, что имя верно
    if (!chekedName(nameInput)) {
      nameInput.classList.add('form__input--error');
    } else {
      nameInput.classList.remove('form__input--error');
    }

    function onInputChange (input) {
      if (input.value.trim() === '') {
        input.classList.remove('form__input--error');
        input.setCustomValidity('');
      } else {
        if (input.classList.contains('form__input--error')) {
          if (nameInput) {
            chekedName(input);
          } else if (phoneInput) {
            chekedPhone(input);
          }
        }
      }
    }


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
