/* exported ransomCase */
// 1. define function with one parameter
// 2. use for loop to check each character
// 3. if string starts with Uppercase
// 4. return first character and everyother Uppercase and rest lowercase
// 5. if string starts with lowercase
// 6. return first character and everyother lowercase and rest uppercase

function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i += 2) {
    if (string.charAt(0) === string.charAt(0).toUpperCase()) {
      newWord += string.charAt(i).toLowerCase();
      newWord += string.charAt(i + 1).toUpperCase();
    } else {
      newWord += string.charAt(i).toLowerCase();
      newWord += string.charAt(i + 1).toUpperCase();
    }
  }
  return newWord;
}
