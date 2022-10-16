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


function copyNext(index, arr){
  let nextValue = arr[index+1]
  if(!nextValue) {arr.splice(index, 1); return};
  arr[index] = nextValue

}

function copyPrev(index, arr){
  let prevValue = arr[index-1]
  if(!prevValue){arr.splice(index, 1); return};
  arr[index] = prevValue
}


function removePrev(index, arr){
  let prevValue = arr[index-1]
  if(!prevValue) {arr.splice(index, 1); return};
  arr.splice(index, 1)
  console.log(arr, index)
  delete arr[index-1]
}

function removeNext(index, arr){
  let nextValue = arr[index+1]
  if(!nextValue ){arr.splice(index, 1); return};
  arr.splice(index, 1)
  delete arr[index]
}


function transform(array) {
  
  try {
    
    if(!Array.isArray(array)) throw "'arr' parameter must be an instance of the Array!"
    let arr = Object.assign([], array)
    const control_sequences = {"--discard-next": removeNext, "--discard-prev": removePrev, "--double-next":copyNext , "--double-prev": copyPrev}
    const objectKeys = Object.keys(control_sequences)
    array.forEach(elementArr => {
      if(typeof elementArr == "string" && objectKeys.includes(elementArr)){
        const index = arr.findIndex(value => value == elementArr);
        control_sequences[elementArr](index, arr)
      }
    });
    
  return arr.filter(Boolean)

  } catch (error) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  

}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))


module.exports = {
  transform
};
