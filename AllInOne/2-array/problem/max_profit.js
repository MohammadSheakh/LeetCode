// FileName : AllInOne/2-array/problem/fizzBuzz.js

/**
  * @NEW_TOPIC <!-- FizzBuzz    -->
  |
  | -> imaging you are buying and selling stocks throughout the year. your job is to find 
  | the maximum profit you can make by buying low and selling high only once.
  |
  | heres what you're given 
  | => a list of stock prices for each day [7, 1, 5, 3, 6, 4]
  | 
  | here's what you need to find :
  | -> the difference between the cheapest price you could have bough the stock and the most 
  | expensive price you could have sold it later on . 
 */

/**
  * @Steps <!--    -->
  |
  |-->
  | 
 */

const maxProfit = (prices) => {
  let minPrice = prices[0]; // assume the first day is the cheapest to buy
  let maxProfit = 0; // assume the profit is 0 // karon amra ekhono sell kori nai ..
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    //update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    const maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("maximum profit", profit);

/**
    * @Next <!--  Array Chunk  -->
    |
    | ->> Write a function that takes an array and chunk size as input.
    | the function should return a new array where the original array is split into chunks of the specified 
    | size. 
    |
   */
