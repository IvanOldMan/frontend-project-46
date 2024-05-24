import _ from 'lodash';
import {resolve} from "node:path";
import {cwd} from "node:process";
import parser from "./parser.js";


const getFilePath = (filepath) => filepath.startsWith('/') ? filepath : resolve(cwd(), filepath);

const gendiff = (filepath1, filepath2) => {
		const firstFile = parser(getFilePath(filepath1));
		const secondFile = parser(getFilePath(filepath2));

	const data = _.sortBy(Object.entries(_.assign({}, firstFile, secondFile)));
	const a = data.reduce((acc, [key, value]) => {
				if (!Object.hasOwn(firstFile, key)) {
						acc.push(`  + ${key}: ${value}`);
				} else if (!Object.hasOwn(secondFile, key)) {
						acc.push(`  - ${key}: ${value}`);
				} else {
						if (firstFile[key] === secondFile[key]) {
								acc.push(`    ${key}: ${value}`)
						} else {
								if (firstFile[key] === value) {
										acc.push(`  - ${key}: ${value}`);
										acc.push(`  + ${key}: ${secondFile[key]}`);
								} else {
										acc.push(`  - ${key}: ${firstFile[key]}`);
										acc.push(`  + ${key}: ${value}`);
								}
						}
				}
			return acc;
		}, ['{',]);
		a.push('}');
		return a.join('\n');

};

export default gendiff;