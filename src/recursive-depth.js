const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr, allDepths = [], currentDepth = 1) {

  	allDepths.push(currentDepth);

  	arr.forEach(item => {
    	if (Array.isArray(item))
    		this.calculateDepth(item, allDepths, currentDepth + 1);
    });

  	return Math.max.apply(Math, allDepths);
  };
};
