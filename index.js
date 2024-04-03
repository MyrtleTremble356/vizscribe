const roundNumber = require('./roundNumber')
const capitalizeFirstLetter = require('./capitalizeFirstLetter')
const isPrime = require('./isPrime')
const flattenArray = require('./flattenArray')

module.exports = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }