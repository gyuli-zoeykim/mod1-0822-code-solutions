/* exported firstChars */
// 1. define function with two parameters
// 2. use method to slice and add new character to string value
// 3. return value

function firstChars(length, string) {
  var firstStr = string.slice(0, length);
  return firstStr;
}
