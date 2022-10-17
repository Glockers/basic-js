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
function repeater(str, options ) {

  options.addition = options.addition === null || options.addition ? String(options.addition) : options.addition
  
  options.repeatTimes = options.repeatTimes? options.repeatTimes : 1
  options.additionRepeatTimes = options.additionRepeatTimes? options.additionRepeatTimes : 1

  let arrayString = []
  for(let i=0; i<options.repeatTimes;  i++){
    let buffer = []
    for(let j=0; j< options.additionRepeatTimes;j++){
      buffer.push(options.addition)
    }

    arrayString.push(str + buffer.join(options.additionSeparator|| "|"))
    console.log(buffer, options.additionRepeatTimes , arrayString, options.repeatTimes)

  }

  return arrayString.join(options.separator || "+")
}

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }) == "nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null")


module.exports = {
  repeater
};
