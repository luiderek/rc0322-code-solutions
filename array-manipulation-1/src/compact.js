/* exported compact */

function compact(array) {
  const out = [];
  const forbidden = [false, null, NaN, 0, -0, undefined, ''];
  for (const value of array) {
    if (!forbidden.includes(value)) {
      out.push(value);
    }
  }
  return out;
}

// specs:
// omits ( false null NaN 0 -0 undefined "" ) from arrays
// maintains order

// make empty output array
// iterate through values with for loop
//   if it is not equal to any forbidden value,
//      append to array
// return output array
