/* exported capitalizeWords */

function capitalizeWords(string) {

  function capWord(word) {
    let out = '';
    out += word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      out += word[i].toLowerCase();
    }
    return out;
  }

  const splitWords = string.split(' ');
  const capSplitWords = splitWords.map(capWord);
  return capSplitWords.join(' ');
}

// use previous exercise as helper function
// split the string into array of individual word strings
// apply the helper function to each member of the array
// rejoin the string
// return capitalized words
