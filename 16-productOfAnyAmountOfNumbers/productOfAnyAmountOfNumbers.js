function productOfAnyAmountOfNumbers(...args) {
    if (args.length === 0) return 1; // edge case: no arguments
    return args.reduce((product, num) => product * num, 1);  // Insert code here;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
