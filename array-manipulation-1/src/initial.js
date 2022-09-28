/* exported initial */
// 1. define a function with one parameter array
// 2. use for loop to get all element except last
// 3. return value

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
