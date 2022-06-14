/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() !== undefined) {
    let recent = queue.dequeue();
    while (recent >= queue.peek()) {
      queue.enqueue(recent);
      recent = queue.dequeue();
    }
    return recent;
  }
}
