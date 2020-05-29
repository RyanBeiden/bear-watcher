import utils from '../helpers/utils.js';

const navbar = () => {
  const domString = `
    <header class="d-flex justify-content-between">
      <img class="logo" src="./assets/navbar-logo@2x.png">
      <a href="https://github.com/RyanBeiden/bear-watcher"><i class="fab fa-github"></i></a>
    </header>
  `;
  utils.printToDom('#navbar', domString);
}

export default { navbar };
