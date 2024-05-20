import _ from 'lodash';

const gendiff = (firstFile, secondFile) => {
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