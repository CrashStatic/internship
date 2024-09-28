import { setCustomSelect } from './form/custom-select';

const selectContainer = document.querySelector('.form__custom-select--main');

const initMainForm = () => {
  setCustomSelect(selectContainer);
};

export { initMainForm };
