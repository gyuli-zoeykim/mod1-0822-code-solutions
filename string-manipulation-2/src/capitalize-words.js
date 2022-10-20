/* exported capitalizeWords */
// 1. define function with one parameter
// 2. use split method to word array
// 3. use for loop to word array to Uppercase first letter and rest lowercase.
// 4. use join method to reurn string of all array word.

function capitalizeWords(string) {
  var newWord = string.split(' ');
  for (var i = 0; i < newWord.length; i++) {
    newWord[i] = newWord[i].charAt(0).toUpperCase() + newWord[i].substr(1).toLowerCase();
  }
  return newWord.join(' ');
}
