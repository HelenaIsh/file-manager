import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises'
import zlib from 'zlib';
import path, { join } from 'path';

export const compress = async (currentDirectory, filePath, folderPath) => {
    return new Promise(async (resolve, reject) => {
        if (!folderPath) {
            reject();
            return;
        }

        const inputFile = path.resolve(currentDirectory, filePath);
        const outputFile = path.resolve(currentDirectory, folderPath);
        const fileName = filePath.split('/')[filePath.split('/').length - 1].split('.')[0];
        try {
            await access(inputFile);
        } catch(err) {
            reject();
            return;
        }


        const readStream = createReadStream(inputFile);
        const writeStream = createWriteStream(join(outputFile, `${fileName}.gz`));
        const gzip = zlib.createGzip();

        readStream.pipe(gzip).pipe(writeStream);

        readStream.on('error', () => reject());
        writeStream.on('error', () => reject());
        writeStream.on('finish', () => resolve());
    })
};