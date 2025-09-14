move zeros in the existing array to the end of the array 

nums = [0, 1, 0, 3, 12]
output = [1, 3, 12, 0, 0]


brute force approach is 
create an extra array to store non zero element .. finally 
compare the size of two array .. and find the difference
fill up the array with 0

////////////
optimal approach

```ts

const moveZeros = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length ; j++){
        // j should not be zero ..
        // pointer i and j should not be equal .. 
        if(nums[j] !== 0){
            nums[i] = nums[j];
            if(i !== j) {
                nums[j] = 0 ;
            }
        i++ ;
        }
    }
}

```