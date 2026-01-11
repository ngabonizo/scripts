function truncateString(str, num){
   
  if(str.length === 0) return '';
  if(str.length <= num) return str;

let newStr = '';

  for(let i=0; i<num; i++) newStr += str[i];
  return newStr + '...';
}

// or a more efficient method

function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}

// or even shorter:
const truncateString = (str, num) => 
    str.length <= num ? str : str.slice(0, num) + '...';


// even better
 function truncateString(str, num){
  if(str.length === 0) return '';
  if(str.length <= num) return str;
  let newStr = '';
  for(let i=0; i<num; i++) newStr += str[i];
  return newStr + '...';
}

console.log(truncateString('ngaboIsaac', 4));
console.log(truncateString('ngaboIsaac', 0));
console.log(truncateString('ngaboIsaac', 20));
console.log(truncateString('', 5))
