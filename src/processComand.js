import upDirectory from "./commands/up.js";
import changeDirectory from "./commands/cd.js";
import listDirectory from "./commands/ls.js";
import readFile from "./commands/cat.js";
import createFile from "./commands/add.js";
import renameFile from "./commands/rn.js";
import copyFile from "./commands/cp.js";
import removeFile from "./commands/rm.js";
import moveFile from "./commands/mv.js";
import handleOsInfo from "./commands/os.js";
import calculateHash from "./commands/hash.js";
import compressFile from "./commands/compress.js";
import decompressFile from "./commands/decompress.js";

const processCommand = async (command, currentDir) => {
    const [cmd, ...args] = command.split(' ');
    switch (cmd) {
        case 'ls': {
            return await listDirectory(currentDir);
        }
        case 'cd': {
            return await changeDirectory(currentDir, args[0]);
        }
        case 'up': {
            return await upDirectory(currentDir);
        }
        case 'cat': {
            return await readFile(currentDir, args[0]);
        }
        case 'add': {
            return await createFile(currentDir, args[0]);
        }
        case 'rn': {
            return await renameFile(currentDir, args[0], args[1]);
        }
        case 'cp': {
            return await copyFile(currentDir, args[0], args[1]);
        }
        case 'rm': {
            return await removeFile(currentDir, args[0]);
        }
        case 'mv': {
            return await moveFile(currentDir, args[0], args[1]);
        }
        case 'os': {
            await handleOsInfo(args[0]);
            return currentDir;
        }
        case 'hash': {
            return await calculateHash(currentDir, args[0]);
        }
        case 'compress': {
            return await compressFile(currentDir, args[0], args[1]);
        }
        case 'decompress': {
            return await decompressFile(currentDir, args[0], args[1]);
        }
        default:
            console.log('Invalid input');
    }
};

export default processCommand;