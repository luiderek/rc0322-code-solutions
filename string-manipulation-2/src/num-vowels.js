/* exported numVowels */

function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (const letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

// create a list of vowels
// create a counter variable
// iterate through the letters of the string
//    if any of them are vowels increment counter
// return counter
