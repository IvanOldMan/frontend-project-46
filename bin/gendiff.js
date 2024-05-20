#!/usr/bin/env node

import { Command } from 'commander';
import {cwd} from 'node:process';
import { resolve } from 'node:path';
import gendiff from "../src/index.js";
import parser from '../src/parser.js';

const program = new Command();

program
	.name('gendiff')
	.description('Compares two configuration files and shows a difference.')
	.argument('<filepath1>')
	.argument('<filepath2>')
	.version('0.0.1')
	.option('-f, --format [type]', 'output format')
	.helpOption('-h, --help', 'output usage information')
	.action((filepath1, filepath2) => {
			const getFilePath = (filepath) => filepath.startsWith('/') ? filepath : resolve(cwd(), filepath);

			console.log(gendiff(parser(getFilePath(filepath1)), parser(getFilePath(filepath2))));
	});

program.parse();