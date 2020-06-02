import utils from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js';

const newBears = bearData.getBears();

const printTableData = () => {
  let domString = `
    <div class="river-header container">
      <h2>Fish Tracker</h2>
    </div>
    <div class="container river-section">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Bear's Name</th>
          <th scope="col">Catch Attempts</th>
          <th scope="col">Fish Caught</th>
        </tr>
      </thead>
      <tbody>
    `;
    newBears.forEach((bear) => {
    domString += `
      <tr>
        <th scope="row">${bear.id}</th>
        <td>${bear.name}</td>
        <td>${bear.attemptCount}</td>
        <td>${bear.catchCount}</td>
      </tr>
    `;
  })
  domString += `
        </tbody>
      </table>
    </div>
  `;
  utils.printToDom('#table', domString);
}

export default { printTableData };
