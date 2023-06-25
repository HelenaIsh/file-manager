import path from 'path';
import { access, rename } from 'fs/promises'

export const renameFile = async (currentDirectory, pathToFile, newFileName) => {
    const oldPath = path.resolve(currentDirectory, pathToFile);
    const newPath = path.resolve(currentDirectory, newFileName)
    let oldFileExists;
    let newFileExists;

    try {
        await access(oldPath);
        oldFileExists = true;
    } catch(err) {
        oldFileExists = false;
    }

    try {
        await access(newPath);
        newFileExists = true;
    } catch (err) {
        newFileExists = false;
    }

    if (!oldFileExists || newFileExists) {
        throw new Error();
    }
    await rename(oldPath, newPath);
}