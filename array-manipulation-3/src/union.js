/* exported union */

function union(first, second) {
  return [...new Set([...first, ...second])];
}

// i think concatenating the two then doing a unique filter would do it
// concatenating might not be the right word for it, appending the arrays?
