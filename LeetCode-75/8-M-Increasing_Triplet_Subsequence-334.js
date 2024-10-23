// Array, Greedy
// FileName : LeetCode-75/8-M-Increasing_Triplet_Subsequence-334.js

/*
A simple brute-force solution would be to check
 all combinations of three numbers in the array,
  but this would have a time complexity of O(n^3),
   which is not efficient for large arrays.

Instead, we can optimize the solution using a
 greedy approach with two variables to track the
  smallest and second smallest values as we
   iterate through the array. This will allow us
    to detect if there is a third number larger
     than the second smallest number that forms 
     the triplet. The time complexity of this
      approach is O(n), and the space complexity
       is O(1).
*/
var increasingTriplet = function (nums) {
  // Initialize two variable to track the first and second number
  let first = Infinity;
  let second = Infinity;

  // loop through the array
  for (let num of nums) {
    if (num <= first) {
      // Update the first number (smallest so far)
      first = num;
    } else if (num <= second) {
      // Update the second number (next smallest)
      second = num;
    } else {
      // If we find a number greater than both first and second, return true
      return true;
    }
  }

  // If no such triplet is found, return false
  return false;
};
console.log(
  "increasingTriplet([1, 2, 3, 4]) :: ",
  increasingTriplet([1, 0, 1, 4])
); // Output: true or false ..
