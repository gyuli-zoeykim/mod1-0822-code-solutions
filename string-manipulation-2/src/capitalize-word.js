/* exported capitalizeWord */
// 1. define function with one parameter
// 2. use uppercase, lowercase method for first character upper, rests are lower
// 3. need to find method for javascript to appear always JavaScript
// 4. return value

function capitalizeWord(word) {
  var newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (word.match(/javascript/i)) {
    return 'JavaScript';
  }
  return newWord;
}
