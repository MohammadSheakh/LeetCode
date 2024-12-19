/**
  * @NEW_TOPIC <!--  Valid Parenthesis  -->
  |
  | -> (){}[] // true 
  | ([) // false
  | [ // false   
  */

const isValidParenthesis = (str) => {
  const stack = []; // our own stack
  const brackets = {
    // pattern
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // loop through string
  for (let char of str) {
    // incomplete 3:18:55  https://www.youtube.com/watch?v=wBtPGnVnA9g&t=2062s&ab_channel=HuXnWebDev
  }
};
