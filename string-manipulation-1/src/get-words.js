/* exported getWords */
// 1. define function with one parameter
// 2. if string is empty return empty array
// 3. if string has more than one word separate
// 4. return using separate method

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}
