prices : [7, 1, 5, 3, 6, 4]
             -        -
profit is 5

min_price = 7
max_profit = 0

```ts

const maxProfit = function(prices){
    let maxProfit = 0;
    let minPrice = prices[0];

    for(let i = 1; i< prices.length ; i++){
        if(prices[i] <  minPrice){
            minPrice = prices[i];
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }
    return maxProfit
}


```


