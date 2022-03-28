/* exported reverseWords */

function reverseWords(string) {
  const words = string.split(' ');

  function reverseWord(flipme) {
    return flipme.split('').reverse().join('');
  }

  const reversedWords = words.map(reverseWord, words);
  return reversedWords.join(' ');
}

// seperate the words into an array
// write a function that flips words arounds
// call that function onto each word in the array
// put the array back together with spaces in between
