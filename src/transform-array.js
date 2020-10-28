const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const newArr = [];
  if (Array.isArray(arr)) {

      for (let i = 0; i <= arr.length - 1; i++) {
      newArr.push(arr[i]);
       
      }
      for (let j = 0; j <= newArr.length - 1; j++) {
          if (newArr[j] === '--double-next' && newArr[j] === newArr[newArr.length - 1] || newArr[j] === '--discard-next' && newArr[j] === newArr[newArr.length - 1]) {
             newArr.splice(j, 1);
          } else if (newArr[j] === '--double-next') {
              newArr[j] = newArr[j + 1];
          } else if (newArr[j] === '--discard-next') {
            newArr.splice(j, 2);
          } 
          if ((newArr[j] === '--double-prev' && newArr[j] === newArr[0]) || (newArr[j] === '--discard-prev' && newArr[j] === newArr[0])) {
              newArr.splice(j, 1);
          } else if (newArr[j] === '--double-prev') {
              newArr[j] = newArr[j - 1];
          } else if (newArr[j] === '--discard-prev') {
            newArr.splice(j-1, 2);
          } 
      }
  } else {
    throw new Error('There is no array')
  }
  console.log(arr)
  return newArr;

  // remove line with error and write your code here
};
