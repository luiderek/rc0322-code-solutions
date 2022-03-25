/* exported ransomCase */

function ransomCase(string) {
  let out = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      out += string[i].toLowerCase();
    } else {
      out += string[i].toUpperCase();
    }
  }
  return out;
}

// make empty output string
// iterate through each letter of the string
//    if its an even index concat the lowercase
//    else concat the uppercase version
// return output string
