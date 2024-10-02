import { initPhoneInput } from './init-phone';
const VALID_NUMBER = /[+][7][\d ()-]{12}/gu;

// Проверка телефона
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

// Проверка выпадающего списка
const chekedSelect = (input) => {
  if (!input.value) {
    input.classList.add('form__input--error');
    return false;
  } else {
    input.classList.remove('form__input--error');
    return true;
  }
};

const initForm = (form, inputs, name, phone, place) => {
  if (!form) {
    return;
  }

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

    // Проверяем, что номер пользователя верный
    if (!chekedPhone(phone)) {
      phone.classList.add('form__input--error');
    } else {
      phone.classList.remove('form__input--error');
    }

    if(!chekedSelect(place)) {
      place.classList.add('form__input--error');
    } else {
      place.classList.remove('form__input--error');
    }

    name.addEventListener('input', () => {
      name.classList.remove('form__input--error');
    });

    phone.addEventListener('input', () => {
      phone.classList.remove('form__input--error');
      phone.setCustomValidity('');
      initPhoneInput(phone);
    });

    //Прописываем условия валидности формы
    const validForm = !name.classList.contains('form__input--error') && !phone.classList.contains('form__input--error') && !place.classList.contains('form__input--error');

    // Если всё в порядке, отправляем форму
    if (validForm) {
      form.submit();
      form.reset();
    }
  });
};

export { initForm };
