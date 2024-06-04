const prefix = {
  added: '+ ',
  deleted: '- ',
};

const stringify = (str, indent) => `{\n${str}\n${' '.repeat(indent * 4)}}`;

const makeStr = (key, value, indent, status = '  ') => {
  const valueIsObject = typeof value === 'object' && value !== null;

  const objectToString = (data) => {
    const str = Object.entries(data).map(([dataKey, dataValue]) => {
      const currentIndent = indent + 1;
      return makeStr(dataKey, dataValue, currentIndent);
    }).join('\n');
    return stringify(str, indent);
  };

  return `${status.padStart(indent * 4)}${key}: ${valueIsObject ? objectToString(value) : value}`;
};

const stylish = (data, deep = 0) => {
  const curIndent = deep + 1;

  const str = data.flatMap((item) => {
    const { key, status } = item;

    switch (status) {
      case 'added':
        return makeStr(key, item.value, curIndent, prefix[status]);
      case 'deleted':
        return makeStr(key, item.value, curIndent, prefix[status]);
      case 'unchanged':
        return makeStr(key, item.value, curIndent);
      case 'changed':
        // eslint-disable-next-line max-len
        return [makeStr(key, item.oldValue, curIndent, prefix.deleted), makeStr(key, item.newValue, curIndent, prefix.added)];
      case 'parent':
        return makeStr(key, stylish(item.children, curIndent), curIndent);
      default:
        throw new Error(`Unknown status ${status} for node ${key}'`);
    }
  }).join('\n');

  return stringify(str, deep);
};

export default stylish;
