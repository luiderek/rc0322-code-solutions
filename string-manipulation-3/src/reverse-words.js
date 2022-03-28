/* exported reverseWords */

function reverseWords(string) {
  const words = string.split(' ');

  function reverseWord(flipme) {
    return flipme.split('').reverse().join('');
  }

  const reversedWords = words.map(reverseWord, words);
  return reversedWords.join(' ');
}
