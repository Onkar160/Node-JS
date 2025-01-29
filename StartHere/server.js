// Just like a browser Node.js runs on the server with chrome v8 engine (backend not frontend)

/* Like we type commands in browser on inspect >> console same we can do
in the terminal for node.js by typing node and then commands 
*/

//Like browser has window as global object in node we have global object but it's smaller than browser's window object

// console.log("Hello World");
// console.log(global);

// /* 
// Node.js has some Common core modules where as vanilla js don't have any.
// These modules are related to the OS, File system and other things that we can do in the server
// To import those modules we use Common JS modules importing instead of ES6 modules but ES6 is the modern way
// We use require to import modules in node.js to import CommonJS modules 
// */
// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// // prints current directory name with whole path
// console.log(__dirname);

// // prints current file name with whole path
// console.log(__filename);

// // importing common core path module
// const path = require('path');

// // prints the current file's directory name in which this file is with whole path
// console.log("\n", path.dirname(__filename));

// // prints the parent directory name of the current directory with whole path
// console.log(path.dirname(__dirname));

// // prints only current file name only without any whole path
// console.log(path.basename(__filename));

// // prints extension of the current file
// console.log(path.extname(__filename));

// // prints whole object of path of the current file
// console.log(path.parse(__filename));



// //--------------to import as an object
// const math = require("./math");
// console.log(math);
// console.log(math.subtract(5, 3));



// //-----------to deconstruct object and import as an function/method
// const {add, subtract, multiply, divide} = require("./math");
// console.log(add(2, 5));
// console.log(subtract(2, 5));
// console.log(divide(2, 5));
// console.log(multiply(2, 5));

/* 
 There was no browser like fetch() for node.js version 18 and below so that
 time third-party libs used to import to use fetch but in later version it got added
 */
