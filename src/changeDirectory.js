import path from 'path';
import { stat } from "fs";

export const changeDirectory =  async (currentDirectory, targetDirectory) => {
    let filePath = path.resolve(currentDirectory, targetDirectory);
    return new Promise((resolve, reject) => {
        stat(filePath, (err, stats) => {
            if (err || !stats.isDirectory()) {
                reject()
            } else {
                resolve(filePath);
            }
        });
    });
}