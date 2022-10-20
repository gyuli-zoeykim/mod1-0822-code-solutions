/* exported lastChars */
// 1. define function with two parameters
// 2. use method to slice and give negative index to add new character from the last to string value
// 3. return value

function lastChars(length, string) {
  var lastStr = string.slice(-length);
  return lastStr;
}
