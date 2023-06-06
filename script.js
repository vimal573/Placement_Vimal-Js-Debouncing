// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and get Data
  console.log('fetching data..', counter++);
};

const debouncing = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => getData.apply(context, args), d);
  };
};

const debouncedSearch = debouncing(getData, 300);
