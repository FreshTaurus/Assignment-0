function setUnionOfAnyAmountOfSets(...args) {
    const union = new Set();
    for (const s of args) {
      for (const val of s) {
        union.add(val);
      }
    }
    return union;  // Insert code here;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
