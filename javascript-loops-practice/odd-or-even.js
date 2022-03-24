/* exported oddOrEven */

function oddOrEven(numbers) {
  const out = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      out.push('even');
    } else if (num % 2 === 1) {
      out.push('odd');
    }
  }
  return out;
}
