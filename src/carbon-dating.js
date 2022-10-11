const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string) {
  if (typeof string!=='string') {
    return false;
  }
  if (string<=0 || string>15){
    return false;
  }
  let num=Number(string);
  let year;
  if (num>0) {
    year=Math.ceil(((Math.log(15/num))*5730)/0.693);
  } else {
    return false;
  }
  return year;
}

module.exports = {
  dateSample
};
