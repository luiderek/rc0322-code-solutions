/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const currentVal = stack.pop();
    if (currentVal > max) {
      max = currentVal;
    }
  }
  return max;
}
