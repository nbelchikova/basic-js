const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
 
  let mine = matrix.map(element => element.slice()); 
  for (let i=0; i<mine.length; i++) {
    for (let j=0; j<mine[i].length; j++) {
      mine[i][j]=0;
    }
  }
  for (let i=0; i<mine.length; i++)  {
    for (let j=0; j<mine[i].length; j++) {
      if(matrix[i][j]===true&&matrix[i+1]!==undefined&&matrix[i+1][j-1]!==undefined) {
        mine[i+1][j-1]++; 
      }
      if(matrix[i][j]===true&&matrix[i+1]!==undefined&&matrix[i+1][j]!==undefined) {
        mine[i+1][j]++; 
      }
      if(matrix[i][j]===true&&matrix[i+1]!==undefined&&matrix[i+1][j+1]!==undefined) {
        mine[i+1][j+1]++;
      } 
      if(matrix[i][j]===true&&matrix[i-1]!==undefined&&matrix[i-1][j+1]!==undefined) {
        mine[i-1][j+1]++;
      } 
      if(matrix[i][j]===true&&matrix[i-1]!==undefined&&matrix[i-1][j-1]!==undefined) {
        mine[i-1][j-1]++; 
      }
      if(matrix[i][j]===true&&matrix[i-1]!==undefined&&matrix[i-1][j]!==undefined) {
        mine[i-1][j]++;
      } 
      if(matrix[i][j]===true&&matrix[i]!==undefined&&matrix[i][j-1]!==undefined) {
        mine[i][j-1]++; 
      }
      if(matrix[i][j]===true&&matrix[i]!==undefined&&matrix[i][j+1]!==undefined) {
        mine[i][j+1]++;
      } 
    }
  }
  return mine;
}

module.exports = {
  minesweeper
};
