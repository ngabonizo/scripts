// function pyramid(pattern, row){
//   for(let i=0; i<row; i++){
//     let row = ''
//     for(let j=0; j<i; j++){
//       row +='* '
//     }
//     console.log(row)
//   }
// }
//
// console.log(pyramid('*', 5))


function pyramid(char, rows, inverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    let level = inverted ? rows - 1 - i : i;
    let spaces = rows - level - 1;
    let chars = 2 * level + 1;

    result += " ".repeat(spaces) + char.repeat(chars) + "\n";
  }

  return result;
}

console.log(pyramid('* ', 5, false))
