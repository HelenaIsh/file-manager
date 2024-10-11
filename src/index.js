import readline from 'readline';

const userName = process.argv.slice(2)[0].split('=')[1] ?? 'Anonymous';

console.log(`Welcome to the File Manager, ${userName}`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
rl.on('line', async (input) => {
  input = input.trim();
  if (input === '.exit') {
    rl.close();
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit(0);
});
