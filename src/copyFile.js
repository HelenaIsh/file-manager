import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises'
import path, { join }  from 'path';

export const copyFile = async (currentDirectory, filePath, folderPath) => {
    return new Promise(async (resolve, reject) => {
        const srcDir = path.resolve(currentDirectory, filePath);
        const destDir = path.resolve(currentDirectory, folderPath);
        const fileName = filePath.split('/')[filePath.split('/').length - 1];
        try {
            await access(srcDir);
        } catch(err) {
            reject();
            return;
        }
        const sourceStream = createReadStream(srcDir);

        sourceStream.on('error', () => {
            reject();
        });

        const destinationStream = createWriteStream(join(destDir, fileName));

        destinationStream.on('error', () => {
            reject();
        });

        destinationStream.on('finish', () => {
            resolve();
        });
        sourceStream.pipe(destinationStream);
    })
}