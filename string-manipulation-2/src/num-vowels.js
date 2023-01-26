/* exported numVowels */
// 1. define function with one parameter
// 2. define variable for count
// 3. define variable for vowels
// 4. use for of loop to iterate each characters
// 5. use include method to check if string includes vowel
// 6. return the number of vowels

function numVowels(string) {
  var count = 0;
  var strVowel = 'AEIOUaeiou';
  for (var i = 0; i < string.length; i++) {
    if (strVowel.includes(string[i])) {
      count++;
    }
  }
  return count;
}
