function countOfAllBooleansAndStrings(arr) {
  return arr.filter(el => typeof el === 'boolean' || typeof el === 'string').length;
}


// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
