class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  /**
  * @NEW_TOPIC <!--  Push  -->
  |
  | -> 1.  create new node 
  | 2. take pointer of last element .. point that to newly created one
  | 3. point, newly created node to last element 
  | 4. point tail to newly created node
 */

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // if there is no head, then this is the first node
      // if linked list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }

  /**
  * @NEW_TOPIC <!--  Pop  -->
  |
  | -> 1.  point temp variable to last element 
  | 2. move tail to last element's previous element
  | 3. break the connection of last element
  | 4. make sure last element's next is null
 */

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      // jodi ekta element thake
      this.head = null;
      this.tail = null;
    }

    let temp = this.tail;
    this.tail = this.tail.prev;

    // break out the chain
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  /**
  * @NEW_TOPIC <!--  Unshift  -->
  |
  | -> Add new node at the beginning of the list
  | 1. create a new node 
  | 2. take pointer of newly created one to next node and vice versa
  | 3. point head to newly created node
 */
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head; // point to the next node
    this.head.prev = newNode; // point to the previous node

    this.head = newNode;
    this.length++;
    return this;
  }

  /**
  * @NEW_TOPIC <!--  Shift  -->
  |
  | -> point head to next element
  | 1. remove pointer in both side / vice versa
  | 2. Remove 1st element of the linked list
  | 3. set null to head's previous
 */
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    let temp = this.head;
    // point head to next element
    this.head = this.head.next;
    // remove pointer in both side
    this.head.prev = null;
    temp.next = null;

    this.length--;
    return temp;
  }
}
