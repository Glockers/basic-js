const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  container: [],
  getLength() {
    return this.container.length
  },
  addLink(value) {
    !arguments ? this.push("") : this.container.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position < this.getLength()) {
      this.container.splice(position - 1, 1);
    } else {
      this.container = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.container.reverse()
    return this
    // remove line with error and write your code here
  },
  finishChain() {
    const newContainer = this.container.slice()
    this.container = [];
    return newContainer.join("~~")
  }
};

module.exports = {
  chainMaker
};
