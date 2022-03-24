/* exported tail */

function tail(array) {
  const out = [];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      out.push(array[i]);
    }
  }
  return out;
}

// initialize empty array as return variable
// if the array has at least 2 entries
//    iterate from the second index up to the last,
// append each element into the output array
// return output array
