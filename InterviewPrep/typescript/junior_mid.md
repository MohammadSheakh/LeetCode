> 

---
#### 1. What is a generic function in Typescript .. write one


```ts

// generic functions 

/*******
 * type flexible .. without write any 
 * ***/
function myNewFunction<T,U,K> (one:T) {
    return "string" as T
}

const result = myNewFunction<string> ("string");


```

---
#### 1. What is "As Const" in Ts .. Difference between const vs As Const 

```ts
/******
 * Write object that slealed in a way that .. you can not modify any part of the object 
 * ******/
const config = {
    host: "",
    port: ""
}
// even if this is constant .. but someone can modify this ...
config.host = "whatever" // this is a problem 


const config2 = {
    host: "",
    port: ""
    auth : {
        client: "",
    }
} as const ;  // every nested property will also be immutable 

/******
 * Object.freeze  
 * --------------
 * this is only build time ..
 * 
 * Object.freeze   only evaluate in the run time 
 * 
 *  it only works with the first level 
 * 
 * *****/

```


---
#### 1. What does the Private access modifier do when added to a class variable / method ? 

```ts
/******
 * 
 *
 * 
 ****/ 

class Service {
    private config: string; // as this is private .. we can not access this from outside

    // let us instantiate this
    constructor() {
        this.config = "test"
    }
}

const newService = new Service()
newService.config = //** this will give us error .. as private 

Interface Segregation of SOLID principle 

```


---
#### 1. What is decorator in Typescript and provide usecase

```ts
reuse code
wrap certain function or class with some functionality


```

#### Solid Principle


---
#### 1. What is the difference between TYPE and INTERFACE in Typescript

```ts

Interface can be extended

we use type to define domain entity

type of function parameter .. we can use Interface

```

---
#### 1. What is a TYPE GUARD in TS .. When would you use it  ["Type"]


---
#### 1. How is Structural TYPING different from Nominal Typing .. which one does typescript really implements

```ts

Typescript basically implementing structural typing .. which means .. if two objects have the 
same property then they are the same thing from  for typescript 

```


