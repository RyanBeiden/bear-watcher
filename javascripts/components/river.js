import bearData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';

const newBears = bearData.getBears();

let counterForCatch = 0;
let counterForAttempt = 0;

const catchEvent = (e) => {
  newBears.forEach(bear => {
    if (bear.id === e.target.id) {
      counterForCatch++;
      bear.catchCount = counterForCatch;
      console.log(newBears);
    }
  });
}

const attemptEvent = (e) => {
  newBears.forEach(bear => {
    if (bear.id === e.target.id) {
      counterForAttempt++;
      bear.attemptCount = counterForAttempt;
      console.log(newBears);
    }
  });
}

const printBears = () => {
  let domString = `
    <div class="river-header container">
      <h2>Brooks River</h2>
    </div>
    <div class="container river-section">
      <div class="d-flex flex-wrap justify-content-center align-items-start">
    `;
  newBears.forEach((bear) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${bear.imageUrl}" alt="photo of a bear named ${bear.name}">
        <div class="card-body">
          <h4 class="card-title">${bear.name}</h4>
        </div>
        <span class="line"></span>
        <div class="d-flex justify-content-center align-items-start mt-2 mb-2">
          <button type="button" id="${bear.id}" class="attempt-button btn btn-primary">Attempt</button>
          <button type="button" id="${bear.id}" class="catch-button btn btn-primary">Caught</button>
        </div>
      </div>
    `;
  });
  domString += `
      </div>
    </div>
  `;
  utils.printToDom('#river', domString);

  $('.catch-button').click(catchEvent);
  $('.attempt-button').click(attemptEvent);
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
