import fs from 'fs';
import YAML from 'yaml';
import { extname } from 'node:path';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf8');

const parsers = (filePath) => {
  const fileExtension = extname(filePath).toLocaleLowerCase();

  switch (fileExtension) {
    case '.json':
      return JSON.parse(readFile(filePath));
    case '.yaml':
      return YAML.parse(readFile(filePath));
    case '.yml':
      return YAML.parse(readFile(filePath));
    default:
      throw new Error(`Unknown file extension. Impossible to read '${filePath.split('/').at(-1)}'`);
  }
};

export default parsers;
