import bearData from '../helpers/data/bearData.js';
import utils from '../helpers/utils.js';
import timestamps from './timestamps.js';

const newBears = bearData.getBears();

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
        <div class="d-flex justify-content-center align-items-start mt-4 mb-2">
          <button type="button" id="${bear.id}" class="attempt-button btn btn-primary">Catch Attempt</button>
          <button type="button" id="${bear.id}" class="catch-button btn btn-primary">Caught One!</button>
        </div>
        <div class="d-flex justify-content-center align-items-start mt-2 mb-3">
          <h5 class="fish-total">Total Fish Caught: <span class="fish-total">${bear.catchCount}</span></h5>
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
  $('.timestamp-button').click(timestampEvent);
}

const catchEvent = (e) => {
  e.preventDefault();
  newBears.forEach(bear => {
    if (bear.id === e.target.id && bear.catchCount < bear.attemptCount) {
      bear.catchCount += 1;
      bear.catchTimestamps.push(utils.getDate());
      timestamps.viewTimestamps(bear);
      printBears();
    }
  });
}

const attemptEvent = (e) => {
  e.preventDefault();
  newBears.forEach(bear => {
    if (bear.id === e.target.id) {
      bear.attemptCount += 1;
      bear.attemptTimestamps.push(utils.getDate());
      timestamps.viewTimestamps(bear);
    }
  });
}

const timestampEvent = (e) => {
  e.preventDefault();
  newBears.forEach(bear => {
    if (bear.id === e.target.id) {
      timestamps.viewTimestamps(bear);
    }
  });
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
