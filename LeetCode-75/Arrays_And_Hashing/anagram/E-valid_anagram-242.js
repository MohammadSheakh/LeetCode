// FileName : LeetCode-75/Arrays_And_Hashing/.js
// https://neetcode.io/solutions/valid-anagram 
/**
  * @NEW_TOPIC <!-- valid anagram -->
  |
  | ->  contains the exact same characters
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. brute force (O(nlogn + mlogm)) as we have two string.. 
  |         sort the given strings and check for their equality
  | 
  | 
 */
  
  /* @Solution <!--  Sudo Code  -->
      
   * ********* */

  //********** Brute force .. sorting solution */
  const isAnagram = (s, t) => {
    // if length of both strings are not equal, return false
    if (s.length !== t.length) return false;
    // sort both strings and check for equality

    return s.split('').sort().join('') === t.split('').sort().join('');
  }

  //********** Hashmap solution */
    const isAnagramHashMap = (s, t) => {
        // if length of both strings are not equal, return false
        if (s.length !== t.length) return false;
        // create a hashmap to store the frequency of characters in s
        const charCount = {};     
        // iterate through the first string and count the frequency of each character
        for (let char of s) {
            charCount[char] = (charCount[char] || 0) + 1;
            }
        // iterate through the second string and decrement the frequency of each character
        for (let char of t) {
            if (!charCount[char]) return false; // if character not found or frequency is 0, return false
            charCount[char]--;
        }
        // if all frequencies are 0, return true
        return Object.values(charCount).every(count => count === 0);
    }
    

  /**
      * @Next <!--    -->
      |
      | ->> 
      | 
      +----------
      | Ex: 
     */
  