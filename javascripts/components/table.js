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
  for (let i = 0; i < bearIndex.length; i++) {
    domString += `
      <tr>
        <th scope="row">${bearIndex[i].id}</th>
        <td>${bearIndex[i].name}</td>
        <td>Display getDate Function here</td>
        <td>Display number of clicks here</td>
      </tr>
    `;
  }
  console.log(bearIndex);
  domString += `
        </tbody>
      </table>
    </div>
  `;
  utils.printToDom('#table', domString);
}

const printTableSection = () => {
  let domString = `
    <div class="river-header container">
      <h2>Fish Tracker</h2>
    </div>
    <div class="container empty-river">
      <i class="far fa-frown"></i>
      <h4>No data yet...</h4>
    </div>
  `;
  utils.printToDom('#table', domString);
}

export default { printTableSection, printTableData };
