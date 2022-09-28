/* exported capitalize */
// 1. define function with one parameter
// 2. assign value using method to give first character uppercase and rest lowercase
// 3. return value

function capitalize(word) {
  var uppercaseFirst = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return uppercaseFirst;
}
