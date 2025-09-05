
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
  * promise.all -> takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or rejects if any of the promises reject.
  * promise.allSettled -> takes an array of promises and returns a single promise that resolves when all of the promises in the array have settled (either resolved or rejected) and provides an array of objects that each describe the outcome of each promise.

    @Next <!-- 10:09  https://www.youtube.com/watch?v=8eRVxE9PEF0&list=PL9qDYKb1dFMBScm5OBuQ-nweAjEtGqv42&index=9  -->
    
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

