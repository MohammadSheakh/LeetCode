
#### 1. Give All document of Store A

```ts

db.sales.aggregate([
    {
        $match:{
            store : "A"
        }
    }
])

```

---
#### 2. Give All document of Store A, quantity should be 3

```ts

db.sales.aggregate([
    {
        $match:{
            store : "A",
            quantity : 2
        }
    }
])

```

---
#### 3. Sort all sales by date in descending order ?

```ts

db.sales.aggregate([
    {
        $sort:{
            date : 1 // -1 for descending order
            // price : -1 // highest price will be on the top
        }
    }
])

```


---
#### 4. How can i get the 2 most recent sales

```ts

db.sales.aggregate([
    {
        $sort:{
            date : 1 // -1 for descending order
            // price : -1 // highest price will be on the top
        }
    },
    {
        $limit: 2
    }
])

```

---
#### 5. What is the total quantity sold for each item in the sales collection?

```ts
/***
 * we want to group data based on specific 
 * field value .. 
 * lets say based on item 
 * 
*/
db.sales.aggregate([
    {
        $group:{
            // group them by something 
            _id: "$item"
            // we can give any name
            totalQuantity : {
                $sum: "$quantity"
            }
        }
    }
])

```

---
#### 6. How can i get total quantity sold for each 
#### combination of store and category

```ts
/***
 * store a category fruite
 * store a category vegetable
 * 
 * store b category fruite
 * store b category vegetable
 * 
*/
db.sales.aggregate([
    {
        $group:{
            // group them by something 
            _id: {
                store: "$store",
                category : "$category"
            }
            // we can give any name
            totalQuantity : {
                $sum: "$quantity"
            }
        }
    }
])

```

---
#### 7. How can i get total revenue for all sales

```ts
/***
 * price * quantity  and add all
 * 
*/
db.sales.aggregate([
    {
        $group:{
            // group them by entire collection
            _id: null,
            totalRevenue :{
                $sum :{
                    $multiply: ["$price", "$quantity"]
                }
            }
        }
    }
])

```

---
#### 8. How do I add a field called revenue 
(price * quantity) to each document

```ts
//⌛ 18:03 https://www.youtube.com/watch?v=p934Gm7kj_Q
db.sales.aggregate([
    {
        $addFields:{
            revenue :{
                $multiply: ["$price", "$quantity"]
            }
        }
    }
]) 

```

---
#### 9. How can i find the average quantity sold per store? 

per store .. per something .. we need to use group by
```ts
db.sales.aggregate([
    {
        $group:{
            _id: "$store",
            avgQuantity :{
                $avg:"$quantity"
            }
        }
    }
]) 

```

---
#### 10. How do I filter sales that happened on or after 
#### June 2nd 2024

filter out something -> match  

```ts
db.sales.aggregate([
    {
        $match:{
            date: {
                $gte: ISODate('2024-04-04T00:00:00Z')
            }
        }
    }
    {
        $match:{
            quantity: {
                $gte: 10
            }
        }
    }
]) 

```

---
#### 10. How do I show sales with the customers name included ?


```ts
db.customers.aggregate([
    {
        _id: ObjectId('43434343434')
    }
]) 

db.customers.aggregate([
    {
        $lookup{
            from : "customers",
            localField : "customer_id",
            foreignField : "_id",
            as : "customer"
        },
        {
            $unwind: "$customer",
        },
        {
            $project: {
                item:1,
                store: 1,
                customerName: "$customer.name",
                date: 1
            }
        }
    }
]) 

// 29:22

```