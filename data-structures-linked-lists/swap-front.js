/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const olddata = list.next.data;
  list.next.data = list.data;
  list.data = olddata;
  return list;
}
