/* exported includes */

function includes(array, value) {
  for (const val of array) {
    if (val === value) {
      return true;
    }
  }
  return false;
}

// iterate through the input array
//    if any of the values are equal to the search value return true
// return false
