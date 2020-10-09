const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // formula -> ln(N0/N)/k -> ln(N0/N)/(ln2/t)


  let ageInYear = Math.ceil(Math.log(MODERN_ACTIVITY/(sampleActivity)) / (Math.log(2)/HALF_LIFE_PERIOD));
	
	if (typeof(sampleActivity) === 'string' && !isNaN(sampleActivity) && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15.1) {
		return ageInYear;
	}

	return false;
  // remove line with error and write your code here
};
