/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const insert = new LinkedList(value);
  const pushback = list.next;

  list.next = insert;
  list.next.next = pushback;

  return list;
}
