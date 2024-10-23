// Two Pointer, Array
// FileName : LeetCode-75/10-E-Move_Zeroes-283.js

/* 

Given an integer array nums, move all 
0's to the end of it while maintaining the relative order
of the non-zero elements.

 <-- Note that -->  
you must do this in-place without making a copy of
the array. 

*/

/*
To solve this problem efficiently in-place without making a copy of the
array, we can use a two-pointer approach. One pointer will traverse the 
array, and the other will track the position where the next non-zero
element should go.

 <!-- Approach: -->

    Two pointers:
        One pointer (i) to iterate through the array.
        Another pointer (index) to keep track of the position to place the next non-zero element.
    Iterate over the array:
        Move all non-zero elements to the front of the array while maintaining their relative order.
        After moving all non-zero elements, fill the remaining positions in the array with 0s.
    Constant space:
        We can solve this in-place with only a few extra variables, using constant space.



*/

var Move_Zeroes = function (numbers) {
  return index;
};
console.log("Move_Zeroes([0,1,0,3,12]) :: ", Move_Zeroes([0, 1, 0, 3, 12])); // Output: true or false ..
