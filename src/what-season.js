// jshint esversion:6
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    date.getTime();
	} catch(e) { 
    throw new Error(e); 
  }
  
  let month = date.getMonth();
	const season = {
    	winter: {0: "January", 1: "February", 11: "December"},
    	spring: {2: "March", 3: "April", 4: "May"},
    	summer: {5: "June", 6: "July", 7: "August"},
    	autumn: {8: "September", 9: "October", 10: "November"}
  	};

	for (const [key, value] of Object.entries(season)) {
		for (const item in value) {
			if (item == month) {
        return key;
			}
		}
	}
};
