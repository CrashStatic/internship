// const baseCountryCode = '+7';
// const baseMatrix = ' (___) ___ __ __';
// const phoneLength = baseCountryCode.length + baseMatrix.length;
const phoneInput = document.querySelector('.form__input--phone');

let old = 0;

const initPhoneInput = () => {
  phoneInput.addEventListener('input', function () {
    const value = this.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    const curLen = phoneInput.value.length;

    if (curLen < old){
      old--;
      return;
    }

    phoneInput.value = '+7 (';

    if (curLen > 1) {
      phoneInput.value += value.substring(1, 4);
    }

    if (curLen >= 4) {
      phoneInput.value += `) ${value.substring(4, 7)}`;
    }

    if (curLen >= 7) {
      phoneInput.value += `-${value.substring(7, 9)}`;
    }

    if (curLen >= 9) {
      phoneInput.value += `-${value.substring(9, 11)}`;
    }

    //  if (curLen > 18)
    // {phoneInput.value = phoneInput.value.substring(0, phoneInput.value.length - 1);}

    old++;

    // let formattedValue = '+7 (';

    // if (value.length > 1) {
    //   formattedValue += value.substring(1, 4); // Код страны
    // }
    // if (value.length >= 4) {
    //   formattedValue += `) ${value.substring(4, 7)}`; // Код города
    // }
    // if (value.length >= 7) {
    //   formattedValue += `-${value.substring(7, 9)}`; // Первая часть номера
    // }
    // if (value.length >= 9) {
    //   formattedValue += `-${value.substring(9, 11)}`; // Вторая часть номера
    // }

    // this.value = formattedValue;
  });

  // phoneInput.addEventListener('keypress', (evt) => {
  //   if (evt.keyCode < 47 || evt.keyCode > 57) {
  //     evt.preventDefault();
  //   }
  // })

  // phoneInput.addEventListener('focus', () => {
  //   if (phoneInput.value.length === 0) {
  //     phoneInput.value = '+7';
  //     phoneInput.selectionStart = phoneInput.value.length;
  //   }
  // })

  // phoneInput.addEventListener('click', (evt) => {
  //   if (phoneInput.selectionStart < 2) {
  //     phoneInput.selectionStart = phoneInput.value.length;
  //   }
  //   if (evt.key === 'Backspace' && phoneInput.value.length <= 2) {
  //     evt.preventDefault();
  //   }
  // })

  // phoneInput.addEventListener('blur', () => {
  //   if (phoneInput.value === '+7') {
  //     phoneInput.value = '';
  //   }
  // })

  // phoneInput.addEventListener('keydown', (evt) => {
  //   if (evt.key === 'Backspace' && phoneInput.value.length <= 2) {
  //     evt.preventDefault();
  //   }
  // })
};

export { initPhoneInput, phoneInput };
