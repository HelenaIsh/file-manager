import path from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createBrotliDecompress } from 'zlib';


const decompressFile = async (currentDir, fileName, destPath) => {
    const source = fs.createReadStream((path.resolve(currentDir, fileName)));
    const destination = fs.createWriteStream((path.resolve(currentDir, destPath)));
    const brotli = createBrotliDecompress();
  
    await pipeline(source, brotli, destination);
    return currentDir;
};

export default decompressFile;