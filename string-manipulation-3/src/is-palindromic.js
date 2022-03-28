/* exported isPalindromic */

function isPalindromic(string) {
  string = string.split(' ').join('');
  return string === string.split('').reverse().join('');
}

// see if the string is the same as itself in reverse when spaces are stripped
