import { access, unlink } from 'fs/promises'
import path  from 'path';

export const deleteFile = async (currentDirectory, filePath) => {
    return new Promise(async (resolve, reject) => {
        const srcDir = path.resolve(currentDirectory, filePath);
        try {
            await access(srcDir);
        } catch(err) {
            reject();
            return;
        }

        await unlink(srcDir, (error) => {
            if (error) {
                reject();
            }
        });
        resolve();
    })
}