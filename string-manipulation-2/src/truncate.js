/* exported truncate */
// 1. define function with two parameter
// 2. use method to slice and add new character to string value
// 3. return value with concatenating '...' to variable

function truncate(length, string) {
  var shortStr = string.slice(0, length);
  return shortStr + '...';
}
