/* exported pick */

function pick(source, keys) {
  const out = {};
  for (const key in source) {
    if (keys.includes(key)) {
      if (source[key] !== undefined) {
        out[key] = source[key];
      }
    }
  }
  return out;
}

// create empty output object
// iterate through the keys in the source
//    if the iterated key is inside the list of keys,
//    and if the source of that key is not undefined
//      give the output object the key:value pair
// return output object
