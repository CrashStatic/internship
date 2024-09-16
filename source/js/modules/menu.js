const header = document.querySelector('.header');
const menuBtn = document.querySelector('.nav__button');
const menuList = document.querySelector('.nav__list');
const overlay = document.querySelectorAll('.overlay');
const submenuBtn = document.querySelectorAll('.nav__dropdown');
const navLinks = document.querySelectorAll('[data-header="nav-link"]');

const initMenu = () => {
  if (!menuBtn || !menuList || !submenuBtn) {
    return;
  }

  menuBtn.addEventListener('click', () => {
    if (menuList.classList.contains('nav__list--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    menuList.classList.remove('nav__list--opened');
    menuBtn.classList.remove('nav__button--open');
    header.classList.remove('header--opened');
    overlay.forEach((item) => {
      item.style.display = 'none';
    });
  }

  function openMenu() {
    menuList.classList.add('nav__list--opened');
    menuBtn.classList.add('nav__button--open');
    header.classList.add('header--opened');
    overlay.forEach((item) => {
      item.style.display = 'block';
    });
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

export { initMenu };
