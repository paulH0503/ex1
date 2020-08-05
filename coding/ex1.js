class Stack {
  constructor() {
      this.array = [];
  }

  pop() {
      return this.array.pop();
  }

  push(value) {
      this.array.push(value);
      return this.array.length;
  }
}

class Symmetry {

  constructor(chain) {
    if (typeof chain === 'string') {
      this.stack = new Stack();
      this.chain = chain;
      this.pushToStack();
    } else {
      throw new Error("Input must be string");
    }
  }

  pushToStack() {
    // push to stack
    for (var i = 0, length = this.chain.length; i < length; i++) {
        this.stack.push(this.chain[i]);  
    }
  }

  // method
  get isSymmetry() {
    let dataFromStack = '';
    let continuePopFromStack = true;

    // pop data from stack
    while(continuePopFromStack) {
        const v = this.stack.pop();
        if (typeof v !== 'undefined') {
            dataFromStack += v;
        } else {
            continuePopFromStack = false;
        }
    }
    return dataFromStack === this.chain ? true : false;
  }
}

module.exports = Symmetry;
