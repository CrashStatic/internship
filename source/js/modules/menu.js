const header = document.querySelector('.header');
const menuBtn = document.querySelector('.nav__button');
const menuList = document.querySelector('.nav__list');
const bodyElement = document.querySelector('.page');
const overlay = document.querySelector('.overlay');
const submenuBtn = document.querySelectorAll('.nav__dropdown');
const navLinks = document.querySelectorAll('[data-header="nav-link"]');

const initMenu = () => {
  if (!menuBtn || !menuList || !bodyElement || !submenuBtn) {
    return;
  }

  menuBtn.addEventListener('click', () => {
    if (menuList.classList.contains('nav__list--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    menuList.classList.remove('nav__list--opened');
    bodyElement.classList.remove('scroll-lock');
    menuBtn.classList.remove('nav__button--open');
    header.classList.remove('header--opened');
    overlay.style.display = 'none';
  }

  function openMenu() {
    menuList.classList.add('nav__list--opened');
    bodyElement.classList.add('scroll-lock');
    menuBtn.classList.add('nav__button--open');
    header.classList.add('header--opened');
    overlay.style.display = 'block';
  }

  // Подменю
  submenuBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const currentBtn = e.target.closest('.nav__item');
      const currentContent = currentBtn.querySelector('.nav__submenu');

      currentContent.classList.toggle('nav__submenu--active');

      if (currentContent.classList.contains('nav__submenu--active')) {
        currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
        button.classList.add('nav__dropdown--active');
      } else {
        currentContent.style.maxHeight = 0;
        button.classList.remove('nav__dropdown--active');
      }
    });
  });

  // Закрытие меню при переходе по ссылкам
  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
};

export {initMenu};
