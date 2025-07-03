function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}


function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}


function createPhoneNumber(numbers){
  return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}

function createPhoneNumber(numbers){
  var n = numbers;
  return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
}

function createPhoneNumber(numbers){
  const areaCode = numbers.slice(0, 3).join("");
  const firstThree = numbers.slice(3, -4).join("");
  const lastFour = numbers.slice(6).join("");
  return `(${areaCode}) ${firstThree}-${lastFour}`;
}


function createPhoneNumber(numbers){
  numbers.unshift("(");
  numbers.splice(4, 0, ")", " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}
//all these are different way to create the phone number format