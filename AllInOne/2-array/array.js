// FileName : AllInOne/2-array/array.js

const stringArr = ["a", "b", "c", "d", "e"];
const numArr = [1, 2, 3, 4, 5];
const boolArr = [true, false, true, false, true];
const mixedArr = [["s"], "a", undefined, null, { a: "a" }, true, "b", 2];
/**
  * @NEW_TOPIC <!-- Custom Array   -->
  |
  |--> using Class
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    // re indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    // we have to delete last element

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  // delete based on index
  delete(index) {
    const item = this.data[index];
    /// this.shiftItems(index);

    // re indexing
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArray = new MyArray();
myNewArray.push("hi");
console.log("myNewArray : ", myNewArray);

/**
  * @NEW_TOPIC <!-- Custom Shift Method   -->
  |
  |--> 
 */

const itemForShiftMethod = [1, 2, 3, 4, 5];
itemForShiftMethod.shift();

/**
  * @INFO <!--    -->
  |
  |--> Its gonna remove first element .. 
  | re indexing entire array .. 
  |
 */

/**
  * @NEW_TOPIC <!--    -->
  |
  |-->
  |
  +----------- 
  | Ex :
*/

/**
  * @INFO <!--    -->
  |
  |-->
  |
 */
