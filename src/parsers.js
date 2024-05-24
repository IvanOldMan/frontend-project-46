import fs from 'fs'
import YAML from 'yaml'
import { extname } from "node:path";

const parsers = (filePath) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const fileExtension = extname(filePath).toLocaleLowerCase();

  switch (fileExtension) {
    case '.json':
      return JSON.parse(file);
    case '.yaml':
      return YAML.parse(file);
    case '.yml':
      return YAML.parse(file);
  }
};

export default parsers;