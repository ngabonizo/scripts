function alphabetPositionRegex(text) {
  return text
    .toLowerCase()
    .match(/[a-z]/g)              // get only letters
    .map(ch => ch.charCodeAt(0) - 96)
    .join(' ');
}

// Example:
console.log(alphabetPositionRegex("The sunset sets at twelve o' clock."));
