/* exported getValues */

function getValues(object) {
  const out = [];
  for (const key in object) {
    out.push(object[key]);
  }
  return out;
}

// create empty output array
// iterate through object keys
//    push values of the keys into array
// return array
