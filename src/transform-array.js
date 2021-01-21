const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  if (!Array.isArray(arr)){
    throw new Error('Not An Array');
  } 
  
  const arrNew = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i != arr.length - 1) {
      i++;
    } else if ((arr[i] === '--discard-prev') && (arrNew.length !== 0) && (arr[i - 2] !== '--discard-next')) {
      arrNew.pop();
    } else if ((arr[i] === '--double-next') && (i < arr.length - 1)) {
      arrNew.push(arr[i + 1]);
    } else if ((arr[i] === '--double-prev') && (i !== 0) && (arr[i - 2] !== '--discard-next')) {
      arrNew.push(arr[i - 1]);
    } else { 
      if ((arr[i] === '--discard-next') || (arr[i] === '--discard-prev') || (arr[i] === '--double-next') || (arr[i] === '--double-prev')) {
        continue;
      }
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
};
