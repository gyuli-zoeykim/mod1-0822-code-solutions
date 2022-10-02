/* exported getKeys */
// 1. define a function with one parameter object
// 2. assign a new array variable
// 3. use for in to get object property
// 4. push value to an array
// 5. return value

function getKeys(object) {
  var objValue = [];
  for (var key in object) {
    objValue.push(key);
  }
  return objValue;
}
