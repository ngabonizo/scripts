function possiblyPerfect(key, answers) {
  let canAllBeCorrect = true;
  let canAllBeWrong = true;

  for (let i = 0; i < key.length; i++) {
    if (key[i] === "_") continue; // skip incomplete questions

    if (key[i] !== answers[i]) {
      canAllBeCorrect = false;
    }
    if (key[i] === answers[i]) {
      canAllBeWrong = false;
    }
  }

  return canAllBeCorrect || canAllBeWrong;
}

console.log(possiblyPerfect(["A","_","C","_","B"], ["A","D","C","E","B"])); // true
console.log(possiblyPerfect(["B","_","B"], ["B","D","C"])); // false
console.log(possiblyPerfect(["T","_","F","F","F"], ["F","F","T","T","T"])); // true
console.log(possiblyPerfect(["B","A","_","_"], ["B","A","C","C"])); // true
console.log(possiblyPerfect(["A","B","A","_"], ["B","A","C","C"])); // true
console.log(possiblyPerfect(["A","B","C","_"], ["B","A","C","C"])); // false
console.log(possiblyPerfect(["B","_"], ["C","A"])); // true
console.log(possiblyPerfect(["B","A"], ["C","A"])); // false
console.log(possiblyPerfect(["B"], ["B"])); // true
console.log(possiblyPerfect(["_"], ["B"])); // true