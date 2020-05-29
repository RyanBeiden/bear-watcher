import utils from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js';
// import river from './river.js'; // maybe?

const newBearClickEvent = (e) => {
  e.preventDefault();
  bearData.addBear();
}

const printForm = () => {
  const domString = `
    <div class="container bear-form">
      <h2>Track a New Bear!</h2>
      <form>
        <div class="d-flex justify-content-center">
          <div class="row">
            <div class="form-group col">
              <input type="text" class="form-control" placeholder="Bear's Name">
            </div>
            <div class="form-group col">
              <input type="file" class="form-control-file" id="exampleFormControlFile1">
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
