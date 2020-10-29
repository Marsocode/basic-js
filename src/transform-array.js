// jshint esversion:6
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  let newArr = [...arr];
  // console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {

     
  }
  newArr.map((item, index, array) => {
    if (item === "--discard-next") {
      array.splice(array[index + 1], 1);
    } else if (item === "--discard-prev") {
      array.splice(array[index - 1], 1);
    } else if (item === "--double-next") {
      arr.splice(array[index + 1], 0, array[index + 1]);
    } else if (item === "--double-prev") {
      arr.splice(array[index - 1], 0, array[index - 1]);
    }

  });

  return arr;
};
