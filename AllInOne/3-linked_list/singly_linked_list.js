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
  // pop -> remove last item from entire list ..
  //-> tail ke last item er ager item e point korte hobe
  //-> delete that last node ..  and last e null assign korte hobe
  pop() {
    if (!this.head) return undefined; // edge case .. if list has no item ..

    let temp = this.head;
    let prev = this.head;

    // searching last item
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    // removing that last item
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // edge case -> if list has only one item ..
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  // unshift -> add item at first of the list ..
  //-> new node create korte hobe
  //-> new node e head assign korte hobe
  unshift(value) {
    // edge case -> if list has no item ..
    /**
     * create new node ..
     * null remove korte hobe ..
     * newly created node e head and tail assign korte hobe ..
     */
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head; // 😥
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    // remove first element
    if (!this.head) return undefined; // edge case -> if list is empty ..

    //1 point the first node/element
    let temp = this.head;
    //2 move the head to next node / element
    this.head = this.head.next;

    //3 remove first element
    temp.next = null;
    this.length--;

    //4 edge case -> if list has only one element
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  getFirst() {
    // return first element
    return this.head;
  }

  getLast() {
    // check if list is empty
    if (!this.head) return null;

    let temp = this.head;
    // we have to declare a temp variable to iterate over the list and to find the
    // last element
    while (temp) {
      if (!temp.next) return temp; // for last element .. we are only getting that last element

      temp = temp.next; // otherwise we have to keep searching ..
    }
  }

  getElementByIndex(index) {
    let counter = 0;
    let temp = this.head; // we are gonna iterate from the first element ..
    while (temp) {
      if (counter === index) {
        return temp; // return first element if index is 0
      }
      temp = temp.next;
      counter++;
    }
    return null; // if index is not found ..
  }

  setValueByIndex(index, value) {
    let temp = this.getElementByIndex(index);
    // .head = value;
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  /**
  * @NEW_TOPIC <!-- Insert anywhere in the list  Method    -->
  |
  | -> 1. create an empty space in that position 
  | 2. create an node or element ..  
  | 3. ...
 */

  insertAnywhere(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    // create new node
    const newNode = new Node(value);

    // use the get method to find the node right before the
    // desired position (index - 1)
    const temp = this.getElementByIndex(index - 1);

    // we have to take the pointer of the newly created node ..
    // and point it to the next node ..
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  /**
  * @NEW_TOPIC <!-- Size Method    -->
  |
  | -> 1.
 */
  size() {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  /**
  * @NEW_TOPIC <!-- Clear Method    -->
  |
  | -> remove every single method from the list .. 
  | -> make it as null 
 */

  clear() {
    this.head = null;

    this.length = 0;
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList);
