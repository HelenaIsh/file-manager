import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';

const calculateHash = async (currentDir, fileName) => {
    const stream = createReadStream(path.resolve(currentDir, fileName));

    const hash = createHash('sha256');

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash);
    });

    return currentDir;
};

export default calculateHash;