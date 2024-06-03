// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

const makeDiffTree = (firstFile, secondFile) => {
  const keys = _.sortBy(_.uniq([..._.keys(firstFile), ..._.keys(secondFile)]));
  return keys.flatMap((key) => {
    const value1 = firstFile[key];
    const value2 = secondFile[key];

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      const child = makeDiffTree(value1, value2);
      return { key, children: child, status: 'parent' };
    } if (Object.hasOwn(firstFile, key) && Object.hasOwn(secondFile, key)) {
      return value1 === value2
        ? { key, value: value2, status: 'unchanged' }
        : {
          key, oldValue: value1, newValue: value2, status: 'changed',
        };
    }
    return Object.hasOwn(firstFile, key)
      ? { key, value: value1, status: 'deleted' }
      : { key, value: value2, status: 'added' };
  });
};

export default makeDiffTree;
