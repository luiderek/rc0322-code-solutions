/* exported removeTail */

function removeTail(list) {
  // Break if the list is a single element.
  if (!list.next) {
    return;
  }
  // Stop at the second to last node.
  while (list.next.next) {
    list = list.next;
  }
  // Delete the last node.
  list.next = null;
}
