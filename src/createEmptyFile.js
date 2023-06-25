import path from 'path';
import { writeFile } from 'fs';

export const createEmptyFile = (currentDirectory, fileName) => {
    const filePath = path.resolve(currentDirectory, fileName);
    return new Promise((resolve, reject) => {
        writeFile(filePath, '', (err) => {
            if (err) {
                reject();
            }
            resolve();
        })
    })
}