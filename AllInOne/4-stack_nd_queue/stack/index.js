// LIFO (Last In, First Out)
class Node {
  constructor(value) {
    this.value = value; // Holds the actual data or value of the node
    this.next = null; // Points to the next node in the stack.
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode; // Set this node as the first (top) of the stack.
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      // if no item in stack , then new node become the first / top node
      this.top = newNode;
    } else {
      // if item found ..
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
