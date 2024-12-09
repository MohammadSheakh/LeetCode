class Node {
  constructor(value) {
    // this is our first node .. and first node is head ..
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  // our own linked list ..
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    // create new node ..
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList);
