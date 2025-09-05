/**
  * @NEW_TOPIC <!-- Node js is single thread or multi thread application -->

    while js is single threaded ..we can perform concurrent operation using node js and event loop

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- As node js is single thread application (use one single core and stay there
  * for ever ) .. how can we simulate multi threading with node js 
  -->

  node js comes with a concept called fork .. fork is used to spawn child processes.
  in node js , its used to create new instance of v8 engine to run multiple worker threads..


  by creating a fork, node js can spread these operations via multiple worker threads of various
  cores of host machine 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- V8 .. why Node js use V8 -->

    js engine provide by google . V8 engine is open source engine, written in c++ .
    V8 is designed for high performance and efficiency, making it a great choice for
    server-side applications like Node.js.

    instead of employing an interpreter. V8 compiles JavaScript directly to native 
    machine code, during execution by utilizing JIT compiler which improves performance.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- what is the event loop -->

    The event loop is a fundamental concept in Node.js that allows it to perform non-blocking I/O operations.
    It enables Node.js to handle multiple request concurrently without the need for multiple threads.

    The event loop works by continuously checking the event queue for any pending events or callbacks.
    When an event is detected, the event loop executes the associated callback function.

    event loop has different phases, including timers, I/O callbacks, idle, and poll.
    Each phase has its own queue of callbacks to execute.

    timers: This phase executes callbacks scheduled by setTimeout() and setInterval().
    i/o callbacks : This phase executes callbacks for I/O operations, such as reading from a file or making a network request.
    idle, prepare: These phases are internal and are used for system operations.
    poll : This phase retrieves new I/O events and executes their callbacks.

    If there are no pending events, the event loop will check for any timers that need to be executed.
    If timers are present, the event loop will move to the timers phase and execute their callbacks.

    If there are no timers, the event loop will continue to the next phase.

    If there are no pending I/O events, the event loop will enter the idle phase.

    During the idle phase, the event loop will wait for new events to arrive. If no events are present, the event loop will continue to the next phase.

    If new events arrive, the event loop will process them in the appropriate phase.

    If the event loop is busy processing other events, new events will be added to the event queue and will be processed in the next iteration of the event loop.

    This allows Node.js to handle a large number of concurrent connections efficiently without being blocked by long-running operations.


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What do you understand about callbacks -->

    callbacks are a way of performing an operation asynchronously in JavaScript. 
    They allow you to pass a function as an argument to another async function, which can then be 
    executed at a later time.
    Callbacks are commonly used in Node.js for handling I/O operations, such as reading from
    a file or making a network request.

    those callbacks are registered with event loop, and later time they will be called 

    Callbacks can lead to "callback hell," where multiple nested callbacks make code difficult 
    to read and maintain. To address this issue, developers often use Promises or async/await
    syntax for better readability and error handling.

    modularization is the process of dividing a program into smaller, manageable, and reusable 
    modules or components. In Node.js, this is typically achieved using the CommonJS module system
    or ES6 modules. - it helps by break up callback into independent functions. 

    javascript generators are a special type of function that can be paused and resumed,
    allowing for more control over asynchronous code execution. They can be used to simplify
    the process of working with callbacks and make code more readable.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Diff between express and nest js -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is dependency injection -->
    
    its a mechanism that allow the framework to be able to identify certain tokens
    or services that have been pre-configured in the code and injected into other
    services in run time, so instead of developer manual writing manual code to
    instantiate objects and pass it to various functions. the developer can more 
    or less write, the services and the functions and then the dependency
    injection engine would take appropriate classes and instantiate create an 
    instance of it, at the time when it needs it . so, in that sense it makes 
    the code a bit more declarative.. it allow to write more decoupled code.

    its a mechanism that allow the framework to be able to manage the creation and
    injection of dependencies into components, promoting loose coupling and easier
    testing.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Streaming in node js -->
  
    Streaming is a powerful feature in Node.js that allows you to process data in chunks,
    rather than loading an entire file or data set into memory at once. This is particularly
    useful for handling large files or real-time data streams, as it enables more efficient
    memory usage and faster processing times.

    Node.js provides several built-in modules for working with streams, including the
    `fs` module for file system operations and the `http` module for handling HTTP requests
    and responses. Streams can be readable, writable, or both, and they can be piped together
    to create complex data processing pipelines.

    Many of the node js core libraries like the event emitter and the `fs` module are built
    on top of streams, allowing for efficient handling of data flow and event-driven programming.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Event Emitters -->

    Event emitters is used to write more decoupled code .. if there is an event is dispatched.
    and there is a listener function that is registered with that event . 

    so, whenever an action happens and an event is dispatched. all the listeners , which are 
    just functions registered to the event are executed .. this allow to communicate across
    multiple services. which is helpful to reduce response time .. 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Difference between event emitters and pub/sub pattern -->

    Event emitters are a specific implementation of the pub/sub pattern in Node.js. While both
    allow for decoupled communication between components, there are some key differences:

    1. **Implementation**: Event emitters are built into Node.js and provide a simple API for
    registering and emitting events. The pub/sub pattern is more general and can be implemented
    in various ways, including using libraries or custom code.

    2. **Use Cases**: Event emitters are often used for handling events within a single
    application, while the pub/sub pattern is more commonly used for communication between
    different services or components, potentially across network boundaries.

    3. **Flexibility**: The pub/sub pattern can be more flexible, allowing for different
    messaging systems (e.g., message queues, event buses) to be used. Event emitters are
    limited to in-memory event handling.

    @Next <!--    -->
 */

/**
  * @NEW_TOPIC <!-- Mongo db vs postgress -->
    // 18:04

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

