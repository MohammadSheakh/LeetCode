// [Array]
var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = Math.max(...candies); // Find the max number of candies
  console.log(maxCandies);

  // Iterate over candies array and check if each kid's candies + extraCandies
  // would be greater than or equal to maxCandies
  let x = candies.map((candy) => {
    let total = candy + extraCandies;
    if (total >= maxCandies) {
      // Check if the total is greater or equal to maxCandies
      return true;
    } else {
      return false;
    }
  });

  return x;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // Output: [true, true, true, false, true]
