const isCleanlyNested = a => a.every(b => a[0][0] ? b[0] && isCleanlyNested(b) : !b[0]);
// or
function isCleanlyNested(xs) {
  return xs.every(child => child.length === 0) || (xs.every(child => child.length > 0) && xs.every(isCleanlyNested));
}