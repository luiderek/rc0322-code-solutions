/* exported filterOutNulls */

function filterOutNulls(values) {
  const out = [];
  for (const value of values) {
    if (value !== null) {
      out.push(value);
    }
  }
  return out;
}
