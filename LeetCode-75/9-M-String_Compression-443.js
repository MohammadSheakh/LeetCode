// Two Pointer, String
// FileName : LeetCode-75/9-M-String_Compression-443.js

// 🔴 eta pore abar check dite hobe

var String_Compression = function (chars) {
  let index = 0; // pointer to modify the array
  for (let i = 0; i < chars.length; ) {
    let char = chars[i]; // current character
    let count = 0; // count of the current character
    while (i < chars.length && chars[i] == char) {
      // jotobar amra current character er shathe match pabo .. totobar
      // count barabo ..
      i++;
      count++;
    }
    // Write the character to the array
    chars[index++] = char;
    // If the character repeats, write the count
    if (count > 1) {
      const countStr = count.toString();
      for (let c of countStr) {
        chars[index++] = c;
      }
    }
  }
  return index;
};
console.log(
  'String_Compression(["a","a","b","b","c","c","c"]) :: ',
  String_Compression(["a", "a", "b", "b", "c", "c", "c"])
); // Output: true or false ..
