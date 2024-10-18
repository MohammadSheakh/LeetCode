var mergeAlternately = function (word1, word2) {
  let mergedWord = "";
  let i = 0;
  let len1 = word1.length,
    len2 = word2.length;

  // Iterate through both words and add characters alternately
  while (i < len1 || i < len2) {
    if (i < len1) mergedWord += word1[i];
    if (i < len2) mergedWord += word2[i];
    i++;
  }

  return mergedWord;
};

console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
