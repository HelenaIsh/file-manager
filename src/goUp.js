import path from 'path';

export const goUp = async (currentDirectory) => {
  const parentDirectory = path.dirname(currentDirectory);
  let resultDirectory = currentDirectory;

  if (currentDirectory !== parentDirectory) {
    resultDirectory = parentDirectory;
  }

  return resultDirectory

}