
/**
  * @NEW_TOPIC <!-- Is Js single thread or multi thread -->

    JavaScript is a single-threaded language, meaning it has a single call stack and executes
    code sequentially. However, it can handle asynchronous operations using callbacks, 
    promises, and async/await, allowing for non-blocking I/O operations.

    This means that while one operation is waiting for a response (like a database query or file read),
    the JavaScript engine can continue executing other code. This is achieved through the use of the
    event loop and callback functions.
    ------------------------------------

    how javascript handle async operations. like promises, timers, set timeout ?

    -> as we have the event loop, basically when ever you are executing those kind of async 
    operations, js maintains a call stack where all the calls you have maid for different kind of 
    functions or operations.. they are maintained.. as soon as particular function is finished ..
    it is popped from the particular callstack and where if in the mean time a new function comes
    in .. it pushes into the call stack .. and javascript maintains the event queue .. so, whenever
    you are executing an asynchronous code and once that code is finished .. event queue is just 
    reached next callback that is given to the call stack , so that you will have your async
    code executed and in the meantime your next lines of code will keep executed 

    -----------------
    Interviewer : you mention we have the call stack .. we have browse api's, we have the event 
    queues

    how javascript know that promises ended and to execute the callback 
    -----------------
    for setTimeout .. we basically use the timers.. so, we have second argument as a timer ,
    which you decide how long that particular function needs to wait before getting executed .. 

    when we execute async code with promise .. promises have like three states, 
    pending, fullfiled, rejected .. based on those state, javascript decide like which callback
    function to execute at that point 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Event Loop In Javascript -->

    The event loop is a fundamental concept in JavaScript that enables asynchronous programming.
    It allows JavaScript to perform non-blocking operations by offloading tasks to the browser's APIs
    and using callbacks to handle the results.

    The event loop continuously checks the call stack and the event queue. If the call stack is empty,
    it takes the first event from the event queue and pushes it onto the call stack for execution.
    This process allows JavaScript to handle asynchronous events and callbacks efficiently.

    The event loop is what enables JavaScript to perform non-blocking I/O operations,
    allowing developers to write code that can handle multiple tasks concurrently without being blocked
    by long-running operations.
    --------------------------------

    event loop is the one that keep checking the event queue.. so, if you reserve a promise or
    set amount for example you will push an event into the event queue and the event loop is the
    one that keep constantly checking the event kills .. so if there is any callback there ..
    event loop will get there callback and push in the call stack then javascript will execute .. 

    and we have several priority for that
    1. Microtasks (Promises, MutationObserver)
    2. Macrotasks (setTimeout, setInterval)


    promises will resolve in the current execution of the event loop ..
    timers like set timeout, set immediate, process next tick .. they all goes to the next loop 

    which means if you have 10 promises , that 10 promises will be pushed frist in the call stack
    then a single set time out 
    if you have thousands of promises resolve it... thousands of promise resolve will got to 
    call stack ... and then after that a single set timeout will be pushed to the call stack

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Different between promises and observables -->

    promises -> its a single event .. that handle the asynchronous operation and returns a single value.
        promises can be used for async API call or any async operations we are doing
        here we have then catch and finally block .. which are executed based upon the promise state..
        whereas finally will be executed in all the state if like promises rejected or resolved .. 

    observables -> can handle multiple values over time and can be cancelled.
        it is kind of provide subscriber so that, lets say you have some sort of code that is being
        executed and you want other functions to be subscribed to that particular function
        whenever particular event happens observable informs that subscribed function, so that
        they can know that particular event or particular value has been triggered so that the
        next operations can be made .. 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Difference between promise.all and promise.all settled -->
  * promise.all -> takes an array of promises and returns a single promise that resolves when all of the promises in the
   array have resolved or rejects if any of the promises reject.
  * promise.allSettled -> takes an array of promises and returns a single promise that resolves when all of the promises 
   in the array have settled (either resolved or rejected) and provides an array of objects that each describe the outcome 
   of each promise.

    @Next <!-- 10:09  https://www.youtube.com/watch?v=8eRVxE9PEF0&list=PL9qDYKb1dFMBScm5OBuQ-nweAjEtGqv42&index=9  -->
    
 */

/**
  * @NEW_TOPIC <!-- Can we unsubscribe to a  Event Emitter -->



    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Optimization Techniques -->

    1. Function return value caching (Memoization) ///// 
    2. Lazy loading
    3. Debouncing and Throttling
    4. Code splitting
    5. Minification and Compression
    6. Using Web Workers for heavy computations ///// Offload heavy tasks to separate threads
    7. Avoiding memory leaks by cleaning up unused references
    8. Using efficient data structures and algorithms
    9. Reducing DOM manipulations and reflows
    10. Profiling and monitoring performance using tools like Chrome DevTools
    11. Pagination and infinite scrolling for large datasets 
    12. Using requestAnimationFrame for animations
    13. Avoiding unnecessary libraries and dependencies
    14. Using event delegation for handling events on multiple elements
    15. Optimizing images and other media assets

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Vanilla Js -> diff between call and apply -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Map vs weak map -->

    Map -> can have any type of key (primitive or object), and the keys are strongly referenced,
    meaning they will prevent garbage collection as long as the map exists.

    WeakMap -> can only have objects as keys, and the keys are weakly referenced,
    meaning they do not prevent garbage collection. If there are no other references to the key object,
    it can be garbage collected, and the corresponding entry in the WeakMap will be removed.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- null , undefined -->

    null -> primitive data type from javascript 
    it represents the intentional absence of any object value.



    undefined -> is a value that indicates that a variable has been declared but has not been assigned
    a value. It is the default value of uninitialized variables and function parameters.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Hoisting in js -->

    Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top
    of their containing scope during the compilation phase, before the code is executed.

    This means that you can use variables and functions before they are declared in the code.

    However, only the declarations are hoisted, not the initializations. So, if you try to access
    a variable before it is initialized, it will result in undefined.

    Example:
    console.log(x); // undefined
    var x = 5;

    In this example, the declaration of x is hoisted to the top, but its initialization to 5 is not.
    Therefore, when we log x before its initialization, it results in undefined.

    ==============================

    hoisting happens in the first phase of javascript.. which will get all variables that use the 
    declaring var or in every function that you use with function keyword .. and with variables
    they will get that variable and put in the top of the next execution .. and they will assign
    the develop undefined into it .. so, does not matter if you create a function and create 
    a var inside that function .. that variable will become a global variable .. javascript 
    will put that in the top of the execution .. the next execution and assign the value 
    undefined .. so, if you try to access that variable before the initialization .. you will
    get undefined ..
    
    but if you use let and const .. they will not be hoisted .. so, if you try to access 
    before initialization .. you will get reference error ..
    
    with function .. if you create a function with function keyword .. that function
    will be hoisted .. so, you can access that function before the initialization .. 
    but if you create a function with arrow function or function expression .. that 
    function will not be hoisted .. so, if you try to access that function before 
    initialization .. you will get reference error ..

    ==============================

    javascript will get the whole function . the signature of the function and the body of
    the function .. and put in the top of the next execution .. so, you can access that function



    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- How jsonp works .. how its not really ajax .. .. prototyping in Js  -->



    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- modular pattern vs constructor using prototype -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Diff between reference and value .. is JS pass by value or pass by reference language -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- how to deep freeze an object in JS -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- normal function vs arrow function -->

    1. Syntax: Arrow functions have a shorter syntax compared to normal functions.
    2. 'this' Binding: Arrow functions do not have their own 'this' context; they inherit 'this' from the surrounding lexical scope.
       Normal functions have their own 'this' context, which can change based on how the function is called.
    3. 'arguments' Object: Normal functions have access to the 'arguments' object, which contains all arguments passed to the function.
       Arrow functions do not have their own 'arguments' object.
    4. Constructor: Normal functions can be used as constructors with the 'new' keyword, while arrow functions cannot be used as constructors.
    5. Implicit Return: Arrow functions can have an implicit return when there is a single expression, while normal functions require an explicit return statement.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Async/Await vs Generators  -->

    1. Syntax and Readability: Async/await provides a more straightforward and readable syntax for handling asynchronous operations compared to generators.
       Async/await uses the 'async' keyword to define an asynchronous function and the 'await' keyword to pause execution until a promise is resolved.
       Generators use the 'function*' syntax and the 'yield' keyword to pause and resume execution.
    2. Return Value: Async functions always return a promise, while generator functions return an iterator object.
    3. Error Handling: Async/await allows for easier error handling using try/catch blocks, while error handling in generators requires more complex patterns.
    4. Use Cases: Async/await is typically used for handling asynchronous operations that involve promises, such as API calls or file I/O.
       Generators are often used for implementing iterators, lazy evaluation, and managing complex control flows.

    5. Execution Control: Generators provide more fine-grained control over the execution flow, allowing you to pause and resume execution at specific points.
       Async/await is more focused on simplifying the handling of asynchronous operations without the need for explicit control over execution flow.

    6. Compatibility: Async/await is built on top of promises and is widely supported in modern JavaScript environments.
       Generators were introduced in ES6 and may require transpilation for compatibility with older environments.

    7. Performance: In most cases, async/await and generators have similar performance characteristics, as both are built on top of promises.
       However, the specific performance may vary based on the use case and implementation.
    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Javascript Symbols -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--  -->


    @Next <!--    -->
    
 */

