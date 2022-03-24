/* exported countdown */

function countdown(number) {
  const out = [];
  for (let i = number; i >= 0; i--) {
    out.push(i);
  }
  return out;
}
