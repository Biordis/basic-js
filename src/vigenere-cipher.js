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
  constructor(dir = true) {
    this.dir = dir;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(msg, key) {
    if (msg === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let res = "";
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let counter = 0;
    for (let i = 0; i < msg.length; i++) {
      if (this.alphabet.includes(msg[i])) {
        let sdvig = this.alphabet.indexOf(key[counter]);
        let index = (this.alphabet.indexOf(msg[i]) + sdvig) % this.alphabet.length;
        res += this.alphabet[index];
        counter= ++counter % key.length;
      } else {
        res += msg[i];
      }
    }
    return this.dir ? res : res.split("").reverse().join("");
  }
  decrypt(enMsg, key2) {
    if (enMsg === undefined || key2 === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let res2 = "";
    enMsg = enMsg.toUpperCase();
    key2 = key2.toUpperCase();
    let counter2 = 0;
    for (let i = 0; i < enMsg.length; i++) {
      if (this.alphabet.includes(enMsg[i])) {
        let sdvig2 = this.alphabet.indexOf(key2[counter2]);
        let index2 = (this.alphabet.indexOf(enMsg[i]) - sdvig2 + this.alphabet.length) % this.alphabet.length;
        res2 += this.alphabet[index2];
        counter2 = ++counter2 % key2.length;
      } else {
        res2 += enMsg[i];
      }
    }
    return this.dir ? res2 : res2.split("").reverse().join("");
  }
}
module.exports = {
  VigenereCipheringMachine
};
