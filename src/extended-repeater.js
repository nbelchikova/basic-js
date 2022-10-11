const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let optionsExample = {
    'repeatTimes': 0, 
    'separator':'', 
    'addition':'',  
    'additionRepeatTimes': 0, 
    'additionSeparator':'',  
    }

    let defaultSeparator = '+';
    let defaultAdditionalSeparator = '|';
    let repeaterString = '';

    str=String(str);

    if (!options) {
      return str;
    }

    if (!(options.repeatTimes)) {
      options.repeatTimes = 1
    };
  if (!(options.separator)) {
    options.separator = defaultSeparator
  };
  if (!(options.additionSeparator)) {
    options.additionSeparator = defaultAdditionalSeparator
  };
  if (!(options.additionRepeatTimes)) {
    options.additionRepeatTimes = 1
  };
  if (!('addition' in options)) {
    options.addition = ''
  } else {
    options.addition = '' + options.addition
  };


  let arr1 = new Array(options.repeatTimes);
  let arr2 = new Array(options.additionRepeatTimes);
  arr2.fill(options.addition);
  arr1.fill(str + arr2.join(options.additionSeparator));
  repeaterString = arr1.join(options.separator);
  
  return repeaterString;
}

module.exports = {
  repeater
};
