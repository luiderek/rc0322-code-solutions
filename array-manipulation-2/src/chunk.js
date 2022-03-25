/* exported chunk */

function chunk(array, size) {
  const out = [];
  if (size !== 0) {
    for (let i = 0; i < array.length; i += size) {
      out.push(array.slice(i, i + size));
    }
  }
  return out;
}

// create empty output array
// loop initialized with i=0, incremented by size, until i >= array length
//    push slices of the chunk size to the output array
// return output array
