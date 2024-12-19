const text = "Hello World World";
// output should be { Hello: 1, World: 2 }

function wordInstanceCounter(text) {
  // convert text to lowercase
  const lowerText = text.toLowerCase();
  // create hash table to store count

  const wordMap = {};

  const words = lowerText.split(/\s+/);
  console.log(words);

  // iterate over each word
  for (const word of words) {
    if (word in wordMap) {
      wordMap[word] += 1;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

const result = wordInstanceCounter(text);

console.log(result);
