const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  cipher(string, key, method){
    string = string.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let wordArray = [];
    let iterKey = 0;
    for (let iterator = 0; iterator < string.length; iterator++) {
      let strIndex = this.alphabet.indexOf(string[iterator]);
      if (strIndex === -1) {
        wordArray.push(string[iterator]);
        continue;
      }
        if (iterKey >= key.length) iterKey = iterKey % key.length;
        let newLetter = method ? this.alphabet[((this.alphabet.length + (strIndex + this.alphabet.indexOf(key[iterKey]))) % this.alphabet.length)] : this.alphabet[(this.alphabet.length + (strIndex - this.alphabet.indexOf(key[iterKey]))) %this.alphabet.length];
        wordArray.push(newLetter);
        iterKey++;
    }

    if (this.type) {
      return wordArray.join("");
    }
    return wordArray.reverse().join("");
  }

  encrypt(string, key) {
    if (!string || !key) {
			throw new Error('Incorrect arguments!');
		}
    return this.cipher(string, key, true)
  }

  decrypt(string, key) {
    if (!string || !key) {
			throw new Error('Incorrect arguments!');
		}
    return this.cipher(string, key, false)
  }
}

module.exports = {
  VigenereCipheringMachine
};
