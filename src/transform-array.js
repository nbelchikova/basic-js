const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
    let arrNew = [...arr];
    for (let i=0; i<arrNew.length; i++) {
      if (arrNew[i] === '--discard-next') {
        arrNew[i] = 'deleted';
        arrNew[i + 1] = 'deleted';
      } else if (arrNew[i] === '--discard-prev') {
        arrNew[i] = 'deleted';
        arrNew[i - 1] = 'deleted';
      } else if (arrNew[i]=== '--double-next') {
        if (i===arrNew.length-1) {
          arrNew[i] ='deleted';
        }else {
          arrNew[i] = arrNew[i + 1];
        }
        
      }else if (arrNew[i] === '--double-prev' ) {
        if (i===0) {
          arrNew[i] ='deleted';
        }else {
          arrNew[i] = arrNew[i - 1];
        }
        
      }

    }
    return arrNew.filter(element => (element !== 'deleted'));
    }
 
 
  


module.exports = {
  transform
};
