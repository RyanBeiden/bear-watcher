import bearData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';

const printBears = () => {
  for (let i = 0; i < bearData.getBears; i++) {
    let domString = `
      <h1>${bearData.getBears[i].name}</h1>
    `;
  utils.printToDom('#river', domString);
  }
}

export default { printBears }; // maybe?
