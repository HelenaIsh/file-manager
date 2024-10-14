import path from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

const copyFile = async (currentDir, fileName, newFileDirectory) => {
    const readableStream = fs.createReadStream(path.resolve(currentDir, fileName));
    const writeableStream = fs.createWriteStream(path.resolve(currentDir, newFileDirectory, fileName));
    await pipeline(readableStream, writeableStream);
    return currentDir;
}

export default copyFile;