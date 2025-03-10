// FileName : LeetCode-75/Max_Number_of_K_Sum_Pairs-1679.js
// Array Hash Table Two Pointers Sorting

/**
  * @NEW_TOPIC <!-- //> Max_Number_of_K_Sum_Pairs-1679 -->
  |
  | -> You are given an integer array nums and an integer k.
  | In one operation, you can pick two numbers from the array whose sum equals k and remove them from
  | the array. Return the maximum number of operations you can perform on the array.
 */

/**
  * @Steps <!--    -->
  |
  |--> 1.   Starting with nums = [1,2,3,4]:
  | - Remove numbers 1 and 4, then nums = [2,3]
  |- Remove numbers 2 and 3, then nums = []
  | There are no more pairs that sum up to 5, hence a total of 2 operations.
 */

  // 🟢 Two Pointers Solution 
  function maxOperation(nums, k){
    nums.sort((a, b) => a - b); // 🔖
    let left = 0, right = nums.length - 1;
    let count = 0;

    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === k){
            count++; // Valid pair found
            left++;
            right--; // Remove both numbers
        } else if(sum < k){
            left++;  // Increase sum
        } else {
            right--; // Decrease sum
        }
    }
    return count; 
  }

  // console.log(maxOperation([1,2,3,4], 5)); // Output: 2

  // 🟢 Hash Table Solution  // 🔴 cant understand
  function maxOperation_HashTable(nums, k){
    let freeqMap = {}; // Hash Table to store frequency
    let count = 0; // to track how many pair found .. 
    for(let num of nums){
        const complement = k - num;
        // console.log("complement: ", complement);
        if(freeqMap[complement] > 0){
            // which means we found a pair
            // console.log("freeqMap[complement]: ", freeqMap[complement]);
            count++;
            freeqMap[complement]--; // 🔴 cant understand .. // Decrease frequency of complement  
            // console.log("freeqMap[complement]: ", freeqMap[complement]);
            console.log("freeqMap: -- ", freeqMap);
        }else{
            freeqMap[num] = (freeqMap[num] || 0) + 1; // Increase frequency of current number
            console.log("freeqMap: ", freeqMap);
        }
    }
    return count ; 
  }

  console.log(maxOperation_HashTable([1,2,3,4], 5));

  /**
  * @Steps <!-- --> Discussion -->
  |
  |--> Which is Better?
  | Hash Table: If the array is unsorted, the hash table approach is better because it runs in O(n) time complexity, and there's no need for
  | sorting. Two-pointer: If the array is already sorted or if sorting isn't a significant overhead, the two-pointer approach could be 
  | preferred. It uses O(1) extra space, but the time complexity becomes O(n log n) due to sorting.
  | So, for unsorted arrays, the Hash Table approach is better because it runs faster in linear time. However, if sorting the array is
  | trivial or if you have sorted input, the Two-pointer approach may be more memory efficient.
 */

  /**
      * @Next <!--    -->
      |
      | ->> 
      | 
      +----------
      | Ex: 
     */