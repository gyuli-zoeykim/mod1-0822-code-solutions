/* exported isLowerCased */
// 1. define function with one parameter
// 2. check if characters in word are all lowercase
// 3. if it is, return true
// 4. if not, return false

function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  }
  return false;
}
