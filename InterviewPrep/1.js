
/**
  * @NEW_TOPIC <!-- what is node js -->
    node js is a runtime environment that allows us to run javascript on the server side

    @Next <!--  runtime environment  -->
    converting high level code to low level code
    node js uses v8 engine to convert javascript code to machine code
    v8 engine is developed by google and is used in chrome browser
    node js is built on top of v8 engine
 */

/**
  * @NEW_TOPIC <!-- Runtime Environment -->
    provides an environment to run code
    includes services like file system, network, memory management,IO operations, etc.
    
    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What are the 7 main feature of node js  -->
    1. Asynchronous 
    2. Event Driven
    3. Single Threaded
    4. Non-blocking I/O
    5. Cross Platform
    6. Fast Execution
    7. Scalable
    8. Open Source
    9. Rich Ecosystem npm (Node Package Manager)
    10. Real time capabilities .. bi directional communication
    11. V8 Engine

    @Next <!--    -->
    
 */


/**
  * @NEW_TOPIC <!-- Synchronous -->
    Each Task is executed one after another
    If one task takes a long time to complete, it will block the execution of other tasks

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Multiple thread can create deadlock problem -->

    Asynchronous flow can be achieved bu its single threaded, non-blocking and event driven
    architecture 


    1. in synchronous programming, tasks are executed one after another in a sequential manner
    1. in asynchronous programming, tasks can be executed independently and concurrently

    2. 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Event, Event Emitter, Event Queue, Event Loop, Event Driven -->

    Event : Signal that something has happened in a program

    Event Emitter : Create or emit event 

    Event Queue : Emitted events are placed in an event queue, waiting to be processed

    Event Handler : Function that listens for and responds to events

    Event Loop : The event loop picks up event from the event queue and executes them in
            the order they were received, allowing for non-blocking execution

    Event Driven Architecture : It means operations in node are drive or based 
            by events         

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Main Features and Advantage of node js -->

    1. Asynchronous : Enables handling multiple concurrent requests & non blocking execution of thread.

    2. V8 JS Engine : Built on Google's V8 JS engine, which compiles JS to machine code for fast execution.

    3. Event Driven Arch : handling events and callbacks, allowing for efficient I/O operations.

    4. Cross  Platform : support deployment on various OS 

    5. Suitable for building scalable app. 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- ---------------------------   35:00 ---------------------- -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- NPM is used to manage dependencies for node project -->

    package.json file contains metadata about the project, including its dependencies, scripts, and other configurations.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- 49:13 Top 5 built in modules -->
    1. fs
    2. path
    3. os
    4. events
    5. http

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- fs module -->

    const fs = require('fs');

    // Read a file asynchronously
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) {

        console.error('Error reading file:', err);
        return;
      }
      console.log('File content:', data);
    });

    // Write to a file asynchronously
    fs.writeFile('output.txt', contentToWrite, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File written successfully');
    });  

    /// 7 main function of fs module
    // 1. fs.readFile() - Read a file asynchronously
    // 2. fs.writeFile() - Write to a file asynchronously
    // 3. fs.appendFile() - Append data to a file asynchronously
    // 4. fs.unlink() - Delete a file asynchronously
    // 5. fs.rename() - Rename a file asynchronously
    // 6. fs.mkdir() - Create a directory asynchronously
    // 7. fs.readdir() - Read the contents of a directory asynchronously
    // 8. fs.stat() - Get file or directory statistics asynchronously
    // 9. fs.watch() - Watch for changes in a file or directory asynchronously
    // 10. fs.exists() - Check if a file or directory exists asynchronously
    // 11. fs.copyFile() - Copy a file asynchronously
    // 12. fs.createReadStream() - Create a readable stream for a file
    // 13. fs.createWriteStream() - Create a writable stream for a file
    // 14. fs.promises - Provides promise-based versions of the fs methods
    // 15. fs.constants - Contains constants used by the fs module
    // 16. fs.access() - Check file or directory permissions asynchronously
    // 17. fs.truncate() - Truncate a file to a specified length asynchronously
    // 18. fs.chmod() - Change file or directory permissions asynchronously
    // 19. fs.chown() - Change file or directory ownership asynchronously
    // 20. fs.realpath() - Get the canonicalized absolute pathname of a file or directory asynchronously
    // 21. fs.symlink() - Create a symbolic link asynchronously
    // 22. fs.readlink() - Read the value of a symbolic link asynchronously
    // 23. fs.lstat() - Get symbolic link statistics asynchronously
    // 24. fs.fstat() - Get file statistics for a file descriptor asynchronously
    // 25. fs.ftruncate() - Truncate a file descriptor to a specified length
    // 26. fs.fchmod() - Change file permissions for a file descriptor asynchronously
    // 27. fs.fchown() - Change file ownership for a file descriptor asynchronously
    // 28. fs.fdatasync() - Synchronize a file descriptor's data to
    // 29. fs.fsync() - Synchronize a file descriptor's data and metadata to disk asynchronously
    

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Path module -->

    path module provides utilities for working with file and directory paths.
    joining, parsing, formatting, normalizing and manipulating paths. 

    const path = require('path');

    /// joining path segments 
    const fullPath = path.join('/docs', 'notes.txt');

    consolelog('Full Path:', fullPath); // output : /docs/notes.txt


    /// parsing a path
    const parsedPath = path.parse(fullPath);
    console.log('Parsed Path:', parsedPath); // output : object with properties like root, dir, base, ext, name

    /// 5 main function of path module 

    // joining path segments together
    const fullPath = path.join(__dirname, 'folder', 'file.txt');

    // resolving the absolute path
    const absolutePath = path.resolve('folder', 'file.txt');

    // getting the directory name of a path
    const directoryName = path.dirname('/path/to/file.txt');

    // getting the file extension of a path
    const fileExtension = path.extname('/path/to/file.txt');

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Explain the role of OS module .. name some functions of it  -->

    The os module in node js provides a set of methods for interacting with the operating system.

    const os = require('os');

    os.type(); // Returns the operating system name
    os.platform(); // Returns the platform name (e.g., 'linux', 'darwin
    os.arch(); // Returns the CPU architecture (e.g., 'x64', 'arm')
    os.release(); // Returns the operating system release version
    os.uptime(); // Returns the system uptime in seconds
    os.totalmem(); // Returns the total amount of system memory in bytes
    os.freemem(); // Returns the amount of free system memory in bytes
    os.homedir(); // Returns the home directory of the current user
    os.tmpdir(); // Returns the default directory for temporary files
    os.cpus(); // Returns an array of objects containing information about each CPU core
    os.networkInterfaces(); // Returns an object containing network interfaces and their addresses
    os.hostname(); // Returns the hostname of the operating system
    os.userInfo(); // Returns an object containing information about the current user



    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Explain the role of events module? how to handle events in node -->

    const EventEmitter = require('events');

    const myEmitter = new EventEmitter();

    /// Register an event listener(event name)
    myEmitter.on('eventName', (arg1, arg2) => {
      // when ever event Name is occurred, this callback will be executed
      console.log('An event occurred!');
    });

    /// lets emit that event
    myEmitter.emit('eventName', "arg1", "arg2"); // Output: An event occurred!

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- difference between a function and an event -->

    function is a reusable piece of code that can be called with arguments to perform a specific task.

    event represent an action or occurrence that can be listened to and responded to asynchronously.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!--   Advantage of express.... what is the role of http module in node  -->

    1. simplified web development
    2. middleware support
    3. 

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
  * @Steps <!--    -->
  
 */
  




  /**
      * @Next <!--    -->
      |
      | ->> 
      | 
      +----------
      | Ex: 
     */
  