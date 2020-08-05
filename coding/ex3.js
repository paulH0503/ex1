class Stack { 
  constructor() 
  { 
      this.items = []
  } 
  push(element) 
  { 
  this.items.push(element) 
  }
  pop() 
  {  
      if (this.items.length == 0) 
          return "Underflow"
      return this.items.pop()
  }
  peek() 
  { 
      return this.items[this.items.length - 1]
  }
  isEmpty() 
  { 
      return this.items.length == 0
  } 
} 
stack = new Stack()
test = "1234321"
for (let i =0; i < test.length-1; i++){
if (i < test.length/2) stack.push(test[i])
else {
  if(stack.peek() != test[i]) stack.push(test[i])
  else stack.pop()
}
}
if (stack.isEmpty()) console.log("đối xứng")
else console.log("khong doi xung")