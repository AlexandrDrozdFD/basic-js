const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  arrValues: [],
	
  getLength() {
    return this.arrValues.length;
  },
  addLink(value = '') {
    this.arrValues.push(value);
    return this;
  },
  removeLink(i) {
    if (!i || i < 1 || i > this.getLength()) {
      this.arrValues = []; 
      throw new Error();
    } 
    this.arrValues.splice(--i, 1);
    return this;
  },
  reverseChain() {
    this.arrValues.reverse();
    return this;
  },
  finishChain() {
    const toString = this.arrValues.map((value) => `( ${value} )`).join("~~");
    this.arrValues = [];
    return toString;
  }
};

module.exports = chainMaker;
