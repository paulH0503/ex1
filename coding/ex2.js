class Stack {
  constructor() {
      this.array = [];
      this.tail = this.array.length;
  }

  get data() {
    return this.array;
  }

  updateTail() {
    this.tail = this.array.length;
  }

  pop() {
      const v = this.array.pop();
      this.updateTail();
      return v;
  }

  push(value) {
      this.array.push(value);
      this.updateTail();
      return this.array.length;
  }
}

class Symmetry {

  constructor(chain) {
    if (typeof chain === 'string') {
      this.stack = new Stack();
      this.chain = chain;
    } else {
      throw new Error("Input must be string");
    }
  }

  get isSymmetry() {
    let isOddChain = false;
    if (this.chain.length % 2) {
      isOddChain = true;
    }

    for (var i = 0, length = this.chain.length, midIndex = Math.floor(length/2); i < length; i++) {
      if (midIndex === i && isOddChain) continue;
      const character = this.chain[i];
      if (!this.stack.data.length) {
        this.stack.push(character);
      } else {
        if (this.stack.data[this.stack.tail - 1] !== character) {
          this.stack.push(character);
        } else if (i >= midIndex) {
          this.stack.pop();
        }
      }
    }
    return this.stack.data.length === 0 ? true : false;
  } 
}

module.exports = Symmetry;
