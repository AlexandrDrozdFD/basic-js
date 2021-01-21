const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  
  let resStr;
  separator = separator || '+';
  additionSeparator = additionSeparator || '|';
  addition === null ? addition = 'null' : addition;

  resStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  
  return new Array(repeatTimes).fill(str + resStr).join(separator);
};
  