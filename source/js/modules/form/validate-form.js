import { initPhoneInput, phoneInput } from './init-phone';
const VALID_NAME = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;
const VALID_NUMBER = /[+][7][\d ()-]{12}/gu;
const nameInput = document.getElementById('name');

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

    phoneInput.addEventListener('input', () => {
      phoneInput.classList.remove('form__input--error');
      phoneInput.setCustomValidity('');
      initPhoneInput(phoneInput);
      onInputChange(phoneInput);
    });

    nameInput.addEventListener('input', () => {
      onInputChange(nameInput);
    });

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
