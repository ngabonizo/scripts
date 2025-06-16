function swapCase(string){

const splitString = string.split('');
let value;
for(let i=0; i<splitString.length; i++){
  if(splitString[0]>= 'a' && splitString[0]<='z'){
   value = splitString.splice(0,1);
   splitString.splice(0,0,value[0].toUpperCase());
  }
  else if( splitString[i] >= 'a' && splitString[i]<='z' && splitString[i-1]=== ' '){
   value =  splitString.splice(i,1);
   splitString.splice(i,0,value[0].toUpperCase())
  }
}
 console.log(string);
 return splitString.join('');
};

let string = 'i am going to school';
console.log(swapCase(string))