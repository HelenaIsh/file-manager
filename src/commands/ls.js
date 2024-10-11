import fs from 'node:fs/promises';

const listDirectory = async (currentDir) => {
    const files = await fs.readdir(currentDir, { withFileTypes: true });
    files.sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) {
          return -1;
        }
        if (!a.isDirectory() && b.isDirectory()) {
          return 1;
        }
        return a.name.localeCompare(b.name);
      });
    console.table(files.map((file) => ({
        Name: file.name,
        Type: file.isDirectory() ? 'directory' : 'file'
      })));
    return currentDir;
};
export default listDirectory;