import utils from '/javascripts/helpers/utils.js';

const bears = [];

const addBear = () => {
  const validateName = $('#bear-name').val();
  const validateUrl = $('#bear-image').val();
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
      bears.push({
        name: $('#bear-name').val(),
        imageUrl: $('#bear-image').val(),
        id: utils.getId(),
        catchCount: 0,
        attemptCount: 0,
        catchTimestamps: [],
        attemptTimestamps: []
      });
      $('#bear-name').val('');
      $('#bear-image').val('');
  }
}

const getBears = () => {
  return bears;
}

export default { addBear, getBears };
