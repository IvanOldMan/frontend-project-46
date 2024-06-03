import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');

const extList = ['.json', '.yaml', '.yml'];

test.each(extList)('stylish_test', (type) => {
  const filepath1 = getFixturePath(`file1${type}`);
  const filepath2 = getFixturePath(`file2${type}`);
  const result = readFile('stylish_result.txt');

  expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test.each(extList)('plain_test', (type) => {
  const filepath1 = getFixturePath(`file1${type}`);
  const filepath2 = getFixturePath(`file2${type}`);
  const result = readFile('plain_result.txt');

  expect(gendiff(filepath1, filepath2, 'plain')).toEqual(result);
});

test.each(extList)('json_test', (type) => {
  const filepath1 = getFixturePath(`file1${type}`);
  const filepath2 = getFixturePath(`file2${type}`);
  const result = readFile('json_result.txt');

  expect(gendiff(filepath1, filepath2, 'json')).toEqual(result);
});
