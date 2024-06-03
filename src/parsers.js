import fs from 'fs';
import YAML from 'yaml';
import { extname } from 'node:path';

const extension = {
  json: JSON.parse,
  yaml: YAML.parse,
  yml: YAML.parse,
};

const parsers = (filePath) => {
  const fileExtension = extname(filePath).toLocaleLowerCase().slice(1);

  if (!Object.hasOwn(extension, fileExtension)) {
    throw new Error(`Unknown file extension. Impossible to read '*.${fileExtension}' extension`);
  }
  const file = fs.readFileSync(filePath, 'utf8');
  return extension[fileExtension](file);
};

export default parsers;
