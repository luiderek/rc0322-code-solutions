/* exported toObject */

function toObject(keyValuePair) {
  const obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

// create an empty object
// assign an object property based on the first and second element of
//  the keyvaluepair array.
// return object
