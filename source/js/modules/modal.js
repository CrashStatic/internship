const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.about__button');
const aboutSection = document.querySelector('.about');
const modalCloseBtn = document.querySelector('.modal__close-button');
const overlay = document.querySelector('.modal__overlay');

const initModal = () => {
  if (!modal) {
    return;
  }

  modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('modal--opened');
    window.scrollTo(0, 0);
    overlay.style.display = 'block';
  });

  modalCloseBtn.addEventListener('click', modalClosed);

  overlay.addEventListener('click', modalClosed);

  function modalClosed() {
    modal.classList.remove('modal--opened');
    aboutSection.scrollIntoView();
    overlay.style.display = 'none';
  }
};

export { initModal };
