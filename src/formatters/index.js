import stylish from "./stylish.js";
import plain from "./plain.js";

const formatter = (format, diffTree) => {
  switch (format) {
    case "stylish":
      return stylish(diffTree);
    case "plain":
      return plain(diffTree);
  }
};

export default formatter;