// FileName : AllInOne/2-array/problem/fizzBuzz.js

/**
  * @NEW_TOPIC <!-- Array Chunk    -->
  |
  | -> Write a function that takes an array and chunk size as input.
  | the function should return a new array where the original array is split into chunks of the specified 
  | size. 
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. create an empty array to hold the chunks 
  | 2. set a starting index to keep track of where we are in the original array 
  | 3. loop through the original array as long as the index has not reached the end 
  | 4. extract a chunk of the desired size from the original array 
  | 5. add the extracted chunk to the `chunked` array 
  | 6. move the index forward by the chunk size to get to the next chunk 
  | 7. return the final array of chunks
  | 
 */
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    // chunked.push(array.slice(index, index + size));
    // index += size;

    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
/**
    * @Next <!--  Two Sum  -->
    |
    | ->> Imaging you have a list of numbers and a target number. your job is to find two number 
    | in the list that add up to the target number. you also need to tell which positions or indexes
    | those two numbers are at in the list . 
    | 
    +----------
    | Ex: if the list is [2, 7, 11, 15] and the target number is 9, the answer should be [0, 1]
    | because 2 + 7 = 9
   */
