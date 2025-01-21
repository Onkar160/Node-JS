// Just like a browser Node.js runs on the server with chrome v8 engine (backend not frontend)

// Like we type commands in browser on inspect >> console same we can do
//in the terminal for node.js by typing node and then commands

//Like browser has window as global object in node we have global object but it's smaller than browser's window object

// console.log("Hello World");
// console.log(global);

// Node.js has some Common core modules where as vanilla js don't have any.
// These modules are related to the OS, File system and other things that we can do in the server
// To import those modules we use Common JS modules instead of ES6 modules
// We use require to import modules in node.js to import CommonJS modules
// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);


// const path = require('path');
// console.log("\n", path.dirname(__filename));
// console.log(path.dirname(__dirname));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));



// //--------------to import as an object
// const math = require("./math");
// console.log(math);
// console.log(math.add(5, 3));



// //-----------to deconstruct object and import as an function/method
// const {add, subtract, multiply, divide} = require("./math");
// console.log(add(2, 5));
// console.log(subtract(2, 5));
// console.log(divide(2, 5));
// console.log(multiply(2, 5));

//There was no browser like fetch() for node.js version 18 and below so that
//  time third-party libs used to import to use fetch but in later version it got added

