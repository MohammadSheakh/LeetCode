[^goToTop]
[Video Link](https://www.youtube.com/watch?v=Z_c4byLrNBU&t=2262s)

>  

[^➡️1]
[^➡️1]:Array
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

[^➡️2]
[^➡️2]:String
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

[^➡️3]
[^➡️3]:Sets
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

```

```



































---

[^➡️x]
[^➡️x]:TopicName
####  TopicName 
 ➡️

##### 

```

```
>- [x] CheckBox to Keep Status
















 


[^goToTop]: goToTop


[Need Emoji](https://dev.to/nikolab/complete-list-of-github-markdown-emoji-markup-5aia)
