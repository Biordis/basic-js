const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let nullSpace = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      nullSpace += counter > 1 ? counter + str[i] : str[i];
      counter = 1;
    }
  }
  return nullSpace;
}

module.exports = {
  encodeLine
};
