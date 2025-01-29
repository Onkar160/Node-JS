const fs = require("fs");


/* 
used to make the directory and if there is already existing directory 
then it will throw error, we can handle this using below if condition 
*/
if(!fs.existsSync('./newDirectory')) {
    fs.mkdir("./newDirectory", (err) => {
        if(err) throw err;
        console.log("directory successfully created");
    })
}


//same as mkdir this rmdir is used to remove directory
if(fs.existsSync('./newDirectory')) {
    fs.rmdir("./newDirectory", (err) => {
        if(err) throw err;
        console.log("directory successfully removed");
    })
}

//To create and remove we can put this if condition with rmdir inside fs.mkdir after that console.log so it will work fine
// or use promises so can use async await