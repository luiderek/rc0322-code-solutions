/* exported getKeys */

function getKeys(object) {
  const out = [];
  for (const key in object) {
    out.push(key);
  }
  return out;
}

// create empty output array
// iterate through the keys in the object
//    push the keys into the output array
// return array
