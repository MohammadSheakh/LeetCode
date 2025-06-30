/**
  * @NEW_TOPIC <!-- Different module system in node js -->

    common node js module system vs es6 module system .. 

    common js module always use require and module.exports
    
    es6 module system always use import and export


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is stream and types of stream available in node js -->

    stream is a mechanism to handle reading and writing data in a continuous flow, allowing
    for efficient processing of large amounts of data without loading it all into memory at once.


    handle large data , large files where by we take and process chunk of data without waiting for entire data stream or 
    data file to be read into memory.

    readstream: used for reading data from a source, such as a file or network socket.
    writestream: used for writing data to a destination, such as a file or network socket
    duplex stream: allows for both reading and writing data, such as a network socket.
    transform stream: used to modify or transform data as it is being read or written, such
    as compressing or encrypting data.
    
    fileSystem.createReadStream() and fileSystem.createWriteStream() are used to create read and write streams for files.
    stream.pipe() is used to connect a readable stream to a writable stream, allowing data to flow from one to the other.
    stream.on('data', (chunk) => { ... }) is used to handle incoming data chunks from a readable stream.
    stream.on('end', () => { ... }) is used to handle the end of a readable stream, indicating that all data has been read.
    stream.on('error', (err) => { ... }) is used to handle errors that occur during streaming operations.
    stream.pause() is used to pause a readable stream, temporarily stopping the flow of data.
    stream.resume() is used to resume a paused readable stream, allowing data to flow again.
    stream.destroy() is used to terminate a stream, releasing any resources associated with it.


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Difference between synchronous and asynchronous method of file system -->

    synchronous methods block the execution of code until the operation is complete, while asynchronous methods allow the code to
    continue executing while the operation is being performed in the background.

        fs.readFile -> that will block your code execution until the file is read completely
        fs.readFileSync -> that will not block your code execution and will return a promise that   
                            resolves when the file is read completely

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Cluster and work thread in node js  -->

    with cluster you can spawn multiple child processes that share the same server port, this is useful when you have 
    multiple http server running on the same port and you want to handle more requests
    and you want to take advantage of multi-core processors.

    each child process runs in its own memory space, allowing for better isolation and fault tolerance.
    each child process can handle its own requests, allowing for better load balancing and performance.
    each child process can be restarted independently, allowing for better fault tolerance and reliability.
    each child process can be monitored and managed independently, allowing for better control and management of the application.


    

    with worker thread you can run multiple threads in the same process, this is useful when you
    have multiple tasks that can be run in parallel and you want to take advantage of multi-core processors.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- 10:15 -->


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

