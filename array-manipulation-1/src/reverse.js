/* exported reverse */

function reverse(array) {
  const out = [];
  for (let i = array.length - 1; i >= 0; i--) {
    out.push(array[i]);
  }
  return out;
}

// create empty output array
// iterate from the last index of an array to the 0th index
//   push the iterated values into the output array
// return output array
