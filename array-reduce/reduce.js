function reduce(array, reducer, initialValue) {
  let output = initialValue;
  for (let i = 0; i < array.length; i++) {
    output = reducer(output, array[i]);
  }
  return output;
}
