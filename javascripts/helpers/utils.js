const printToDom = (selector, text) => {
  $(selector).html(text);
}

let id = 0;

const getId = () => {
  id++;
  return id;
}

const getDate = () => {
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

export default { printToDom, getId, getDate };
