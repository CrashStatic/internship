const fragment = document.createDocumentFragment();
const label = document.querySelector('.form__label');

const setCustomSelect = (select, labelClass, container, customSelect) => {
  const optionsContainer = document.createElement('div');
  optionsContainer.setAttribute('class', 'form__select-items');

  customSelect.addEventListener('input', () => {
    customSelect.value = '';
  });

  for (let i = 0; i < select.length; i++) {
    const optionDiv = document.createElement('div');

    optionDiv.setAttribute('tabindex', '0');
    optionDiv.innerHTML = select.options[i].innerHTML;
    optionDiv.addEventListener('click', function () {
      select.selectedIndex = i;
      customSelect.innerHTML = this.innerHTML;
      customSelect.value = this.innerHTML;
      closeAllSelect();
    });

    optionDiv.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        select.selectedIndex = i; // Установка выбранного индекса
        customSelect.innerHTML = e.target.innerHTML;
        customSelect.value = e.target.innerHTML;
        closeAllSelect();
      }
    });

    optionsContainer.appendChild(optionDiv);
  }

  customSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    optionsContainer.classList.toggle('form__select-items--opened');
  });

  customSelect.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      optionsContainer.classList.toggle('form__select-items--opened');
    }
  });

  const labelSelect = label.cloneNode(true);
  labelSelect.classList.add(`${labelClass}`);
  labelSelect.textContent = 'Выберите город';

  container.appendChild(customSelect);
  container.appendChild(optionsContainer);
  fragment.appendChild(labelSelect);
  container.appendChild(fragment);

  function closeAllSelect(elmnt) {
    const items = document.getElementsByClassName('form__select-items');
    for (let i = 0; i < items.length; i++) {
      if (elmnt !== items[i]) {
        items[i].classList.remove('form__select-items--opened');
      }
    }
  }

  document.addEventListener('click', closeAllSelect);
};

export { setCustomSelect };
