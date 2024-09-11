// // const nav = document.querySelector('.nav');
// const menuBtn = document.querySelector('.nav__button');
// const menuList = document.querySelector('.nav__list');

// const initMenu = () => {
//   if (!menuBtn || !menuList) {
//     return;
//   }

//   menuBtn.addEventListener('click', () => {
//     // nav.classList.toggle('nav--open');
//     menuBtn.classList.toggle('nav__button--open');
//     menuList.classList.toggle('nav__list--open');
//   });

//   // const togglMenu = () => {
//   //   menuBtn.classList.toggle('nav__button--open');
//   //   menuList.classList.
//   // }
// };

// export { initMenu };

const btnMenuNode = document.querySelector('.nav__button');
const menuNode = document.querySelector('.nav__list');
const bodyNode = document.querySelector('body');
const headerMenuNode = document.querySelector('.header__nav');

const initMenu = () => {
  menuNode.classList.add('nav__list--closed');
  bodyNode.classList.remove('is-open-menu');

  btnMenuNode.addEventListener('click', () => {
    if (menuNode.classList.contains('nav__list--closed')) {
      headerMenuNode.insertAdjacentHTML('beforeEnd', '<div class="overlay"></div>');
      menuNode.classList.remove('nav__list--closed');
      menuNode.classList.add('nav__list--opened');
      bodyNode.classList.add('is-open-menu');
      btnMenuNode.classList.add('nav__button--open');
    } else {
      closeMenu();
    }
  });
};

function closeMenu () {
  menuNode.classList.add('nav__list--closed');
  menuNode.classList.remove('nav__list--opened');
  bodyNode.classList.remove('is-open-menu');
  btnMenuNode.classList.remove('nav__button--open');
  const overlay = headerMenuNode.querySelector('.overlay');
  overlay.parentNode.removeChild(overlay);
}

export {initMenu};
