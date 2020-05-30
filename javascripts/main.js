import bearForm from './components/bearForm.js';
import river from './components/river.js';
import navbar from './components/navbar.js';
import table from './components/table.js';

const init = () => {
  navbar.navbar();
  bearForm.printForm();
  river.printRiver();
  table.printTableSection();
}

init();
