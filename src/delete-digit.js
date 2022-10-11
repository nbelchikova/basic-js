const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxDigit;
  n=n+"";
  maxDigit=String(n).split('');
  maxDigit.splice(0,1);
  maxDigit=maxDigit.join('');
  for (let i=1; i<n.length; i++) {
    let number =n.split('');
    number.splice(i,1);
    number=number.join('');
    if (maxDigit < number){ 
      maxDigit=number;
    }
  }

  return Number(maxDigit);
}

module.exports = {
  deleteDigit
};
