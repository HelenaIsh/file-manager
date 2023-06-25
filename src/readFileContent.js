import { createReadStream } from 'fs';
import path from 'path';

export const readFileContent = async (currentDirectory, filePath) => {
    const readableStream = createReadStream(path.resolve(currentDirectory, filePath), 'utf8');

    return new Promise((resolve, reject) => {
        readableStream.on('data', (chunk) => {
            console.log(chunk);
        });

        readableStream.on('error', () => {
            reject();
        });

        readableStream.on('end', () => {
            resolve();
        });
    })
}