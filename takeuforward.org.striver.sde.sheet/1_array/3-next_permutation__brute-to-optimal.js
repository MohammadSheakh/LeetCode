/*************
 Brute Force Approach

 1. generate all permutations in sorted order .. 
 2. linear search that where given permutation is present
 3. return next permutation as answer .. if not present return first permutation
 
 
 1.1 -> how to generate permutations .. [Recursion ] -> see recursion playlist .. lecture 12, 13

 Analysis time complexity :: 
 -------------------------

 if 3 numbers are given then there are 3! = 6 permutations
 n numbers will have n! permutations
 every permutation have n length
 so time complexity will be O(n * n!)


 >> For most optimal solution .. C++ STL next_permutation function
 
 Watch Time : 7:07  https://www.youtube.com/watch?v=JDOXKqF60RQ

 https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/

 
 * ****** */