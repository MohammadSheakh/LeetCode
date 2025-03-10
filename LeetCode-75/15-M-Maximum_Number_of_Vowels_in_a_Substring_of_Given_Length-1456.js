// FileName : LeetCode-75/15-M-Maximum_Number_of_Vowels_in_a_Substring_of_Given_Length-1456.js

/**
  * @NEW_TOPIC <!-- //> Maximum_Number_of_Vowels_in_a_Substring_of_Given_Length -->
  |
  | -> Given a string s and an integer k, return the maximum number of vowel letters in any substring of s 
  | with length k.
  | Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

  | Example 1:

  | Input: s = "abciiidef", k = 3
  |  Output: 3
  |  Explanation: The substring "iii" contains 3 vowel letters.
 */

/**
  * @Steps <!--    -->
  |
  |--> 1. 
  | 2. 
  | 3. 
  | 4. 
  | 5.  
  | 6. 
  | 7. 
  | 
 */

  function maxVowels(s, k) {
    const vowels = new Set('aeiou');  // A set to easily check if a character is a vowel
    let currentVowelCount = 0;
    let maxVowelCount = 0;
    
    // First, count the vowels in the first window of size 'k'
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowelCount++;
        }
    }
    
    maxVowelCount = currentVowelCount;  // Initialize maxVowelCount with the first window's vowel count
    
    // Now, slide the window across the string
    for (let i = k; i < s.length; i++) {
        // Remove the character that's sliding out of the window
        if (vowels.has(s[i - k])) {
            currentVowelCount--;
        }
        
        // Add the character that's sliding into the window
        if (vowels.has(s[i])) {
            currentVowelCount++;
        }
        
        // Update the maximum vowel count
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
    }
    
    return maxVowelCount;
}

// Example 1
console.log(maxVowels("abciiidef", 3));  // Output: 3

  
  /**
      * @Next <!--    -->
      |
      | ->> 
      | 
      +----------
      | Ex: 
     */
  