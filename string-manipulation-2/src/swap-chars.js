/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const arrstring = string.split('');
  [arrstring[firstIndex], arrstring[secondIndex]] =
  [arrstring[secondIndex], arrstring[firstIndex]];
  return arrstring.join('');
}

// googled js simultaneous assignment for the [a,b] = [1,2] syntax
// maybe using array methods is against the intention of string manipulation
// but arrays are nicer to play with
