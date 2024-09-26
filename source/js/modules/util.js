const fragment = document.createDocumentFragment();

const renderSlider = (container, slider) => {
  slider.forEach((slide) => {
    const doubleSlide = slide.cloneNode(true);
    fragment.appendChild(doubleSlide);
  });

  container.appendChild(fragment);
};

export { renderSlider };
