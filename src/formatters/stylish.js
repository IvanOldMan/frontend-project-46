const statuses = {
  added: '+ ',
  deleted: '- ',
}

const stringify = (str, indent) => `{\n${str}\n${' '.repeat(indent * 4)}}`;

const makeStr = (key, value, indent, status = '  ') => {
  const valueIsObject = typeof value === 'object' && value !== null;

  const objToString = () => {
    const str = Object.entries(value).map(([key, value]) => {
      const currentIndent = indent + 1;
      return makeStr(key, value, currentIndent);
    }).join('\n');

    return stringify(str, indent);
  }

  return `${status.padStart(indent * 4)}${key}: ${valueIsObject ? objToString() : value}`;
}


const stylish = (data, deep = 0) => {
  const currentIndent = deep + 1;

  const str = data.flatMap((item) => {
    const {key, status} = item;

    switch (status) {
      case 'added':
        return makeStr(key, item.value, currentIndent, statuses[status]);
      case 'deleted':
        return makeStr(key, item.value, currentIndent, statuses[status]);
      case 'unchanged':
        return makeStr(key, item.value, currentIndent);
      case 'changed':
        return [makeStr(key, item.oldValue, currentIndent, statuses.deleted), makeStr(key, item.newValue, currentIndent, statuses.added)];
      case 'parent':
        return makeStr(key, stylish(item.children, currentIndent), currentIndent);
    }
  }).join('\n');

  return stringify(str, deep);

}

export default stylish;