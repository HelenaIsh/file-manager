import fs from 'node:fs/promises';

const listDirectory = async (currentDir) => {
    const files = await fs.readdir(currentDir, { withFileTypes: true });
    console.table(files.map((file) => ({
        Name: file.name,
        Type: file.isDirectory() ? 'directory' : 'file'
      })));
    return currentDir;
};
export default listDirectory;