/* exported filterOutNulls */
function filterOutNulls(values) {
  var valuesNum = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      valuesNum.push(values[i]);
    }
  }
  return valuesNum;
}
