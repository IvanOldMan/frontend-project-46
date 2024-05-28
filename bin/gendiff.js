#!/usr/bin/env node

import { Command } from 'commander';
import stylish from "../src/stylish.js";
import gendiff from "../src/index.js";


const program = new Command();

program
	.name('gendiff')
	.description('Compares two configuration files and shows a difference.')
	.argument('<filepath1>')
	.argument('<filepath2>')
	.version('0.0.1')
	.option('-f, --format [type]', 'output format', 'stylish')
	.helpOption('-h, --help', 'output usage information')
	.action((filepath1, filepath2) => {
			const formater = program.opts().format;
			console.log(gendiff(filepath1, filepath2, formater))
	});

program.parse();