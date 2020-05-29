import utils from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js';
import river from '../components/river.js'; // maybe?


const newBearClickEvent = (e) => {
  e.preventDefault();
  bearData.addBear();
  river.printBears();
}

const printForm = () => {
  const domString = `
    <div class="container bear-form">
      <h2>Track a New Bear!</h2>
      <form>
        <div class="d-flex justify-content-center">
          <div class="row">
            <div class="form-group col">
              <input type="text" class="form-control" placeholder="Bear's Name" id="bear-name">
            </div>
            <div class="form-group col">
            <input type="text" class="form-control" placeholder="Image URL" id="bear-image">
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" id="submit-bear">Submit</button>
      </form>
    </div>
  `;
  utils.printToDom('#bear-form', domString);
  document.querySelector('#submit-bear').addEventListener('click', newBearClickEvent);
};

export default { printForm };
