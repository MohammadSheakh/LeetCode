function twoSum(nums, target) {
  // create object to store the number and index

  const numMap = {};

  // iterate over each number of nums array
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliment in numMap && numMap[compliment] !== i) {
      // return the solution
      return [numMap[compliment], i];
    }
    // if we dont find the solution, we update the hash map
    numMap[nums[i]] = i;
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // output : [0, 1]


// FileName : LeetCode-75/.js
// Neetcode Link : 
/**
  * @NEW_TOPIC <!--  -->
  |
  | ->  
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. In our hashmap, we are gonna be mapping the value to the index
  | 
  | 
 */
  
  /* @Solution <!--  Sudo Code  -->
      
   * ********* */

  /**
      * @Next <!--    -->
      |
      | ->> 
      | 
      +----------
      | Ex: 
     */
  