// FileName : AllInOne/3-reverse/reverseInteger.js

/**
  * @NEW_TOPIC <!-- 5.1 Sentence Capitalization    -->
  |
  | ->
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. Make the string lowercase (toLowerCase)
  | 2. convert the string to array (split)
  | 3. capitalize each word (map)
  | 4. convert array back to string (join) 
 */

const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(capitalize("hello world")); // output: Hello World

/**
  * @Next <!-- FizzBuzz   -->
  |
  | ->> 
  |
 */
