import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises'
import zlib from 'zlib';
import path from 'path';

export const decompress = async (currentDirectory, sourceFile, destPath) => {
    return new Promise(async (resolve, reject) => {
        if (!destPath) {
            reject();
            return;
        }
        const inputFile = path.resolve(currentDirectory, sourceFile);
        const outputFile = path.resolve(currentDirectory, destPath);
        try {
            await access(inputFile);
        } catch(err) {
            reject();
            return;
        }

        const readStream = createReadStream(inputFile);
        const writeStream = createWriteStream(outputFile);
        const gunzip = zlib.createGunzip();

        readStream.pipe(gunzip).pipe(writeStream);

        readStream.on('error', () => reject());
        writeStream.on('error', () => reject());
        writeStream.on('finish', () => resolve());
    })
};