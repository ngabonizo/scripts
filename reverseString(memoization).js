function reverseString(str) {
  reverseString.cache = reverseString.cache || {};
  if (reverseString.cache[str]) return reverseString.cache[str];

  const reversed = str.split('').reverse().join('');
  reverseString.cache[str] = reversed;
  return reversed;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("hello")); // "olleh" (from cache)
console.log(reverseString.cache); // { 'hello': 'olleh', 'world': 'dlrow' }