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
  let toNumber = Number(sampleActivity);
  if (typeof sampleActivity !== 'string') return false;
  if (isNaN(toNumber)) return false;
  if (sampleActivity === '') return false;
  if (toNumber <= 0 ||  toNumber >= 15) return false;
  let calculate = Math.log(MODERN_ACTIVITY / toNumber) / (Math.LN2 / HALF_LIFE_PERIOD)
  return Math.ceil(calculate);
}

module.exports = {
  dateSample
};
