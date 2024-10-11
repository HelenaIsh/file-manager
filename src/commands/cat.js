import { createReadStream } from 'node:fs';
import path from 'node:path';
import { stdout } from 'node:process';

const readFile = async (currentDir, dir) => {
    const fileDirectory = path.resolve(currentDir, dir);
    const stream = createReadStream(fileDirectory);

    stream.pipe(stdout);
    stream.on('end', () => {
        console.log(`\nYou are currently in ${currentDir}`);
      });
    return currentDir;
};

export default readFile;