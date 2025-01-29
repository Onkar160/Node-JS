const fs = require("fs");
const path = require("path");
// console.log(__dirname);

// /* async in nature, by default it will convert binary to hex and it will print hex data
// we can pass one more encoding parameter 'utf8' in the readfile as second parameter
// we can use give directly path in single or double quotes as first parameter in readFile 
// or we can use core module path like this
// */
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
//     if(err) throw err;
//     // we can use toString() to convert from hex to string format
//     // or we can pass encoding utf8 as parameter after file path in readFile
//     console.log(data.toString());
// });


// /*
// to create a new file we use writeFile and we pass data as second parameter in string format in double quotes,
// we can give file name that we want to create in the file path first parameter
// */
// /*
// if there is already existing file and we are giving it's path with some data then
// it will overwrite that old data with new data
// */
// fs.writeFile(path.join(__dirname, 'files', 'starter.txt'), 'Hello, my name is OnkarPhulwalkar', (err) => {
//     // this is another way by which we can throw error using ternary operation
//     // we directly cannot throw error in ternary because it's accepts expression not statement
//     err ? (() => {throw err;})(): console.log("Write operation successful");
// });


// /* 
// appendFile also creates new file same as write file,
// if the file is already exists and we put that file path then whatever string/text data that we are 
// writing it will append it to already existing data in that file
// */
// fs.appendFile(path.join(__dirname, 'files', 'hello.txt'), "My name is me", (err) => {
//     err ? (() => {throw err;})(): console.log("append operation successful");
// });

// /*
// rename used to rename already existing file and if there is no already existing file it will throw error
// in this first we give the existing file path as param, then new name of that file with path and then callback fun
// */
// fs.writeFile("./files/newlyCreatedFile.txt", 'This is newly created file which will be renamed now', (err) => {
//     if(err) throw err;
//     console.log("writing successful for renaming");

//     fs.rename("./files/newlyCreatedFile.txt", "./files/renamed.txt", (err) => {
//     if(err) throw err;
//     console.log("renaming successful");
//     });
// });



// /*
// if we want to create new file with write file and append new data to it then it will be good if we
// use fs.append inside write file so it will create new file first and then it will append new data as shown below
// because if we don't do like this then because of async nature of those methods  if we use write file first and
// then we use append file then append file might run first which will create file and add data to it and then write file will run
// which is now going to append the data to already existing file but it will overwrite that data
// Right now below code is looking like callback hell
// */
// fs.writeFile("./files/firstCreatingFile.txt", 'created file first', (err) => {
//     if(err) throw err;
//     console.log("first writing operation successful");
//     fs.appendFile("./files/firstCreatingFile.txt", "\nnewly added text on the new line", (err)=> {
//         if(err) throw err;
//         console.log("newly added text in that file operation successful");
//         //here trying path.join instead of direct path as parameters
//         fs.rename(path.join(__dirname, 'files', 'firstCreatingFile.txt'), path.join(__dirname, 'files', 'renamedFile.txt'), (err) => {
//             if(err) throw err;
//             console.log("renaming operation also successful");
//         });
//     });
// });






// used to handle uncaught error
process.on('uncaughtException', err => {
    //prints the error msg
    console.log(err);
    // immediately terminate the process with an exit status of 1. The number 1 indicates that the process is exiting with an error
    process.exit(1);
});



console.log("asynchronous code");