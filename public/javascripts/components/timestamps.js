import utils from '../helpers/utils.js';

const viewTimestamps = (bear) => {
  let domString = `
    <div id="time" class="river-header container">
      <h2>Timestamps</h2>
    </div>
    <div class="container river-section">
      <h4 class="ts-bear">${bear.name}</h4>
      <div class="row d-flex justify-content-center">
        <div class="col">
          <h5 class="ts-title">Catch Attempts</h5>
  `;
  for (let i = 0; i < bear.attemptTimestamps.length; i++) {
    domString += `
      <p style="color: #FFFFFF;">${bear.attemptTimestamps[i]}</p>
    `;
  };
  domString += `
    </div>
    <div class="col">
      <h5 class="ts-title">Fish Caught</h5>
  `;
  for (let i = 0; i < bear.catchTimestamps.length; i++) {
    domString += `
      <p style="color: #FFFFFF;">${bear.catchTimestamps[i]}</p>
    `;
  };
  domString += `
      </div>
    </div>
  </div>
  `;
  utils.printToDom('#timestamps', domString);
}

export default { viewTimestamps };
