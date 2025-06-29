
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
     * 


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

