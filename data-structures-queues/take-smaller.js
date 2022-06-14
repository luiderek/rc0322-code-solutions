/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (queue.peek() !== undefined) {
      const second = queue.dequeue();
      queue.enqueue(Math.max(first, second));
      return Math.min(first, second);
    } else {
      return first;
    }
  }
}
