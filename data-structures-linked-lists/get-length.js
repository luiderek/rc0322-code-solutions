/* exported getLength */

function getLength(list) {
  let count = 1;
  // I tried and it's impossible to have an empty linked list,
  // So counting at one shouldn't be a big problem.
  while (list.next !== null) {
    count++;
    if (list.next !== null) {
      list = list.next;
    }
  }
  return count;
}
