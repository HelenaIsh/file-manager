import os from 'node:os';
const handleOsInfo = async (flag) => {
    switch (flag) {
      case '--EOL':
        console.log(JSON.stringify(os.EOL));
        break;
      case '--cpus':
        const cpus = os.cpus();
        cpus.forEach((cpu, index) => {
          console.log(`CPU ${index + 1}: ${cpu.model} - ${cpu.speed / 1000} GHz`);
        });
        break;
      case '--homedir':
        console.log(os.homedir());
        break;
      case '--username':
        console.log(os.userInfo().username);
        break;
      case '--architecture':
        console.log(os.arch());
        break;
      default:
        throw new Error('Invalid input');
    }
};

export default handleOsInfo;