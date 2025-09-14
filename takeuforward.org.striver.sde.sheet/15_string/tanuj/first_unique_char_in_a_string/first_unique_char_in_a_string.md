leetcode

HashMap l : 1 // how many times l is being occured ..

```ts

let firstUniqueChar = function(s) {
    // lets create a map to hold the frequency of every char 
    const count  = new Map()

    for (const char of s){
        
        // count.set(key, value)
        count.set(char, (count.get(char) || 0) + 1)
    }

    for(let i = 0; i < s.length; i++){
        if(count.get(s[i]) == 1){
            return i // return the index
        }
        
    }
    // if we do not found any unique char .. then return -1
    return -1
}

```