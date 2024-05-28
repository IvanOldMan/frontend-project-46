const objectToString =(obj, deep = 0) => {
  const currentIndent = deep + 1;
  const a = Object.entries(obj).map(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      value = objectToString(value, currentIndent);
    }
    return `${' '.repeat(currentIndent * 4)}${key}: ${value}`;
  }).join('\n');
  return `{\n${a}\n${' '.repeat(deep * 4)}}`;
};

const stat = {
  added: '+ ',
  unchanged: '  ',
  deleted: '- ',
  none: '  '
};

const stylish = (data, deep = 0) => {

  const currentIndent = deep + 1;

  const a = data.map((item) => {
    let value = Object.hasOwn(item, 'children') ? stylish(item.children, currentIndent) : item.value;
    if (typeof value === 'object' && value !== null) {
      value = objectToString(value, currentIndent);
    }
    return `${stat[item.status].padStart(currentIndent * 4)}${item.key}: ${value}`;
  }).join('\n');

  return `{\n${a.padStart(currentIndent * 4)}\n${' '.repeat(deep * 4)}}`;
};

export default stylish;