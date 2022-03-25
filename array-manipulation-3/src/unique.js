/* exported unique */

function unique(array) {
  return [...new Set(array)];
}

// using the fact that sets must be unique,
// convert array to a set
// convert set into array with the spread operator
// return array
