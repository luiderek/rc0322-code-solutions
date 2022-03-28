/* exported intersection */

function intersection(first, second) {
  const out = [];
  for (const value of first) {
    if (second.includes(value)) {
      out.push(value);
    }
  }
  return out;
}

// have empty output array
// iterate through the values in the first list
//    check if the second list includes those values
//    if anything does overlap append to output array
// return the output array
