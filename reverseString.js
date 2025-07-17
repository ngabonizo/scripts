function reverseWords(str) {
  if(typeof str !== 'string') throw new Error('input must be a string');

    let splitStringArray = str.split(' ');
    let nestedStringArray = [];
    for(let i=0; i< splitStringArray.length; i++){
      nestedStringArray.push(splitStringArray[i].split('').reverse()) 
    }

    let sentence = nestedStringArray.map(arr => arr.join(''));
    return sentence.join(' ');


}
let s = 'I am going to school';
console.log(reverseWords(s))