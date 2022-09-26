/* exported filterOutStrings */
function filterOutStrings(values) {
  var valuesNum = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      valuesNum.push(values[i]);
    }
  }
  return valuesNum;
}
