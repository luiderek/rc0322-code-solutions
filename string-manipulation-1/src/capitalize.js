/* exported capitalize */

function capitalize(word) {
  let out = '';
  out += word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    out += word[i].toLowerCase();
  }
  return out;
}

// create empty output string
// concat the string with a capitalized first letter of target string
// iterate through the remaining letters, with lowercase versions
// return string
