function swapCase(string){

let result = [];
const str = string.split('');

  for(let i=0; i<str.length; i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
   result.push(str[i].toUpperCase())
    }else if(str[i] >= 'A' && str[i]<= 'Z'){
      result.push(str[i].toLowerCase());
    }else{
      result.push(str[i]);
    }
 
    }
 return result.join('')
 
};

let string = 'The Quick Brown Fox';
console.log(swapCase(string));