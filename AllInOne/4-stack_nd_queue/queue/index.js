// FIFO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  /**
  * @NEW_TOPIC <!--  Enqueue  -->
  |
  | -> 
 */
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      // if no item is in queue;
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  /**
  * @DESC <!--    -->
  |
  | -> Tough
 */

  dequeue() {
    // remove last element from the queue

    // check for empty
    if (this.length === 0) {
      return undefined;
    }

    // for 1 element
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;

    return temp; // return what we just removed.
  }
}
