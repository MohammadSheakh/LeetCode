function reverseString(str) {
  // create empty stack..
  const stack = [];
  // iterate over that string and push each character to stack
  for (let char of str) {
    stack.push(char);
  }

  // to store reversed String
  let reversedStr = "";
  // pop each char to build that reverse str
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  console.log(reverseString);
  return reversedStr;
}

const reversedString = reverseString("hello world");
console.log(reversedString); // output : dlrow olleh
