import { initPhoneInput, phoneInput } from './init-phone';
const VALID_NAME = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;
const VALID_NUMBER = /[+][7][\d ()-]{12}/gu;
// const placeSelect = document.querySelector('.form__custom-select select');
// const placeInput = document.querySelector('.form__input--place');
const nameInput = document.getElementById('name');
// const phoneInput = document.querySelector('.form__input--phone');
// const checkboxInput = document.querySelector('.form__checkbox-input');

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('input');


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

  if (!VALID_NUMBER.test(phoneValue)) {
    input.classList.add('form__input--error');
    input.setCustomValidity('Введите номер телефона в формате +7 777 7777777');
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

  //Добавляем ошибки для невалидных полей
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

    //Прописываем условия валидности формы
    const validForm = !phoneInput.classList.contains('form__input--error') && !nameInput.classList.contains('form__input--error');

    // Если всё в порядке, отправляем форму
    if (validForm) {
      form.submit();
      form.reset();
    }
  });
};

export { initForm };
