/* exported isVowel */
// 1. define function with one parameter
// 2. check if characters in word include vowel
// 3. if it includes vowel in uppercase or lowercase return true
// 4. if not return false

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' ||
  char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  }
  return false;
}
