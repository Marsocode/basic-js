// jshint esversion:6
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let letters = [];
  
  members.forEach(el => {
    if (typeof el === 'string') {
      letters.push(el.trim()[0].toUpperCase());
    }
  });
  return letters.sort().join("");
};
