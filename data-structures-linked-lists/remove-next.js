/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    list.next = list.next.next;
  }
}
