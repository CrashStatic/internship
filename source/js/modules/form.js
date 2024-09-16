document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.getElementById('place');
  const customSelect = document.createElement('div');
  customSelect.setAttribute('class', 'form__input');
  customSelect.setAttribute('tabindex', '0');
  customSelect.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;

  const optionsContainer = document.createElement('div');
  optionsContainer.setAttribute('class', 'form__select-items');

  for (let i = 0; i < selectElement.length; i++) {
    const optionDiv = document.createElement('div');
    // optionDiv.setAttribute('class', 'form__div');

    optionDiv.setAttribute('tabindex', '0');
    optionDiv.innerHTML = selectElement.options[i].innerHTML;
    optionDiv.addEventListener('click', function () {
      selectElement.selectedIndex = i;
      customSelect.innerHTML = this.innerHTML;
      closeAllSelect();
    });

    optionDiv.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {

        selectElement.selectedIndex = i; // Установка выбранного индекса
        customSelect.innerHTML = e.target.innerHTML;
        closeAllSelect();
      }
    });

    optionsContainer.appendChild(optionDiv);
  }

  customSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    // closeAllSelect(this);
    optionsContainer.classList.toggle('form__select-items--opened');
  });

  // const isEnterKey = (evt) => evt.key === 'Enter';

  customSelect.addEventListener('keydown', (e) => {
    e.stopPropagation();

    if (e.key === 'Enter') {
      optionsContainer.classList.toggle('form__select-items--opened');

      // for (let i = 0; i < selectElement.length; i++) {
      //   const div = document.querySelector('.form__div');
      //   div.setAttribute('tabindex', '0');

      // }
      // optionDiv.setAttribute('tabindex', '0');

    }
    // closeAllSelect(this);
    // onSelectKeydown();
    // optionsContainer.classList.toggle('select-items--opened');
  });

  document.querySelector('.form__custom-select').appendChild(customSelect);
  document.querySelector('.form__custom-select').appendChild(optionsContainer);

  // const isEnterKey = (evt) => evt.key === 'Enter';

  // function onSelectKeydown() {
  //   if (isEnterKey) {
  //     optionsContainer.classList.toggle('select-items--opened');
  //   }
  // }

  function closeAllSelect(elmnt) {
    const items = document.getElementsByClassName('form__select-items');
    for (let i = 0; i < items.length; i++) {
      if (elmnt !== items[i]) {
        items[i].classList.remove('form__select-items--opened');
      }
    }
  }

  document.addEventListener('click', closeAllSelect);
});
