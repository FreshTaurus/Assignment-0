function isPalindrome(word) {
    // Convert the word to lowercase to ignore case sensitivity
     const cleaned = word.toLowerCase();
     // Reverse the string and compare it with the original
     return cleaned === cleaned.split('').reverse().join('');// Insert code here;
}

// Do not edit this line;
module.exports = isPalindrome;
