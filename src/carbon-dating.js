// jshint esversion:6
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  let k;
  let t;
  if (typeof String(sampleActivity) || /[a-zA-Z]/.test(sampleActivity)) return false;

  k = 0.693 / HALF_LIFE_PERIOD;
  t = parseInt(Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / k));

  return t;

};
