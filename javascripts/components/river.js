import bearData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';
import table from './table.js';

const newBears = bearData.getBears();

const printBears = () => {
  let domString = `
    <div class="river-header container">
      <h2>Brooks River</h2>
    </div>
    <div class="container river-section">
      <div class="d-flex flex-wrap justify-content-center align-items-start">
    `;
  for (let i = 0; i < newBears.length; i++) {
    domString += `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${newBears[i].imageUrl}" alt="photo of a bear named ${newBears[i].name}">
        <div class="card-body">
          <h4 class="card-title">${newBears[i].name}</h4>
        </div>
        <span class="line"></span>
        <div class="d-flex justify-content-center align-items-start mt-2 mb-2">
          <a id="${newBears[i].id}"><i class="fas fa-hands"></i></a>
          <a id="${newBears[i].name}"><i class="fas fa-fish" data-fa-transform="rotate-340"></i></a>
        </div>
      </div>
    `;
  }
  domString += `
      </div>
    </div>
  `;
  utils.printToDom('#river', domString);
  for (let i = 0; i < newBears.length; i++) {
      $(`#${newBears[i].id}`).click(addData);
    }
  for (let i = 0; i < newBears.length; i++) {
    $(`#${newBears[i].name}`).click(addData);
  }
}

const addData = () => {
  utils.getDate();
  table.printTableData(newBears);
}

const printRiver = () => {
  let domString = `
    <div class="river-header container">
      <h2>Brooks River</h2>
    </div>
    <div class="container empty-river">
      <i class="far fa-frown"></i>
      <h4>No bears yet...</h4>
    </div>
  `;
  utils.printToDom('#river', domString);
}

export default { printBears, printRiver };
