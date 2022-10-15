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
function dateSample(sampleActivity) {
  return sampleActivity > 0 &&
    sampleActivity <= 15 &&
    (typeof sampleActivity === 'string')? Math.ceil( Math.log( MODERN_ACTIVITY/ sampleActivity)/(0.693/HALF_LIFE_PERIOD)): false

  // let result  = Number(sampleActivity) || false

  // if(!result ) return false

  // if(result<=0 || result>15 || result === NaN ){
    // return false
  // }
  // return Math.ceil(Math.log(MODERN_ACTIVITY / result) / (0.693 / HALF_LIFE_PERIOD));
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(dateSample('3'))


module.exports = {
  dateSample
};
