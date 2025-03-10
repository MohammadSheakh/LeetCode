// FileName : LeetCode-75/14-E-Maximum_Average_Subarray-643.js
// 
// 🔴 cant understand

/**
  * @NEW_TOPIC <!-- //> Maximum_Average_Subarray -->
  |
  | -> You are given an integer array nums consisting of n elements, and an integer k.
  |  Find a contiguous subarray whose length is equal to k that has the maximum average value
  | and return this value. Any answer with a calculation error less than 10-5 will be accepted.
    Example 1:
  |  Input: nums = [1,12,-5,-6,50,3], k = 4
  |  Output: 12.75000
  |  Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
    Example 2:

   | Input: nums = [5], k = 1
   | Output: 5.00000
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. Sliding Window Approach
  | 2. 
  | 3. 
  | 4.
  | 5.  
  | 6. 
  | 7. 
  | 
 */

  function findMaxAverage_Sliding_Window_Approach(nums, k) {
    let currentSum = 0;
    
    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    
    let maxSum = currentSum;
    
    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum average with a precision of 5 decimal places
    return (maxSum / k).toFixed(5);
}

// Example 1
console.log(findMaxAverage_Sliding_Window_Approach([1,12,-5,-6,50,3], 4));  // Output: 12.75

// Example 2
console.log(findMaxAverage_Sliding_Window_Approach([5], 1));  // Output: 5.0

  
  /**
      * @Next <!--    -->
      |
      | ->> 
      | 
      +----------
      | Ex: 
     */
  