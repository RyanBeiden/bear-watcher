const printToDom = (selector, text) => {
  $(selector).html(text);
}

let id = 0;

const getId = () => {
  id++;
  const convertToString = id.toString();
  return convertToString;
}

const getDate = () => {
  const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
  return timestamp;
}

export default { printToDom, getId, getDate };
