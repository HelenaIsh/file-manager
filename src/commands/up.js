import path from 'node:path';

const upDirectory = async (currentDir) => {
    return path.dirname(currentDir);
};
export default upDirectory;