// Array , Prefix Sum
// c
var productExceptSelf = function (nums) {
    let n = nums.length;
    const answer = new Array(n).fill(1); //array init with 1

    // calculate the prefix products

    let prefix = 1;

    for (let i = 0; i < n; i++) {
        answer[i] = prefix;

        prefix *= nums[i];
    }

    // calculate the suffix product and update the array
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
        console.log("answer[i] :: ", answer[i]);
    }

    // console.log("length of n :: ", answer);
    return answer;
};

console.log("😀", productExceptSelf([1, 2, 3, 4])); // Output: [24,12,8,6]
