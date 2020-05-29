import utils from '/javascripts/helpers/utils.js';
import river from '/javascripts/components/river.js'; // maybe?

const bears = [];

const addBear = () => {
  const validateName = document.getElementById('bear-name').value;
  const validateUrl = document.getElementById('bear-image').value;
  if (validateName === '' || validateUrl === '') {
    let domString = `
    <div class="alert alert-danger alert-dismissible fade show mt-4 mr-5 ml-5" role="alert">
      <strong>Wait!</strong> You should try typing a name, it can't be blank!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    `;
  return utils.printToDom ('#noFieldAlert', domString);
  } else {
      const nameValue = document.getElementById('bear-name').value;
      const imageValue = document.getElementById('bear-image').value;
      bears.push({
        name: nameValue,
        imageUrl: imageValue
      });
      document.getElementById('bear-name').value = '';
      document.getElementById('bear-image').value = '';
  }
  return river.printBears();
}

const getBears = () => {
  return bears;
}

export default { addBear, getBears };
