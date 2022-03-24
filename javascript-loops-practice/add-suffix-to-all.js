/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const out = [];
  for (const word of words) {
    out.push(word + suffix);
  }
  return out;
}
