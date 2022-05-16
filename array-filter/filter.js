// use numbers from index.html

function filter(array, predicate) {
  const out = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      out.push(array[i]);
    }
  }
  return out;
}
