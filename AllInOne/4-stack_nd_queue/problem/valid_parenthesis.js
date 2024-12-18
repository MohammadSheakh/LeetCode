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
    // incomplete
  }
};
