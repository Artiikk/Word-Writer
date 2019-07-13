const A  = {
  name: 'a',
  number: [2, 7, 11, 13, 15, 16, 17, 18, 19, 20, 24],
};
const B  = {
  name: 'b',
  number: [0, 1, 2, 5, 7, 10, 11, 15, 17, 20, 21, 22],
};
const D  = {
  name: 'd',
  number: [0, 1, 5, 7, 10, 12, 15, 17, 20, 21],
};
const I = {
  name: 'i',
  number: [2, 12, 17, 22]
}
const L  = {
  name: 'l',
  number: [0, 5, 10, 15, 20, 21, 22, 23, 24],
};
const O  = {
  name: 'o',
  number: [1, 2, 3, 5, 9, 10, 14, 15, 19, 21, 22, 23],
};
const P  = {
  name: 'p',
  number: [0, 1, 2, 5, 7, 10, 11, 12, 15, 20],
};
const R  = {
  name: 'r',
  number: [0, 1, 2, 5, 7, 10, 11, 15, 17, 20, 23],
};
const T  = {
  name: 't',
  number: [0, 1, 2, 3, 4, 7, 12, 17, 22],
};
const LETTERS = [
  A,
  B,
  D,
  I,
  L,
  O,
  P,
  R,
  T,
];

const checkboxes = document.getElementsByTagName('input');
const wrapper = document.getElementById('wrapper');
const container = document.querySelector('.container');

container.addEventListener('click', event => {
  let target = event.target;

  if (target.tagName != 'INPUT') return;

  toggleCheckbox(target);

});


let set = new Set();

function toggleCheckbox(element) {
  elementID = Number(element.id);

  // const method = element.checked ? 'add' : 'delete';
  // set[method](elementID);

  if (element.checked) {
    set.add(elementID);
  } else {
    set.delete(elementID);
  }
}

function findArray() {
  const checkedIDs = [...set];

  return LETTERS.find(key =>
    key.number.length === checkedIDs.length &&
    key.number.every(id => checkedIDs.includes(id))
  );
}

function handleSubmitClick() {
  const key = findArray();

  if (key) submitKey(key);
}

function submitKey(key) {
  wrapper.innerHTML += key.name;

  [...checkboxes].forEach(input => {
    input.checked = false;
  });

  set.clear();
}

button1.addEventListener('click', handleSubmitClick);
