function titleCaseEdit(title) {
  // Split the title into words
  const words = title.split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  // Join the words back into a single string
  return capitalizedWords.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;
