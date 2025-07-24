function max(...args) {
  return args.reduce((max, val) => val > max ? val : max, Number.NEGATIVE_INFINITY);
}

console.log(max(1,2,3,4,5))