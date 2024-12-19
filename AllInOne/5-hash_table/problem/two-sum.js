function twoSum(nums, target) {
  // create object to store the number and index

  const numMap = {};

  // iterate over each number of nums array
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // output : [0, 1]
