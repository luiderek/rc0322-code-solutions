/* exported difference */

function difference(first, second) {
  const out = [];
  for (const val of first) {
    if (!second.includes(val)) {
      out.push(val);
    }
  }
  for (const val of second) {
    if (!first.includes(val)) {
      out.push(val);
    }
  }
  return [...new Set(out)];
}

// create empty output array
// iterate through the values in first array
//  check if second array does not contain it
//    if it doesn't, append it to output array
// iterate through the values in the second array
//  check if the first array doesn't contain it
//    if it doesn't, append it to the output array
// turn output array into unique set, back to array
// return output array
