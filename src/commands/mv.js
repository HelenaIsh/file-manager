import copyFile from "./cp.js";
import removeFile from "./rm.js";

const moveFile = async (currentDir, fileName, newFileDirectory) => {
    await copyFile(currentDir, fileName, newFileDirectory);

    await removeFile(currentDir, fileName);
    return currentDir;
}

export default moveFile;