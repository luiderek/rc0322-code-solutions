/* exported defaults */

function defaults(target, source) {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}

// iterate through the keys in source
//   if the target doesn't have an undefined property of that key
//    copy over the source value to target
