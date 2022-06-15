/* exported includes */

function includes(list, value) {

  // Is the first item it?
  if (list.data === value) {
    return true;
  }

  // Is the rest of the items it?
  // IDK how to structure the solution to only have one if check.
  while (list.next) {
    list = list.next;
    if (list.data === value) {
      return true;
    }
  }

  return false;
}
