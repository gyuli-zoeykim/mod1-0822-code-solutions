/* exported reverse */
// 1. define a function with one parameter array
// 2. use for loop to get all element in reverse
// 3. return value

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
