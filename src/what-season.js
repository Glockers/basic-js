const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(date) {
  try{
    if (arguments.length === 0) return 'Unable to determine the time of year!';
    let jsonDate = JSON.stringify(date);
    if (jsonDate.length < 3) {
      throw new Error('Invalid date!');
    }
    console.log(jsonDate.length)

    const array = ["spring", "summer", "autumn", "winter"]
    let index = Math.floor( (Number(date.getMonth())-2)/ 3 )
    if(index <0) index+=4
    return array[index]
  }
  catch(error){
    throw new Error('Invalid date!');
  }

  // console.log(Object.prototype.toString.call(date) )


}

console.log(
getSeason(new Date(1, 6, 13, 23, 45, 11, 500)))


                    // ,
                    // new Date(1, 6, 13, 23, 45, 11, 500),
  // new Date(22, 8, 22, 3, 0, 11, 500),
module.exports = {
  getSeason
};
