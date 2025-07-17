function findNthOccurrence(substring, string, n) {
  let count = 0;

  for (let i = 0; i <= string.length - substring.length; i++) {
    if (string.substr(i, substring.length) === substring) {
      count++;
      if (count === n) {
        return i;
      }
    }
  }

  return -1;
}

const str = "This is an example. Return the nth occurrence of example in this example string.";
const sub = "example";

console.log(findNthOccurrence(sub, str, 1)); // 11
console.log(findNthOccurrence(sub, str, 2)); // 49
console.log(findNthOccurrence(sub, str, 3)); // 65
console.log(findNthOccurrence(sub, str, 4));