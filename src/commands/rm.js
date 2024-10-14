import path from 'node:path';
import fs from 'node:fs/promises';

const removeFile = async (currentDir, fileName) => {
    const filePath = path.resolve(currentDir, fileName);
    await fs.unlink(filePath);
    return currentDir;
};

export default removeFile;