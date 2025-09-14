we just need to check if it is formed by taking a substring of it ..
and true or false ..

////// 
optimal solution :: double the string 
----------------- remove first and last character .. and see ..
if the string exist in that string .. 

```ts

const repeatedSubStringPattern = function(s) {
    const double = s + s;
    const sliced = doubled.slice(1, doubled.length - 1);

    return sliced.includes(s)
}

```
