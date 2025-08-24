function alphabetPosition(text) {
   if(typeof text !== 'string') return '';

   let result = [];
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';

  for(let i=0; i< text.length; i++){
   let char = text[i].toLowerCase();
   
   if(alphabets.includes(char)){
        result.push(alphabets.indexOf(char) + 1);
   }
  }
return result.join(' ')
}

let string = 'god of the universe';
let string2 = 'Dont worry'
let string3 = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(string));
console.log(alphabetPosition(string2))
console.log(alphabetPosition(string3))