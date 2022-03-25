/* exported invert */

function invert(source) {
  const out = {};
  for (const key in source) {
    out[source[key]] = key;
  }
  return out;
}

// create empty output object
// iterate through the keys in source
//    assign the key as the value to a property named the old value
// return object
