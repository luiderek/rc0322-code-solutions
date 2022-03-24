/* exported filterOutStrings */

function filterOutStrings(values) {
  const out = [];
  for (const value of values) {
    if (typeof value !== 'string') {
      out.push(value);
    }
  }
  return out;
}
