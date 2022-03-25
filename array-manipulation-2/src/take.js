/* exported take */

function take(array, count) {
  const out = [];
  if (count >= array.length) {
    return array;
  }
  for (let i = 0; i < count; i++) {
    out.push(array[i]);
  }
  return out;
}

// create empty output array
// if it wants more than the array already contains,
//    return the whole array
// use for loop to iterate i count times
//    append the array at index i to output array
// return output array
