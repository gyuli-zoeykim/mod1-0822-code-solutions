/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixWord = [];
  for (var i = 0; i < words.length; i++) {
    suffixWord.push(words[i] += suffix);
  }
  return suffixWord;
}
