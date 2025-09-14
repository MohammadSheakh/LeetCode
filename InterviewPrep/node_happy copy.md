
```
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

    1. simplified web development - as lightweight framework
    2. middleware support
    3. flexible routing system 
    4. template engine integration .. 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Middleware -->

    middleware in express js is a function aht handles http requests and perform operations and passes control to 
    next middleware .. 

    /// how to implement middleware in express js 

    const express = require('express');
    const app = express();

    const myMiddleware = (req, res, next) => {
      console.log('Middleware executed');
      next(); // Pass control to the next middleware or route handler
    };

    // use middleware globally for all routes. 
    app.use(myMiddleware);

    /// how to use middleware globally for a specific route

    app.use('/api', myMiddleware);

    /// what are the types of middleware in express js >>> 5 types

     1. Application-level middleware - defined at the application level and can be used for all routes
     2. Router-level middleware - defined at the router level and can be used for specific routes
     3. Error-handling middleware - used to handle errors that occur during request processing
     4. Built-in middleware - provided by express js, such as express.json() and express.urlencoded() for parsing request bodies
     5. Third-party middleware - external middleware libraries that can be integrated into an express app

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- specific function in express  -->

    1. app.get() - Handle GET requests
    2. app.post() - Handle POST requests
    3. app.put() - Handle PUT requests
    4. app.delete() - Handle DELETE requests
    5. app.use() - Use middleware functions
    6. app.listen() - Start the server and listen for incoming requests
    7. app.all() - Handle all HTTP methods for a specific route
    8. app.route() - Chain multiple route handlers for a specific path
    9. app.param() - Define middleware for route parameters
    10. app.set() - Set application-level settings
    11. app.get() - Handle GET requests

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Error Handling Middleware  -->
  * 
    app.use((err, req, res, next) => {
      console.error(err.stack); // Log the error stack trace
      res.status(500).send('Something went wrong!'); // Send a generic error response
    });

    ////////// If you want to handle specific errors, you can do so like this:
    app.use((err, req, res, next) => {
      if (err instanceof SomeSpecificError) {
        res.status(400).send('Specific error occurred!');
      } else {
        next(err); // Pass the error to the next error-handling middleware
      }
    });

  


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- How to serve static files from express js -->

    express.static() middleware is used for serving static files .. 

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Third party middleware -->

    // use the helmet middleware for setting HTTP security headers

    // use the body-parser middleware for parsing request bodies

    // use the compression middleware for compressing response bodies


    ///// Request Pipeline 
    // series of middleware functions that handle incoming http request and 
    // pass control to the next function . 
    
    @Next <!--    -->
    
 */                                            

/**
  * @NEW_TOPIC <!-- router object & router method -->
    const router = express.Router(); // this is router object 

    router.get('/path', (req, res) => { // thgis is router method


    ////////// What is express.Router() in express js ?
    -> express.Router() is a class in Express js that returns a new router object.
    -> It is used to create modular, mountable route handlers.
    -> It allows you to define routes and middleware for a specific path or group of paths.


    //////// Route Chaining
    router.route('/path', middleware1, middleware2, (req, res) => {})
    
    /////// Route Nesting ..           

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Template Engines -->

    // process the template .. .. libraries that enable developer to generate dynamic HTML content
    by combining static HTML templates with data .. 

    EJS -> embedded JavaScript .. Handlebars -> Mustache -> Pug -> Nunjucks
     
    @Next <!--    -->
    
 */
////////////////////////////////////////// 2:13:54 ////////////////////////////////////////////////////
/**
  * @NEW_TOPIC <!-- REST & RESTFUL API -->
    REST (Representational State Transfer) is an architectural style for designing networked applications.
    It relies on a stateless, client-server communication model and uses standard HTTP methods (GET
    , POST, PUT, DELETE) to perform operations on resources.
    RESTful API is an API that adheres to the principles of REST, allowing clients to interact with resources
    using standard HTTP methods and URIs. It typically returns data in formats like JSON or XML

    REST -> architectural style for designing networked applications
    RESTful API -> API that adheres to / follows the principles of REST
    -> REST is a set of guidelines for creating APIs that are scalable, stateless, and use standard HTTP methods.


    Transfering data accurately in a network .


    //////// What are HTTP Request and Response structures in UI and REST API 

    //////// What are the top 5 REST guidelines and advantages of them 
    1. Separation of Concerns: REST separates the client and server, allowing them to evolve independently.
    2. Statelessness: Each request from the client to the server must contain all the information needed to understand and process the request, making the server stateless.
    3. Resource-Based: REST focuses on resources, which are identified by URIs. Each resource can be manipulated using standard HTTP methods (GET, POST, PUT, DELETE).
    4. Uniform Interface: REST defines a uniform interface for communication between clients and servers, simplifying the architecture.
    5. Cacheability: Responses from the server can be cached to improve performance and reduce server load. 
    6. Layered System: REST allows for a layered architecture, where intermediaries can be introduced to improve scalability
     and security. MVC 


     //////// REST API vs SOAP API 

     architecture : Architecture style vs protocol
      data format : JSON, XML vs XML only
      communication : Stateless vs Stateful
      performance : Lightweight vs Heavyweight
      flexibility : More flexible vs Less flexible
      security : Uses HTTPS vs Uses WS-Security
      standards : Fewer standards vs More standards
      complexity : Simpler vs More complex
      error handling : Uses HTTP status codes vs Uses SOAP faults
      versioning : Versioning through URL or headers vs Versioning through WSDL
      testing : Easier to test with tools like Postman vs More complex testing with SOAP UI

    
      ////// HTTP Methods : are set of actions that can take on a resource .. 

      ////// Put method vs Patch method ...  Complete update vs Partial update
      ////// Concept of Idempotency in RESTFUL API ..  Performing the same operation multiple times should yield the same 
              result without side effects.
              Non Idempotent operations may produce different results or side effects when repeated. (POST method)

      ////// What is HATEOAS in RESTFUL API .. Hypermedia as the Engine of Application State
      ////// What is CRUD in RESTFUL API .. Create, Read, Update, Delete operations on
      ////// What is JSON in RESTFUL API .. JavaScript Object Notation, a lightweight data interchange format
      ////// What is JSON Schema in RESTFUL API .. A JSON-based format for defining the structure
      ////// What is OpenAPI Specification in RESTFUL API .. A standard for defining RESTful APIs
      ////// What is Swagger in RESTFUL API .. A tool for generating API documentation from OpenAPI
      ////// What is API Gateway in RESTFUL API .. A server that acts as an entry point
      ////// What is API Versioning in RESTFUL API .. Managing changes to an API over time  
      ////// What is API Documentation in RESTFUL API .. A guide that explains how to use an API
      ////// What is API Testing in RESTFUL API .. The process of verifying that an API works as expected
      ////// What is API Security in RESTFUL API .. Measures taken to protect an API from unauthorized access
      ////// What is API Rate Limiting in RESTFUL API .. Controlling the number of requests
      ////// What is API Authentication in RESTFUL API .. Verifying the identity of a user or
      ////// What is API Authorization in RESTFUL API .. Granting permissions to a user or application
      ////// What is API Caching in RESTFUL API .. Storing responses to improve performance
      ////// What is API Throttling in RESTFUL API .. Limiting the rate of requests
      ////// What is API Monitoring in RESTFUL API .. Tracking the performance and usage of an API
      ////// What is API Analytics in RESTFUL API .. Analyzing the usage patterns and performance
      ////// What is API Management in RESTFUL API .. The process of overseeing and controlling an API
      ////// What is API Proxy in RESTFUL API .. A server that acts as an intermediary between
      ////// What is API Mocking in RESTFUL API .. Creating a simulated version of an API
      ////// What is API Gateway in RESTFUL API .. A server that acts as an entry point
      ////// What is API Load Balancing in RESTFUL API .. Distributing incoming requests across multiple
      ////// What is API Scalability in RESTFUL API .. The ability of an API to handle increased load
      ////// What is API Performance in RESTFUL API .. The speed and efficiency of an API
      ////// What is API Reliability in RESTFUL API .. The ability of an API to consistently perform
      ////// What is API Usability in RESTFUL API .. The ease of use and understanding of
      ////// What is API Interoperability in RESTFUL API .. The ability of an API to work with other APIs
      ////// What is API Compatibility in RESTFUL API .. The ability of an API to work with
      ////// What is API Extensibility in RESTFUL API .. The ability of an API to be extended
      ////// What is API Flexibility in RESTFUL API .. The ability of an API to adapt
      ////// What is API Maintainability in RESTFUL API .. The ease of maintaining and updating an API
      ////// What is API Portability in RESTFUL API .. The ability of an API to be
      ////// What is API Standardization in RESTFUL API .. The process of creating standards
      ////// What is API Governance in RESTFUL API .. The process of managing and controlling an API
      ////// What is API Ecosystem in RESTFUL API .. The network of APIs, tools, and services
      ////// What is API Marketplace in RESTFUL API .. A platform for discovering and consuming APIs
      ////// What is API Monetization in RESTFUL API .. The process of generating revenue from an
      API

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Status codes for restful API -->

    1XX - 100 Continue

    2XX - 200 OK
    201 - 201 Created
    202 - 202 Accepted
    204 - 204 No Content
    208 - 208 Already Reported

    3XX - 300 Multiple Choices
    4XX - 400 Bad Request
    401 - 401 Unauthorized  
    403 - 403 Forbidden
    404 - 404 Not Found
    405 - 405 Method Not Allowed
    406 - 406 Not Acceptable
    408 - 408 Request Timeout
    409 - 409 Conflict
    410 - 410 Gone
    411 - 411 Length Required
    412 - 412 Precondition Failed
    413 - 413 Payload Too Large
    414 - 414 URI Too Long
    415 - 415 Unsupported Media Type
    416 - 416 Range Not Satisfiable
    417 - 417 Expectation Failed
    422 - 422 Unprocessable Entity
    429 - 429 Too Many Requests
    431 - 431 Request Header Fields Too Large
    451 - 451 Unavailable For Legal Reasons

    5XX - 500 Internal Server Error
    501 - 501 Not Implemented
    502 - 502 Bad Gateway
    503 - 503 Service Unavailable
    504 - 504 Gateway Timeout
    505 - 505 HTTP Version Not Supported
    506 - 506 Variant Also Negotiates
    507 - 507 Insufficient Storage
    508 - 508 Loop Detected
    510 - 510 Not Extended
    511 - 511 Network Authentication Required
    520 - 520 Unknown Error
    521 - 521 Web Server Is Down
    522 - 522 Connection Timed Out
    523 - 523 Origin Is Unreachable
    524 - 524 A Timeout Occurred
    525 - 525 SSL Handshake Failed
    526 - 526 Invalid SSL Certificate
    527 - 527 Railgun Error
    530 - 530 Site Is Frozen
    598 - 598 Network Read Timeout Error
    599 - 599 Network Connect Timeout Error
    
    @Next <!--    -->
    
 */

/////////////////////////////////////////////////  2:40:18  REST API - CORS, Serialization, Deserialization , OTHERS    
/**
  * @NEW_TOPIC <!-- What is CORS in Restful APIs -->

    CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to prevent
    malicious websites from making requests to a different domain than the one that served the web page.
    It allows servers to specify which origins are allowed to access their resources by including specific headers in
    the HTTP response. This is particularly important for RESTful APIs, as they are often accessed
    by web applications hosted on different domains.

    - same domain not restricted
    - different domain restricted - can not share resources 
    - different sub-domain restricted
    - request from http but sender is https - restricted
    - if the port number is different, it is considered a different domain


    // Enable CORS in Node.js using the cors middleware
    const express = require('express');
    const cors = require('cors');
    const app = express();    
    app.use(cors()); // Enable CORS for all routes



    @Next <!--    -->
                     
 */

/**
  * @NEW_TOPIC <!-- What are Serialization & Deserialization --> V.IMP
    if we want to pass data restAPI 1 to restAPI 2

    in restAPI 1 .. we convert the data into JSON object  (Serialization)
    in restAPI 2 .. we convert the JSON object into data (Deserialization)


    types of serialization ... 

    1. JSON Serialization: Converting data into JSON format, which is a lightweight data interchange format.
    2. XML Serialization: Converting data into XML format, which is a markup language
    3. Binary Serialization: Converting data into a binary format, which is more compact
    4. Protocol Buffers: A language-agnostic binary serialization format developed by Google
    5. YAML Serialization: Converting data into YAML format, which is a human-readable
    6. CSV Serialization: Converting data into CSV format, which is a simple text
    7. BSON Serialization: A binary representation of JSON-like documents, used by MongoDB
    8. Avro Serialization: A binary serialization format used in Apache Hadoop
    9. MessagePack Serialization: A binary serialization format that is more efficient than JSON
    10. Thrift Serialization: A binary serialization format developed by Facebook for cross-language services
    11. CBOR Serialization: Concise Binary Object Representation, a binary serialization format
    12. FlatBuffers Serialization: A serialization format developed by Google for efficient data interchange
    13. Ice Serialization: A serialization format used by the Ice middleware for distributed applications
    14. Protobuf Serialization: A serialization format developed by Google for efficient data interchange
    16. Parquet Serialization: A columnar storage file format optimized for use with big data processing frameworks


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Explaining the concept of versioning in RESTFUL APIs -->


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Authentication And Authorization -->

    5 types of authentication 

    1. Basic Authentication: Uses a username and password encoded in Base64.
    4. API Key Authentication: Uses a unique key to authenticate requests.
    2. Token-Based Authentication: Uses a token (e.g., JWT) to authenticate
    11. Multi-Factor Authentication (MFA): Requires multiple forms of verification, such as a password and a one-time code sent to a mobile device.
    
    3. OAuth: An open standard for access delegation, commonly used for token-based authentication.
    5. Session-Based Authentication: Uses a session ID stored on the server to authenticate requests
    6. Digest Authentication: Uses a hashed version of the password for authentication.
    7. HMAC Authentication: Uses a hash-based message authentication code to verify the integrity and authenticity of the message.
    8. OpenID Connect: An authentication layer built on top of OAuth 2.0.
    9. SAML (Security Assertion Markup Language): An XML-based standard for exchanging authentication and authorization data between parties.
    10. LDAP (Lightweight Directory Access Protocol): A protocol for accessing and managing directory information services.
    12. Certificate-Based Authentication: Uses digital certificates to authenticate users or devices.
    13. Biometric Authentication: Uses unique biological characteristics, such as fingerprints or facial recognition, for authentication.
    14. Single Sign-On (SSO): Allows users to authenticate once and gain access to multiple applications or services.
    15. JSON Web Tokens (JWT): A compact, URL-safe means of representing claims to be transferred between two parties.
    16. OAuth 2.0: An authorization framework that allows third-party applications to obtain limited access to an HTTP service.
    

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is the role of Hashing and Salt in securing passwords -->

    we put salt(random string) and hashed password(using hashing algo) together to crate more secure password storage.

    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- What is token based and JWT authentication -->
   // JWT token has 3 parts .. headers, payload, signature
    // JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties.
    // It is used for authentication and information exchange in web applications.
    // JWT is a token-based authentication mechanism that allows users to authenticate and authorize access to resources.
    // JWT consists of three parts: header, payload, and signature.
    // The header contains metadata about the token, such as the algorithm used for signing.
    // The payload contains the claims or data associated with the token, such as user information and
    // expiration time.
    // The signature is used to verify the integrity of the token and ensure that it has not
    // been tampered with. It is created by combining the header and payload, and signing it with a secret key.
    // JWT is commonly used in RESTful APIs for stateless authentication, where the server does not need to store session information.
    // JWT is a compact, URL-safe means of representing claims to be transferred between two parties.
    // It is used for authentication and information exchange in web applications.


    @Next <!--    -->
    
 */

/**
  * @NEW_TOPIC <!-- Error Handling ? how many ways you can do error handling in node js -->

    Error handling is the process of managing errors that occur during the execution of a program or system 

    4 ways to implement error handling in node js 
    |-> 1. Try-Catch Blocks: Used to catch synchronous errors in code execution.
    |-> 2. Promises and .catch(): Used to handle asynchronous errors in promise
    |-> 3. Async/Await with Try-Catch: Used to handle asynchronous errors in async functions. 
            
            Error first call back (Async )
            ========================
            Error first callback is a convention in Node.js where the first argument of a callback function is reserved for an error object.
            If an error occurs, it is passed as the first argument, and the second argument contains the result.
            This convention allows developers to handle errors in a consistent manner across asynchronous operations.
            

    |-> 4. Error Event Listeners: Used to handle errors emitted by event emit
    |-> 5. Error Middleware in Express: Used to handle errors in Express applications.
    |-> 6. Global Error Handlers: Used to catch unhandled errors in the application.
    |-> 7. Custom Error Classes: Used to create custom error types for better error
    |-> 8. Logging Errors: Used to log errors for debugging and monitoring purposes.
     


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
  