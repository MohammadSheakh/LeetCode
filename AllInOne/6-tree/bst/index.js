/**
  * @NEW_TOPIC <!--  Binary Search Tree  -->
  |
  | -> organize data in a sorted way ..
 */

/**
  * @DESC <!--    -->
  |
  | ->  go left if your value is smaller than the current branch. 
  | go right if your value is bigger. 
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // if root is empty
    if (this.root === null) {
      this.root = newNode;
      return this; // so that we can see, what we did ..
    }
    // if root is not empty
    // we have to make our pointer to point our root
    let temp = this.root;
    while (true) {
      // we dont know how many node we have to insert
      if (newNode.value === temp.value) {
        return undefined; // if we have same value
      }
      if (newNode.value < temp.value) {
        // go left
        // also we have to check that place is empty or not
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  /**
  * @NEW_TOPIC <!--   -->
  |
  | -> Search for specific node in entire tree ..
 */

  includes(value) {
    if (!this.root) {
      return false; // we can not search for anything
    }
    let temp = this.root; // here root if first node
    while (temp) {
      if (value < temp.value) {
        temp = temp.left; // temp is now pointing to that left node of root
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }
}

/**
  * @Steps <!--  Binary Search Tree  -->
  |
  | -> 
 */

/**
  * @Next <!--  Binary Search Tree  -->
  |
  | -> 
 */
