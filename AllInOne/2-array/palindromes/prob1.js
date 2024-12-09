// FileName : AllInOne/4-palindromes/prob1.js

/**
    * @NEW_TOPIC <!-- Palindromes   -->
    |
    |--> If the reversed string is equal to the original one .. 
    | then that word is a palindrome. 
    | ->> cddc -> cddc ✅
    | ->> abba -> abba ✅
    | ->> Hello -> olleH ❌ 
    |
   */

/**
  * @Steps <!--    -->
  |
  |--> 1. create function that take a string as args 
  | 2. convert string to array (split method)
  | 2. reverse the array  (reverse method)
  | 4. convert array back to string (join method)
  | 5. compare the reversed string with the original one
  |
 */

const palindrome = (str) => str.split("").reverse().join("") === str;

console.log(palindrome("cddc")); // output: true

/**
    * @Next <!--  Reverse Integer  -->
    |
    |--> 
    |
   */
