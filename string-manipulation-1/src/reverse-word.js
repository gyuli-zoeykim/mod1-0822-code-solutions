/* exported reverseWord */
// 1. define function with one parameter
// 2. assign a value with empty string
// 3. use for loop to get each character from the end.
// 4. once it's false
// 5. return value

function reverseWord(word) {
  var revWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    revWord += word[i];
  }
  return revWord;
}
