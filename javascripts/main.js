import bearForm from './components/bearForm.js';
import river from './components/river.js';
import navbar from './components/navbar.js';

const init = () => {
  navbar.navbar();
  bearForm.printForm();
  river.printRiver();
}

init();
