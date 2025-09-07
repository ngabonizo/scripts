function toWeirdCase(str) {
  return str
    .split(" ") // split into words
    .map(word =>
      word
        .split("") // split word into characters
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("") // rejoin transformed characters
    )
    .join(" "); // rejoin transformed words
}
 
console.log(toWeirdCase('amahoro stadium'))