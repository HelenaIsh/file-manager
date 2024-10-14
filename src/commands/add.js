import path from 'node:path';
import fs from 'node:fs/promises';

const createFile = async (currentDir, fileName) => {
    const filePath = path.resolve(currentDir, fileName);
    await fs.writeFile(filePath, '', 'utf8');
    return currentDir;
};

export default createFile;