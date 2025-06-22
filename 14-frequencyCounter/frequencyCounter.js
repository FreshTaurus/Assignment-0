function frequencyCounter(word) {
    const freq = {};
    for (const char of word) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq; // Insert code here;
}

// Do not edit this line;
module.exports = frequencyCounter;
