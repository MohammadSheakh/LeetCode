nums = [2, 7, 11 , 15] target = 9

T : O(n2) .. we have to optimize this 

hash : { 
            value : index
       (9-2) =  7 : 0

}

```ts

var twoSum = function(arr, target){
    const hash = {}
    for(let i = 0 ; i < arr.length ; i++){
        const num = arr[i];
        const complement = target - num;

        if(complement in hash){
            return [hash[complement] , i]
        }

        hash[num] = i
    }
    return null;
}

```



