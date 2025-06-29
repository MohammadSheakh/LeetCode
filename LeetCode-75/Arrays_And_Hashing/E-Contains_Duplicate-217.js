// FileName : LeetCode-75/.js
// https://neetcode.io/solutions/contains-duplicate 
/**
  * @NEW_TOPIC <!-- contains duplicate -->
  |
  | ->  if duplicate exist in array, return true
  | if no duplicate exist in array, return false
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. 
  | 2. brute force solution
        since we have to check for every number .. 
        time complexity is O(n^2) 
        space complexity is O(1) // as we dont need any extra memory 
  
  | 3. better solution
        sorting 
        | as duplicate will be next to each other
        | so we can just check if current number is equal to next number
        | so we just need to iterate through the array once 
        time complexity o(n log n)
        space complexity O(1) // as we dont need any extra memory
  
   | 4. hashset .. 
  | 5.  o(n) time complexity
  | 6.  // we need extra memory for hashset
  | 7. 
  | 
 */
   
  /* @Solution <!--    -->
      create a hashset 
      iterate through the array
      if current number is already in hashset
            // that means we have a duplicate
            return true
      else
          // we dont have a duplicate
        add current number to hashset
      return false 
   * ********* */

  /**
      * @Next <!--    -->
      |
      | ->> 
      | 
      +----------
      | Ex: 
     */
  