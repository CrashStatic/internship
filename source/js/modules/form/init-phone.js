const phoneInput = document.querySelector('.form__input--phone');

let oldLength = 0;

const initPhoneInput = () => {
  phoneInput.addEventListener('input', () => {
    const value = phoneInput.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    const currentLength = phoneInput.value.length;

    if (currentLength < oldLength){
      oldLength--;
      return;
    }

    phoneInput.value = '+7 ';

    if (currentLength > 1) {
      phoneInput.value += value.substring(1, 4);
    }

    if (currentLength >= 4) {
      phoneInput.value += ` ${value.substring(4, 7)}`;
    }

    if (currentLength >= 7) {
      phoneInput.value += `${value.substring(7, 9)}`;
    }

    if (currentLength >= 9) {
      phoneInput.value += `${value.substring(9, 11)}`;
    }

    oldLength++;
  });
};

export { initPhoneInput, phoneInput };
