import upDirectory from "./commands/up.js";
import changeDirectory from "./commands/cd.js";
import listDirectory from "./commands/ls.js";

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
        default:
            console.log('Invalid input');
    }
};

export default processCommand;