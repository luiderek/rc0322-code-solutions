/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    if (!seen[word]) {              // 3 * n = O(3n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 1 * n = O(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 1 * n2 = O(n2)
      c++                           // 2 * n2 = O(n2)
    ) {
      const comparing = words[c];   // 1 * n2 = O(n2)
      if (comparing === word) {     // 2 * n2 = O(2n2)
        isUnique = false;           // 1 * n2 = O(n2)
      }
    }
    if (isUnique) {                 // 2 * n = O(2n)
      unique[unique.length] = word; // 2 * n = O(2n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
