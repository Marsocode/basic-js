// jshint esversion:6
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  let newArr = [...arr];
  newArr.map((item, i) => {
    if (item === "--discard-next" ) {
      // if not last item
      if (i !== newArr.length - 1) {
        delete newArr[i+1];
        delete newArr[i];
      } else {
        delete newArr[i];
      }
    } else if (item === "--discard-prev") {
      // if not first item
      if (i > 1) {
        delete newArr[i-1];
        delete newArr[i];
      } else {
        delete newArr[i];
      }
    } else if (item === "--double-next") {
      // if not last item
      if (i !== newArr.length - 1) {
        // change i for i+1
        newArr.splice(i, 1, newArr[i + 1]);
      } else {
        delete newArr[i];
      }
    } else if (item === "--double-prev") {
      if (i > 1) {
        // change i for i-1
        newArr.splice(i, 1, newArr[i - 1]);
      } else {
        delete newArr[i];
      }
    }
  });

  return newArr.filter(value => value !== undefined);
};
