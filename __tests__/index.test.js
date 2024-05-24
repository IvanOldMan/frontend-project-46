import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');


test('flatJSON', () => {

		const filepath1 = getFixturePath('file1.json');
		const filepath2 = getFixturePath('file2.json');
		const result = readFile('diffFlatJson.txt');

		expect(gendiff(filepath1, filepath2)).toEqual(result);
});