import readline from 'readline';
import os from 'os';
import processCommand from './processComand.js';

const userName = process.argv.slice(2)[0].split('=')[1] ?? 'Anonymous';
let currentDir = os.homedir()

console.log(`Welcome to the File Manager, ${userName}`);
console.log(`You are currently in ${currentDir}`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();
  
rl.on('line', async (input) => {
  input = input.trim();
  if (input === '.exit') {
    rl.close();
  } else {
    try {
      currentDir = await processCommand(input, currentDir);
    } catch (e) {
      console.log(e);
      console.log('Operation failed');
    }
    console.log(`You are currently in ${currentDir}`);
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit(0);
});
