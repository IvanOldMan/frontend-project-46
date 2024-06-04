import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (format, diffTree) => {
  switch (format) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    case 'json':
      return json(diffTree);
    default:
      throw new Error(`Unknown output format '${format}'. Please select one of the supported formats [stylish, plain, json]'`);
  }
};

export default formatter;
