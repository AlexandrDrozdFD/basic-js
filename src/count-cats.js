const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
	for (let i = 0; i <= matrix.length - 1; i++) {
		matrix[i].forEach(item => {
			if(item === '^^') {
				count++;
			}
		});
	}
	return count;
};
