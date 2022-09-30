/* exported compact */
// 1. define a function with one parameter array
// 2. use for loop to check each element value
// 3. check if element contains 'truthy' or 'falsy':false, null, NaN, 0, -0, undefined
// 4. if it's true return value in an array

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
