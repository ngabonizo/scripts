function endsWith(str, targetStr) {
  if(targetStr.length > str.length) throw Error('targetString.length > str.length');
 
for(let i=0; i<targetStr.length; i++){
    let strIndex = str.length - 1 - i;
    let targetStrIndex = targetStr.length - 1 - i;

    if(targetStrIndex[i] !== strIndex[i]) return false
  }
  return true

}

let string1 = 'to school in India';
let string2 = 'Manzi Ivan went to school in India'
console.log(endsWith(string2, string1))
