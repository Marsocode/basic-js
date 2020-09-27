//jshint esversion:6
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  // throw new CustomError('Not implemented');
  let count = 0;
  if (arr === []) return 0;
  arr.forEach(element => {  
    element.forEach(item => {
      if (item === "^^") {
        count++;
      }
    });
  });
  return count;
};
