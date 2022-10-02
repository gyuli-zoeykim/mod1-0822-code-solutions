/* exported getValue */
// 1. define a function with two parameter object
// 2. use object accessor to find value in object property
// 3. return value

function getValue(object, key) {
  var objValue = object[key];
  return objValue;
}
