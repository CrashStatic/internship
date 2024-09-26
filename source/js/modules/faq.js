const accordionItems = document.querySelectorAll('.faq__item');

const initFaqAccordion = () => {
  if (!accordionItems) {
    return;
  }

  accordionItems.forEach((button) => {
    button.addEventListener('click', buttonHandler);

    button.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 0 || evt.keyCode === 32 || evt.key === 'Enter') {
        evt.preventDefault();
        buttonHandler(evt);
      }
    });
  });

  function buttonHandler(button) {
    const currentBox = button.target.closest('.faq__item');
    const currentContent = currentBox.querySelector('.faq__answer');

    currentBox.classList.toggle('faq__item--active');

    if (currentBox.classList.contains('faq__item--active')) {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    } else {
      currentContent.style.maxHeight = 0;
    }

    window.addEventListener('resize', () => {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    });
  }

  document.querySelector('.faq__item:nth-child(3)').click();
};

export { initFaqAccordion };
