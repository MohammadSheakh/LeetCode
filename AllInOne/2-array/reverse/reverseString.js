// FileName : AllInOne/3-reverse/reverseString.js

/**
  * @NEW_TOPIC <!-- Reverse String    -->
  |
  |--> Hello -> olleH 
  | Apple -> elppA
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. create function that take a string as args 
  | 2. convert string to array (split method)
  | 2. reverse the array  (reverse method)
  | 4. convert array back to string (join method)
  |
 */

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("Hello")); // output : olleH

/**
  * @Next <!-- 4-Palindromes   -->
  |
  |--> If the reversed string is equal to the original one .. 
  | then that word is a palindrome. 
  | ->> cddc -> cddc ✅
  | ->> abba -> abba ✅
  | ->> Hello -> olleH ❌ 
  |
 */
