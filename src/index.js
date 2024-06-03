import { resolve } from 'node:path';
import { cwd } from 'node:process';
import parsers from './parsers.js';
import makeDiffTree from './differenceTree.js';
import formatter from './formatters/index.js';

const getFilePath = (filepath) => (filepath.startsWith('/') ? filepath : resolve(cwd(), filepath));

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const firstFile = parsers(getFilePath(filepath1));
  const secondFile = parsers(getFilePath(filepath2));

  return formatter(format, makeDiffTree(firstFile, secondFile));
};

export default gendiff;
