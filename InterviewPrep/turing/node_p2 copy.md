```
/**
  * @NEW_TOPIC <!--  -->
    tabular data 
    document related data 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is buffer in node js  -->
  
    temporary storage area in memory that holds data while it is being transferred between two locations, such as between
    a file and a program or between a network and a program. Buffers are used to improve performance by reducing the
    number of read/write operations.

    Buffers are particularly useful when dealing with streams of data, such as reading from a file or receiving data over
    a network connection. They allow for efficient handling of data by storing it in memory before processing it, which can
    help reduce latency and improve overall performance.

    In Node.js, buffers are implemented using the `Buffer` class, which provides methods for reading and writing binary 
    data. Buffers can be created from strings, arrays, or other buffers, and they can be manipulated using various methods 
    provided by the `Buffer` class.

    Buffers are particularly useful when dealing with binary data, such as images, audio files, or network protocols,
    where efficient handling of data is crucial for performance.
    Buffers are used to handle binary data in Node.js, such as reading files, processing network requests, or
    manipulating binary streams. They provide a way to work with raw binary data efficiently.
    
    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Middleware in node js -->

    They are used heavily in Express.js applications to handle requests and responses.
    Middleware functions are functions that have access to the request object (req), the response object (
    res), and the next middleware function in the application’s request-response cycle.
    They can perform various tasks such as logging, authentication, error handling, and modifying the request
    or response objects.
    Middleware functions can be added to the application using the app.use() method in Express.js.

    Middleware functions can be used to perform tasks such as logging, authentication, error handling, and
    modifying the request or response objects. They can also be used to handle specific routes or HTTP
    methods by passing a route path as the first argument to the app.use() method.


    /********** 
     * it comes in between request and business logic .. 
    mainly used to capture logs, enable rate limiting, authentication .. basically whatever is not part of business logic 
    there are third party middlewares also available like cors, helmet, body-parser, morgan etc ..

    we can write own middleware for specific use case .. 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- If you want to do middleware in express and node js .. what we need to do -->

    we can start with a async function that takes three parameters: req, res, and next.
    The req parameter represents the incoming request object, the res parameter represents the outgoing response object,
    and the next parameter is a function that is called to pass control to the next middleware function

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is the event loop? What do you understand about event loop in node js  -->

    this is heart of v8 engine ..
    it is a single threaded loop that handles asynchronous operations in Node.js.
    The event loop allows Node.js to perform non-blocking I/O operations by offloading operations
    to the system kernel whenever possible. It continuously checks for events and executes
    the associated callbacks in a single thread, allowing Node.js to handle multiple requests concurrently
    without blocking the execution of other code. The event loop is responsible for managing the execution of
    callbacks, timers, and I/O operations in Node.js applications.
    The event loop is a core component of Node.js that allows it to handle asynchronous operations efficiently.
    It is responsible for executing callbacks, processing events, and managing the execution of asynchronous code.

    /********** 
     * asynchronous is managed by event loop

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- The concept of Stub in node js  -->

    it use in writing test which is important part of development .. it replace the whole function which is getting tested .. 

    if an external call is done which takes too much time and its running slow .. we can use stub to replace that function
    with a fake function that returns a predefined value or behavior. This allows us to test the
    rest of the code without waiting for the external call to complete, making the tests faster and
    more reliable. Stubs are commonly used in unit testing to isolate the code being tested from
    external dependencies, such as databases, APIs, or other services.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- How could you enhance the nodejs performance through clustering -->

    just because node js application are on a single processor .. we can use clustering to enhance the performance of nodejs 
    application
    Clustering allows you to create multiple instances of your Node.js application, each running on a separate core of the CPU.
    This allows you to take advantage of multi-core processors and improve the performance of your application by distributing
    the workload across multiple processes.
    Each instance of the application can handle incoming requests independently, allowing for better utilization of system
    resources and improved scalability.
    Clustering is particularly useful for applications that require high concurrency or handle a large number of requests 
    simultaneously.
    It can help improve the overall performance and responsiveness of Node.js applications by allowing them to handle more
    requests concurrently.

    /*********** *
     * the cluster module is used to start up multiple node js processes that can share the same server port.
     * this allows us to take advantage of multi-core processors and improve the performance of our node js applications.
     

    but theres also a parent process called the cluster manager which is responsible for monitoring 
    and managing the worker processes. The cluster manager can spawn new worker processes,
    handle worker crashes, and distribute incoming requests to the worker processes.


    but theres also a drawback of clustering ..
    * the drawback is that each process has its own memory space, so they cannot share data
    * directly. This means that if you need to share data between processes, you will need
    * to use some form of inter-process communication (IPC) such as message passing or shared memory.
    * This can add complexity to your application and may require additional libraries or frameworks to handle
    * the communication between processes.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Why Cluster are different from worker thread vice versa -->

    Clustering in Node.js allows you to create multiple instances of your application, each running on a separate core of the CPU.
    Each instance is a separate process, and they can share the same server port to handle incoming
    requests. Clustering is primarily used to improve the performance and scalability of Node.js applications by
    distributing the workload across multiple processes.

    Worker threads, on the other hand, allow you to run JavaScript code in parallel threads within a single Node.js process.
    This is useful for CPU-intensive tasks that can block the event loop, as it allows you to offload those tasks to separate threads
    without blocking the main event loop. Worker threads are particularly useful for tasks that require heavy computation or processing,
    such as image processing, data analysis, or other CPU-bound operations. 

    In summary, clustering is used to improve performance and scalability by creating multiple processes,
    while worker threads are used to offload CPU-intensive tasks to separate threads within a single process
    without blocking the event loop. Clustering is more suitable for handling high concurrency and scaling applications
    across multiple cores, while worker threads are more suitable for offloading CPU-bound tasks to separate threads
    to prevent blocking the event loop.

    /******************** 
     * Cluster : In cluster mode, there is one process on each cpu.. with an enter process communication protocol 
      communicate and in case we want to have multiple servers accepting http requests whereas single port clusters can be helpful
      . this is an advantage of clustering .. and the processes are spawned in each cpu and thus will have separate memory
      and no distance which further will lead to some memory issue. this one can be count as disadvantage of clustering
        
    * Worker Thread : In worker thread mode, there is one process on each cpu.. with 
        an enter process communication protocol communicate and in case we want to have multiple servers accepting http requests
         whereas single port clusters can be helpful.

    here we have one process in total with multiple threads.. each thread has one more distance , one event loop, one js engine,
    and it can access most of the api and it shares memory with other threads without need of any inter process communication
    and this can be used for cpu intensive task like processing data or accessing the file system. since node js is single threaded
    . synchronous tasks can be more efficient by leveraging the local threads 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Could you please explain me what is a range axia search pattern  -->
    Range Axis Search Pattern is a search pattern used in databases and data structures to efficiently search for
    a specific range of values within a dataset. It is particularly useful when dealing with large datasets
    where searching for a specific value may not be efficient. The range axis search pattern allows for
    searching for a range of values by dividing the dataset into smaller segments and searching within those segments
    to find the desired range. This pattern can be implemented using various data structures such as trees
    or hash tables, and it can significantly improve the performance of search operations in large datasets.
    
    /****************** 
     * range axis search is a great way to structure test cases. It Prescribe an order of operation
     * Steps Are ...
      1. first step is to arrange inputs and targets 
       set up the test case 
       if test require any object or special settings . if needs to prepare database or if it needs to log in a web app
        you should handle all of these operations at the start of the test 
        and this is done in a range step
      2. to act on the target behavior, x steps should cover the main thing to test it . this could be calling a function 
       or a method, calling a rest api or interacting with a web page.  this can one of these..
       and we are keeping these actions focused on the target behavior
      3. to assert expected outcomes
      4. next step is some sort of response .. research steps verify the goodness or badness of their response 

      sometimes assertions are as simple as checking numerical other time they may require checking multiple facets
      of a system 

      5. assertions will ultimately determine if the test passes or fail

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Node js also has a couple timing features, timing functions that allow us to schedule processing ..
                  what are the timing functions available in node js  -->
  *  -->

    timer module is an essential part of node js and it has some function for some different purposes. 
    1. set timeout : 

    2. clear timeout : 

    they can be used to schedule code execution after a designated amount of milliseconds. and of course set timeout does this
    and clear timeout clear the timeout 

    we have 3. set interval : 4. clear interval :

    they can be used to execute a block of code multiple times like bouncing and 
    
    we have 5. set immediate : and 6.  clear immediate : 

    thy will execute code at the end of the current event loop cycle, allowing other code to run first.

    we have 7. next tick : 

    it is a special function that allows us to schedule code execution at the end of the current event loop cycle,
    similar to set immediate, but with a higher priority. It is often used to ensure that
    certain code runs before any other code in the event loop, allowing for immediate execution of critical
    tasks without waiting for the next event loop cycle.

    //// i have these .. if there are more please tell me .... 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- what is EPC in node js -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is the difference between child process spawn and execute function in node js .. and when to use
  *  each one  -->
  
    spawn child or execute child are two methods provided by the child_process module in Node.js to create child processes.
    The main difference between the two is how they handle the input and output of the child process.
    The spawn method is used to create a new child process and execute a command in it. It returns a ChildProcess object
    that can be used to interact with the child process. The spawn method is typically used for
    long-running processes or when you need to handle large amounts of data from the child process.

    The exec method, on the other hand, is used to execute a command in a child process and buffer the output.
    It returns a ChildProcess object that can be used to interact with the child process, but
    it buffers the output of the command and returns it as a string when the command completes.
    The exec method is typically used for short-lived processes or when you only need to capture the output of the command
    without needing to interact with it in real-time.

    /*********** 
      for spawn, it doesnt spawn a shell  and exec spawns a shell and executes the command in it.

      spawn streams the data returned by the child process and data flow is constant.
      in exact it buffers the data and waits till the process closes and transfers the data in one chunk. 
    
      spawn has no data transfer size limit. because its like a stream. it has a maximum transfer size limit of 1MB.
      spawn is a command designated to run system commands, spawn is more suitable for long-running processes
      with huge output

      we use exec if we need such features as shell pipes, redirects, even we need exec for more than one program

     
    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Why should we separate the express app in the server -->

    this is because actually the server is responsible for initializing the routes, middlewares and other application logic.
    express app has all the business logic, which will be solved by the rules initiated by the server. Why we are separating ,
    because separating them ensures that the business logic is encapsulated and decoupled from the application logic .
    which makes the project more maintainable and readable. also good for testing . because you just need to load the express
    and you can run any server you can test your application there


    

    /////////////////////
    By separating the express app from the server, we can keep the server code clean and focused
    on handling the server-related tasks, such as starting the server, handling requests, and managing
    the application lifecycle. This separation also allows for better organization of the codebase,
    making it easier to maintain and test the application. Additionally, separating the express app from the
    server allows for better scalability and flexibility, as we can easily swap out the express app with
    a different framework or library if needed, without affecting the server code. Overall, separating the
    express app from the server is a best practice in Node.js development that helps improve code organization
    and maintainability.


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is the reactor pattern in node js -->

    reactor pattern is a design pattern used in event-driven programming to handle events and
    callbacks in a non-blocking manner. It is commonly used in Node.js applications to manage
    asynchronous operations and handle events efficiently.

    The reactor pattern works by using an event loop to listen for events and callbacks, and then
    dispatching those events to the appropriate handlers. When an event occurs, the reactor pattern
    invokes the corresponding callback function to handle the event. This allows for efficient handling
    of multiple events and callbacks without blocking the execution of the program.

    /**************** 
     * 
     Reactor pattern is a pattern for non-blocking io operations.. but in general this is used in any event driven architecture. 

     there are two component here named reactor and handler. 

     reactor dispatches the io event to appropriate handler. and handler actually works on those events. 
     we have couple design part which is you can work with as a event emitter right, so in one hand subscriber 

     in one hand you have the event and your other hand you have the handler .. when you fire event .. handler will be 
     notified 


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Whats the difference between read file and create read stream in node js -->
    
    read file process actually is a fully buffered process that returns the response only one ..
    the complete file is push into the buffer and its completely read and as you can guess this is a memory 
    intensive process .. because it has all the data in a file .. and if we are working with a large file ..
    this can not be preferred actually.. 


    Create Read Stream is a partially buffered process that threats entire process as an event series .. 
    so, the entire file is a bit into chunks and then processed and then sent back the response one by one 

    after completing this step they are finally removed from the buffer unlike it is done in read file .. 

    so the create read stream process is more effective when we are processing large files .. 

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

