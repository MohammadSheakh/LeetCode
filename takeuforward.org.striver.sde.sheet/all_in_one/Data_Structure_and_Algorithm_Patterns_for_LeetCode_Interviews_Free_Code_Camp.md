[^goToTop]
[Video Link](https://www.youtube.com/watch?v=Z_c4byLrNBU&t=2262s)

>  

[^@1] 
[^@1]:Array➡️

####  Array 
 ➡️

##### 

```
Give constant time access by index .
arr[4] = 'K' // O(1) time 

arrays like rows of house next to each other ..
we know exactly how far to walk to go to house number 5  

arrays are break down is when you try to insert or delete from the
middle  

 Access by index: O(1)
 Append in the end : O(1)
 insert / delete middle or front : O(n) // expensive

```
>when we should use Arrays
+ Traverse a structure in order
+ access specific indices
+ compare elements form both end
+ **sliding window**, **prefix sum** etc



---

[^@2] 
[^@2]:String➡️
####  String 
 ➡️

##### 

```
arrays of characters
string are immutable
if you slightly modify a string ..
you are not modify the original
you are creating a entirely new one under the hood  
```
> Common Beginner Mistake

~~~ts
let result = ""
for char in chars : 
    result += char
~~~
```
it looks clean . but it creates new string 
in every iteration .. this can lead to
O(n2) time complexity

```


> Solution
```

building list of characters and joining them
in the end  

```


~~~ts
let result = []
for char in chars : 
    result.append(char)

return "".join(result)
~~~

> that gives you O(n) 

> Interview 
> + find the longest substring without repeating characters
> + check if two strings are anagrams
> + return all the substring that match a pattern

> most of these are actually hidden as **sliding window problem** pattern.. **two pointer** 

```
its never about brute force character checking..
they are about smart windowing, fast lookups, and efficient traversal
```
---

[^@3] 
[^@3]:Sets➡️

####  Sets 
 ➡️

##### 

```
its one of the most useful for time efficiency.
A set is just a collection of unique values.
No duplicates, No particular order.. 

we check check if a number exist or not in a set.
we can check in constant time on average 

which is much faster than looping through the entire list 

```
> When we should use sets ..  
>- [x] uniqueness .. like checking for duplicates .. 
>- [x] existence .. like have i seen this before 
>- [x] fast membership checks .. saying is this value in the current group 
>- [x] Sliding window .. you wanna make sure all element in the window are unique


```

```


---

[^@4] 
[^@4]:Big O Notation➡️

####  Big O Notation
 ➡️

##### 


```
how program excale with input sizes.. 
nested loop O(n^2)
binary search O log n

Fastest one .. O(1) .. constant time .. -> in this matter it does not matter 
how big the input is .. the time complexity never change .. 

Next fastest ... O log n .. divide problem in half each time . 

O(n) linear time .. loops .. travarsing through list .. 

O (n log n )  related to  sorting .. default sorting ..

O(n2) nested loops ..  not viable solution .. 

```

> Basic Rule of Thumb ..   
>- [x] For input size up to 10^4 -> O(n^2) 

>- [x] For input size up to 10^5 -> O(n log n) 



---

[^@5] 
[^@5]:Hash Maps➡️

####  Hash Maps
 ➡️

##### 


```
key value pair system ... 
lookup and insertion .. O(1)
```
> Hashable   
>- [x] Numbers 
>- [x] Strings
>- [x] Tuples
>- [ ] Lists // because list is mutable
>- [ ] Dictionaries // because dictionary is mutable

```
Finding a value that already exist..
 
No Hash Map = O(n)
Hash Map = O(1)

```

> By Using Hashmap .. we actually do 3 things ..    
>- [x] Storing Something 
>- [x] Looking something Up
>- [x] Updating / initializing more values as you go 
 

```ts

/************
 * 
 * Frequency Map
 * 
 * **********/

my_map = {}

for item in data:
    if item not in my_map:
        my_map[item] = 1 
    else:
        my_map[item] +=1

``` 

> Underling logic ..   
>- [x] You storing something under a key .. either retriving it or updating it 
later


> We use map in 
>- [x] String Problem
>- [x] array
>- [x] recursion
>- [x] dynamic problem
>- [x] graph travarsal

```ts

function twoSum(arr, target) {
    // Create a hash map to store numbers and their indices
    const numToIndex = new Map();

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;

        // Check if the complement exists in the hash map
        if (numToIndex.has(complement)) {
            // If found, return the indices of the complement and the current number
            return [numToIndex.get(complement), i];
        }

        // Store the current number and its index in the hash map
        numToIndex.set(num, i);
    }

    // If no solution is found, return an empty array
    return [];
}

// Example usage:
const arr = [2, 7, 11, 15];
const target = 9;
const result = twoSum(arr, target);
console.log(result.join(" ")); // Output: "0 1"

```




---

[^@6] 
[^@6]:Two Pointer➡️

####  Two Pointer
 ➡️

##### 


```
we use two indices or pointers .. to move through a structure .. 
helps us avoid nested loop or repeated scanning .. 
1. Same Direction
2.  Opposite Direction ... (problem should be sorted .. )


```
> Hashable   
>- [x] Array
>- [x] String
>- [x] Linked List

> Why Helpful
>- [x] Reduce the number of iterations you need
>- [x] Track a relationship between two places in a structure
>- [x] avoid extra space by not needing Set or Maps

> Common Problem Patterns
>- [x] Palindromes
>- [x] Reversals
>- [x] Merging sorted data
>- [x] "K" sized comparisons

> After Seeing a problem .. which is using bruteforce ( checking all pair or scanning repeatedly ) .. like n^2 loop ...
can we do that in one loop .. from both side or one pass .. 
 

```ts 
function isPalindrome(s) {
    // Initialize two pointers
    let l = 0; // Left pointer
    let r = s.length - 1; // Right pointer

    // Loop until the two pointers meet
    while (l < r) {
        // Move the left pointer to the right until it points to an alphanumeric character
        while (l < r && !isAlphanumeric(s[l])) {
            l++;
        }

        // Move the right pointer to the left until it points to an alphanumeric character
        while (l < r && !isAlphanumeric(s[r])) {
            r--;
        }

        // Compare the characters at the two pointers (ignoring case)
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        // Move both pointers towards the center
        l++;
        r--;
    }

    // If the entire string is checked without mismatches, it's a palindrome
    return true;
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
        // Check for uppercase letters (A-Z)
        (code >= 65 && code <= 90) ||
        // Check for lowercase letters (a-z)
        (code >= 97 && code <= 122) ||
        // Check for digits (0-9)
        (code >= 48 && code <= 57)
    );
}

// Example usage:
const s = "A man, a plan, a canal: Panama";
const result = isPalindrome(s);
console.log(result); // Output: true

```


---

[^@7] 
[^@7]:Sliding Window➡️

####  Sliding Window
 ➡️

##### 


```
in stead of track of just two positions.. you are managing
an entire range of values... this range is what we called 
window . 

in any given moment .. you only interested in what inside
the window .. you dont care anything before or after the 
window .. 

you are looking at the subset of the data .. adjusting the
window as needed .. never revisited the same element twice .. 

```

> Types   
>- [x] Fixed sized window
>- [x] Dynamic window .. window can shrink or expand as needed

+ Fixed sized window 
  + Find the maximum average of any subarray of size k
  + Return the sum of every k-length block
  + Find the subarray of length k with the largest/
    smallest X.

> for these problems window size never changes ..
 you always include exactly k element      





https://www.youtube.com/watch?v=TtPsUq09OZU 


25:18









---

[^@x] 
[^@x]:TopicName➡️
####  TopicName 
 ➡️

##### 

```

```
>- [x] CheckBox to Keep Status
















 


[^goToTop]: goToTop


[Need Emoji](https://dev.to/nikolab/complete-list-of-github-markdown-emoji-markup-5aia)
