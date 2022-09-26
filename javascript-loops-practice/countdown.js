/* exported countdown */
function countdown(number) {
  var arrNumber = [];
  for (var i = 0; i <= number; i++) {
    arrNumber.unshift(i);
  }
  return arrNumber;
}
