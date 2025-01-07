import * as fs from 'fs';
import * as zlib from 'zlib';

// Compress a JSON file using Gzip
const compressJsonFile = (inputFilePath: string, outputFilePath: string) => {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  
  const gzip = zlib.createGzip(); // Create a Gzip stream

  // Pipe the input file through gzip compression and then to the output file
  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File has been compressed using Gzip.');
  });

  writeStream.on('error', (err) => {
    console.error('Error during compression:', err);
  });
};

// Example usage
compressJsonFile('data.json', 'data.json.gz');

// How to execute this file
// 1. Compile the TypeScript file: tsc Question3.ts -> WIll create Question3.js
// 2. node Question3.js
// 3. Result: This will create a file called data.json.gz. Then you can decompress and compare with the original one.
// The compressed file size: Around 108KB 