import listDirectory from "./commands/ls.js";

const processCommand = async (command, currentDir) => {
    switch (command) {
        case 'ls': {
            return await listDirectory(currentDir);
        }
        default:
            console.log('Invalid input');
    }
};

export default processCommand;