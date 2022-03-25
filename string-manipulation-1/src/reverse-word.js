/* exported reverseWord */

function reverseWord(word) {
  let out = '';
  for (let i = word.length - 1; i >= 0; i--) {
    out += word[i];
  }
  return out;
}

// create empty output string
// iterate from the last character to the first
//  concatenating each letter to the output string
// returning output string
