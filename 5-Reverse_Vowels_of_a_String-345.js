//  [Two Pointer , String ]

var reverseVowels = function (s) {
  console.log("=============================================");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; //"aeiouAEIOU"
  let sArr = s.split("");
  console.log("sArr", sArr);

  // collect all vowels from the string
  let vowelList = [];
  for (let i = 0; i <= sArr.length; i++) {
    // console.log(sArr[i]);
    if (vowels.includes(sArr[i])) {
      // console.log("vowels", sArr[i]);
      vowelList.push(sArr[i]);
    }
  }

  // now reverse the vowelList and replace them in the original String
  for (let i = 0; i < sArr.length; i++) {
    if (vowels.includes(sArr[i])) {
      // jei index e vowel pai, shei index e vowelList er last element ta replace korbo
      sArr[i] = vowelList.pop();
    }
  }

  console.log("sArr", sArr.join(""));
  return sArr.join("");
};

reverseVowels("sheakh"); // "holle"
