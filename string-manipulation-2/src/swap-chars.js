/* exported swapChars */
// 1. define function with three parameters
// 2. change string into array
// 3. replace firstIndex to secondIndex character and vise versa
// 4. return value

function swapChars(firstIndex, secondIndex, string) {
  var wordSplit = string.split('');
  var swap = wordSplit[firstIndex];
  wordSplit.splice(firstIndex, 1, string.charAt(secondIndex));
  wordSplit.splice(secondIndex, 1, swap);
  return wordSplit.join('');
}
