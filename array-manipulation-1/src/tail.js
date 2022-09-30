/* exported tail */
// 1. define a function with one parameter array
// 2. use for loop to get all element except first
// 3. return value

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
