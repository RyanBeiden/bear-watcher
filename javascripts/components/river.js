import bearData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';

const printBears = () => {
  const newBears = bearData.getBears();
  let domString = '';
  for (let i = 0; i < newBears.length; i++) {
    domString += `
      <h2>${newBears[i].name}</h2>
      <img src="${newBears[i].imageUrl}">
    `;
  }
  utils.printToDom('#river', domString);
}

export default { printBears };
