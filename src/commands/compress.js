import path from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress } from 'zlib';


const compressFile = async (currentDir, fileName, destPath) => {
    const source = fs.createReadStream((path.resolve(currentDir, fileName)));
    const destination = fs.createWriteStream((path.resolve(currentDir, destPath, 'archive.gz')));
    const brotli = createBrotliCompress();
  
    await pipeline(source, brotli, destination);
    return currentDir;
};

export default compressFile;