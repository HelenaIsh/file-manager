import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';
import readline from 'readline';

import { listFilesAndFolders } from './src/listFilesAndFolders.js';
import { goUp } from './src/goUp.js';
import { printCurrentDirectory } from "./src/printCurrentDirectory.js";
import { changeDirectory } from "./src/changeDirectory.js";
import { readFileContent } from "./src/readFileContent.js";
import { createEmptyFile } from "./src/createEmptyFile.js";
import { renameFile } from "./src/renameFile.js";
import {copyFile} from "./src/copyFile.js";
import {moveFile} from "./src/moveFile.js";
import {deleteFile} from "./src/deleteFile.js";
import {calcHash} from "./src/calcHash.js";
import {compress} from "./src/compress.js";
import {decompress} from "./src/decompress.js";

let username = process.argv.slice(2)[0].split('=')[1];
let currentDirectory = path.dirname(fileURLToPath(import.meta.url));

process.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Welcome to the File Manager, ${username}!`);
printCurrentDirectory(currentDirectory);
rl.prompt();

rl.on('line', async (input) => {
    if (input === 'ls') {
        await listFilesAndFolders(currentDirectory);
    } else if (input === 'up') {
        currentDirectory =  await goUp(currentDirectory)
    } else if (input.startsWith('cd ')){
        const targetDirectory = input.slice(3);
         try {
             currentDirectory = await changeDirectory(currentDirectory, targetDirectory)
         } catch {
             console.log('Operation failed');
         }
    } else if (input.startsWith('cat ')){
        const filePath = input.slice(4);
        try {
            await readFileContent(currentDirectory, filePath);
        } catch {
            console.log('Operation failed')
        }
    } else if (input.startsWith('add ')) {
        const fileName = input.slice(4).trim();
        try {
            await createEmptyFile(currentDirectory, fileName);
        } catch {
            console.log('Operation failed')
        }
    } else if (input.startsWith('rn ')) {
        const args = input.slice(3).trim().split(' ');
        try {
            await renameFile(currentDirectory, args[0], args[1]);
        } catch {
            console.log('Operation failed')
        }
    } else if (input.startsWith('cp ')) {
        const args = input.slice(3).trim().split(' ');
        try {
            await copyFile(currentDirectory, args[0], args[1]);
        } catch {
            console.log('Operation failed')
        }
    } else if (input.startsWith('mv ')) {
        const args = input.slice(3).trim().split(' ');
        try {
            await moveFile(currentDirectory, args[0], args[1]);
        } catch {
            console.log('Operation failed')
        }
    } else if (input.startsWith('rm ')) {
        const fileName = input.slice(3).trim();
        try {
            await deleteFile(currentDirectory, fileName);
        } catch {
            console.log('Operation failed')
        }
    } else if (input.startsWith('os ')) {
        const command = input.slice(5).trim().toUpperCase();
        switch (command){
            case 'EOL':
                console.log(`${JSON.stringify(os.EOL)}`)
                break;
            case 'CPUS':
                console.log(os.cpus());
                break;
            case 'HOMEDIR':
                console.log(os.homedir());
                break;
                case 'USERNAME':
                console.log(os.userInfo().username);
                break;
                case 'ARCHITECTURE':
                console.log(os.arch());
                break;
            default:
                console.log('Operation failed');
                break;
        }
    } else if (input.startsWith('hash ')) {
        const fileName = input.slice(4).trim();
        try {
            await calcHash(currentDirectory, fileName);
        } catch {
            console.log('Operation failed')
        }
    } else if (input.startsWith('compress ')) {
        const args = input.slice(8).trim().split(' ');
        try {
            await compress(currentDirectory, args[0], args[1]);
        } catch {
            console.log('Operation failed')
        }
    }  else if (input.startsWith('decompress ')) {
        const args = input.slice(10).trim().split(' ');
        try {
            await decompress(currentDirectory, args[0], args[1]);
        } catch {
            console.log('Operation failed')
        }
    } else {
        console.log('Invalid input')
    }
    printCurrentDirectory(currentDirectory);
    rl.prompt();
}).on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});