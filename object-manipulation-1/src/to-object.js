/* exported toObject */
// 1. define a function with one parameter array
// 2. assign a new object variable
// 3. use bracket notation to add property and value & access using array at index to property and value
// 4. return value

function toObject(keyValuePair) {
  var objValue = {};
  objValue[keyValuePair[0]] = keyValuePair[1];
  return objValue;
}
