/* exported initial */

function initial(array) {
  const out = [];
  for (let i = 0; i < array.length - 1; i++) {
    out.push(array[i]);
  }
  return out;
}

// create empty output array
// iterate from the first index to the second to last index of the input array
//   push each into the output array
// return the ouput array
