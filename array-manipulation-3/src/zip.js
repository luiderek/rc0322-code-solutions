/* exported zip */

function zip(first, second) {
  const out = [];

  const shortlength = Math.min(first.length, second.length);
  for (let i = 0; i < shortlength; i++) {
    out.push([first[i], second[i]]);
  }
  return out;
}

// create empty output array
// find the shorter of the two input arrays
// iterate from the index 0 to the length of the shorter array
//    push a subarray from the two arrays into the output array
// return output array
