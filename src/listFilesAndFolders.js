import { readdir } from 'fs/promises';

export const listFilesAndFolders = async (currentDirectory) => {
  try {
    const files = await readdir(currentDirectory, { withFileTypes: true });
    files.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) {
        return -1;
      } else if (!a.isDirectory() && b.isDirectory()) {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
    const tableData = files.map((file) => {
        const fileType = file.isDirectory() ? 'Directory' : 'File';
        return {  Name: file.name, Type: fileType };
    });
    console.table(tableData);
  } catch (err) {
    console.error('Operation failed');
  }
}