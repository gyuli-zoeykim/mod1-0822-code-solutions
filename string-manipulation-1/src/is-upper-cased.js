/* exported isUpperCased */
// 1. define function with one parameter
// 2. check if characters in word are all uppercase
// 3. if it is, return true
// 4. if not, return false

function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  }
  return false;
}
