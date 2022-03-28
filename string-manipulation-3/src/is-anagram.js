/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const firstNoSpaces = firstString.split(' ').join('');
  const firstSorted = firstNoSpaces.split('').sort().join('');

  const secondNoSpaces = secondString.split(' ').join('');
  const secondSorted = secondNoSpaces.split('').sort().join('');

  return firstSorted === secondSorted;
}

// so the question is can a sorted version of two strings equal each other?
// first ignore spaces on the words
// then using array methods sort them
