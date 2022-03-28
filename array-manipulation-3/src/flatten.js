/* exported flatten */

function flatten(array) {
  const out = [];
  for (const entry of array) {
    if (Array.isArray(entry)) {
      for (const content of entry) {
        out.push(content);
      }
    } else {
      out.push(entry);
    }
  }
  return out;
}

// create an output array
// iterate through the input array
//    if the value in the input array is an array
//      iterate through that array, and push everything into output
//    otherwise just push straight to output
// return output
