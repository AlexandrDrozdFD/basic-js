const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.length) {

    const newArr = members.reduce((prevValue, item) => {
      if (typeof(item) === 'string') {
  
        prevValue.push(item.trim().toUpperCase().split('')[0]);
      }
      return prevValue.sort();
    }, []);
  
    return newArr.join('');
  }
  return false;
  // remove line with error and write your code here
};
