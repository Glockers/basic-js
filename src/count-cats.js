const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.flat().reduce((sum, current)=>{
    
    return sum+=(current == '^^' ? 1: 0)
  }, 0)
  

  // throw new NotImplementedError('Not implemented');


}

console.log(
countCats([
    [0, '^^', '^^'],
    [0, 2, 2],
    ['^^', 1, 2]
   ])

)



module.exports = {
  countCats
};
