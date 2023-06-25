import crypto from 'crypto';
import path from 'path';
import { readFile } from 'fs/promises';

export const calcHash = async (currentDirectory, filePath) => {
    const resolvedPath = path.resolve(currentDirectory, filePath);
    try {
        const fileData = await readFile(resolvedPath);
        const hash = crypto.createHash('sha256');
        hash.update(fileData);
        console.log(hash.digest('hex'));
    } catch (error) {
        console.error(`Operation failed`);
    }
}