function factorial(n) {
  if (n === 0) return 1;
  if (factorial.cache[n]) return factorial.cache[n];

  factorial.cache[n] = n * factorial(n - 1);
  return factorial.cache[n];
}
factorial.cache = {};

console.log(factorial(5)); // 120
console.log(factorial(6)); // 720 (factorial(5) is reused from the cache)
console.log(factorial.cache); // { '1': 1, '2': 2, '3': 6, '4': 24, '5': 120, '6': 720 }