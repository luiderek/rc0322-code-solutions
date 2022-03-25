/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// first check if they are the same length
// iterate through each index
//    if any inequalities show up return false
// if nothing is unequal, it must be equal
