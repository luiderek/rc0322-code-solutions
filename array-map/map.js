function map(array, transform) {
  const out = [];
  for (let i = 0; i < array.length; i++) {
    out.push(transform(array[i]));
  }
  return out;
}
