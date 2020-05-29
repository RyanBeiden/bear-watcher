import bearData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';

const printBears = () => {
  const newBears = bearData.getBears();
  let domString = `
    <div class="river-header container">
      <h2>Brooks River</h2>
    </div>
      <div class="container river-section">
        <div class="d-flex flex-wrap justify-content-center">
  `;
  for (let i = 0; i < newBears.length; i++) {
    domString += `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${newBears[i].imageUrl}" alt="photo of a bear named ${newBears[i].name}">
        <div class="card-body">
          <h4 class="card-title">${newBears[i].name}</h4>
        </div>
      </div>
    `;
  }
  domString += `
        </div>
      </div>
    </div>
  `;
  utils.printToDom('#river', domString);
}

const printRiver = () => {
  let domString = `
    <div class="river-header container">
      <h2>Brooks River</h2>
    </div>
    <div class="container empty-river">
      <i class="far fa-frown"></i>
      <h4>No Bears yet...</h4>
    </div>
  `;
  utils.printToDom('#river', domString);
}

export default { printBears, printRiver };
