/* exported titleCase */

function titleCase(title) {
  const minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const exceptionWords = ['javascript', 'api'];

  function capitalizeFirst(string) {
    if (exceptionWords.includes(string.toLowerCase())) {
      if (string.toLowerCase() === 'javascript') {
        return 'JavaScript';
      }
      if (string.toLowerCase() === 'api') {
        return 'API';
      }
    }
    const output = string.toLowerCase().split('');
    output[0] = output[0].toUpperCase();
    return output.join('');
  }

  function capitalizeHypenated(string) {
    const output = string.toLowerCase().split('-');
    const capOutput = output.map(capitalizeFirst, output);
    return capOutput.join('-');
  }

  function properCaps(string) {
    if (minorWords.includes(string.toLowerCase())) {
      return string.toLowerCase();
    } else if (string.includes('-')) {
      return capitalizeHypenated(string);
    } else {
      return capitalizeFirst(string);
    }
  }

  const words = title.split(' ');
  const properCapWords = words.map(properCaps, words);

  // the first word ought to be capitalized
  properCapWords[0] = capitalizeFirst(words[0]);

  // the first words following a colon ought to be capitalized
  for (let i = 0; i < properCapWords.length; i++) {
    if (properCapWords[i].includes(':')) {
      properCapWords[i] = capitalizeFirst(properCapWords[i].slice(0, properCapWords[i].length - 1)) + ':';
      properCapWords[i + 1] = capitalizeFirst(properCapWords[i + 1]);
    }
  }

  return properCapWords.join(' ');
}
