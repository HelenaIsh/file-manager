import path from 'node:path';
import fs from 'node:fs/promises';

const changeDirectory = async (currentDir, dir) => {
    const newDir = path.resolve(currentDir, dir);
    const stats = await fs.stat(newDir);
    if (stats.isDirectory()) {
      return newDir;
    } else {
      throw new Error('Operation failed');
    }
};

export default changeDirectory;