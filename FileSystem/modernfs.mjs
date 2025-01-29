/* This file extension is mjs because we are using modern es6 js syntaxes otherwise it will throw error
and in order to execute .mjs files we need to type node filename.mjs with extension */


/* 
//tradational way of importing with just fs without node
//the naming of fs and path before "from" does not matters
import fs from "fs/promises";
import path from "path";
//need to import url in order to use url core module methods
import url from "url"; 
*/
            
                              //OR
 
//modern way of importing by attaching "node:" before core module
import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url" 



/* 
The reason we use import.meta.url in ES modules is that it provides a way to access
the module's location as a URL. Since ES modules can be loaded from various sources (not just the local filesystem but also over the network),
the URL format is used to standardize how module locations are represented
1. import.meta.url gives you the URL of the current module.
2. fileURLToPath(import.meta.url) converts this URL into a regular file path.
3. path.dirname(__filename) gives you the directory name from the file path.
*/
const __filename = url.fileURLToPath(import.meta.url);
// it will print the whole file path including directoryname with file path
console.log(__filename);

(async () => {
    try {                            //Modern ES6 js files with .mjs extension uses ES module syntaxes
                                    // Here as you can see we are using path.dirname(__filename) which will get the directory path of the __filename path
        let data = await fs.readFile(path.join(path.dirname(__filename), 'modernfs', 'starter.txt'), 'utf8');
        console.log(data);
        //used to delete the file
        await fs.unlink(path.join(path.dirname(__filename), 'modernfs', 'starter.txt'));
        //writing file, this time using direct url
        await fs.writeFile('./modernfs/newFile.txt', 'Hi, this is a newly created file');
        //now appending the new data on the new line to newFile.txt
        await fs.appendFile('./modernfs/newFile.txt', '\nThis is a new data');
        //now renaming newFile.txt to renamedFile.txt this time using path url again
        await fs.rename(path.join(path.dirname(__filename), 'modernfs', 'newFile.txt'), path.join(path.dirname(__filename), 'modernfs', 'renamedFile.txt'));
    } catch(err) {
        console.error(err);
    }
})();

