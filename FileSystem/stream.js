const fs = require('fs');


/* 
We use createReadStream and createWriteStream for handling large files and streaming data efficiently in Node.js.They are particularly useful for:

1. Memory Efficiency:
 Read Streams: Read files in chunks, which means you don't need to load the entire file into memory. This is crucial for handling large files.
 Write Streams: Write data to files in chunks, preventing memory overload when dealing with large amounts of data.

2. Non-blocking I/O:
 Both createReadStream and createWriteStream operate asynchronously, which means they don’t block the event loop. This allows other operations to continue while reading or writing data.

3. Streaming Data:
 Read Streams: Useful for streaming data from a file to other destinations, like sending file data over an HTTP response.
 Write Streams: Useful for receiving data in chunks and writing it to a file, such as saving uploads or logs. 
*/
const rs = fs.createReadStream("./modernfs/lorem.txt", 'utf8');
const ws = fs.createWriteStream("./modernfs/lorenStream.txt");


// //doing with event listener
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// });

                    //OR
/*
pipe is a method used to connect a readable stream to a writable stream. 
This allows data to flow directly from the readable stream to the writable stream,
efficiently handling large amounts of data without consuming a lot of memory. 
The pipe method simplifies the process of reading from one stream and writing to another.
*/
rs.pipe(ws);



