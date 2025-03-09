// Two Pointer, String, Dynamic Programming
// FileName : LeetCode-75/11-E-Is_Subsequence-392.js

/* 
  <!-- Question --> 

*/

/*
  <!-- Approach --> 

*/

var Is_Subsequence = function (s, t) {
  let i = 0; // Pointer for string s
  let j = 0; // Pointer for string t
};
console.log("Move_Zeroes([0,1,0,3,12]) :: ", Is_Subsequence("Mo", "omue")); // Output: true or false ..
// Move_Zeroes([0,1,0,3,12]) ::  [ 1, 3, 12, 0, 0 ]

/*
 <!-- Solution From Online -->

 bool isSubsequence(string s, string t) {
        int i=0,j=0;
        int n = s.size();
        int m = t.size();
        while(i<n && j<m){
            if(s[i] == t[j]){
                i++,j++;
            }else{
                j++;
            }
        }

        if(i==n) return true;
        return false;

    }
*/