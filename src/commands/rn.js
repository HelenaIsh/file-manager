import path from 'node:path';
import fs from 'node:fs/promises';

const renameFile = async (currentDir, oldFileName, newFileName) => {
    await fs.rename(path.resolve(currentDir, oldFileName), path.resolve(currentDir, newFileName));
    return currentDir;
}

export default renameFile;