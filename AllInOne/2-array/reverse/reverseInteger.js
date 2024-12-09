// FileName : AllInOne/3-reverse/reverseInteger.js

/**
  * @NEW_TOPIC <!-- Reverse Integer    -->
  |
  |--> 1234 -> 4321 
  | 5678 -> 8765
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. create function that take a number as args 
  | 2. convert number to string (toString method)
  | 3. convert string to array (split method)
  | 4. reverse the array  (reverse method)
  | 5. convert array back to string (join method)
  | 6. convert string to number (parseInt method)
  | 7. return the number
  |
 */

const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  console.log(Math.sign(n)); // print the sign of input number // output: -1
  return parseInt(reversed) * Math.sign(n); // keeping the sign (positive or negative) intact
};

console.log(reverseInt(-1234)); // output : 4321

/**
  * @Next <!-- 5.1 Sentence Capitalization   -->
  |
  | ->> hello world -> Hello World
  |
 */
