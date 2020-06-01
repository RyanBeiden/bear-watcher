import utils from '../helpers/utils.js';

const printTableData = (bearIndex) => {
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
          <th scope="col">Attempts</th>
          <th scope="col">Fish Caught</th>
        </tr>
      </thead>
      <tbody>
    `;
    bearIndex.forEach((bear) => {
    domString += `
      <tr>
        <th scope="row">${bear.id}</th>
        <td>${bear.name}</td>
        <td>${bear.attempts}</td>
        <td>${bear.catches}</td>
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
