// const faqItems = document.querySelectorAll('.faq__item');
const accordionItems = document.querySelectorAll('.faq__item');

const initFaqAccordion = () => {
  if (!accordionItems) {
    return;
  }

  accordionItems.forEach((button) => {
    button.addEventListener('click', buttonHandler);

    // button.addEventListener('keydown', (e) => {
    //   if (e.keyCode === 0 || e.keyCode === 32 || e.key === 'Enter') {
    //     const activeContent = document.querySelector('.faq__item');
    //     const currentContent = activeContent.querySelector('.faq__answer');
    //     if (activeContent.classList.contains('faq__item--active')) {
    //       activeContent.classList.remove('faq__item--active');
    //       currentContent.style.maxHeight = 0;
    //       // button.classList.remove('is-active');
    //     } else {
    //       activeContent.classList.add('faq__item--active');
    //       // button.classList.add('is-active');
    //       currentContent.style.maxHeight = `${activeContent.scrollHeight}px`;
    //     }
    //   }
    // });
  });


  function buttonHandler(button) {

    // e.preventDefault();
    const currentBox = button.target.closest('.faq__item');
    const currentContent = currentBox.querySelector('.faq__answer');
    // const currentFaq = currentBox.parentNode;

    currentBox.classList.toggle('faq__item--active');

    if (currentBox.classList.contains('faq__item--active')) {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
      // currentFaq.classList.add('faq__item--active');
    } else {
      currentContent.style.maxHeight = 0;
      // currentFaq.classList.remove('faq__item--active');
    }



    window.addEventListener('resize', () => {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    });
  }

  document.querySelector('.faq__item:nth-child(3)').click();
};

export { initFaqAccordion };
