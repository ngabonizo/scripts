function createPhoneNumber(numbers){
  if(number.length === 0) return [];
  
   let [a,b,c,d,e,f,g,h,i,j] = numbers;
  let phoneNumber = `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
  return phoneNumber.toString();

  //used array destructuring to easily access array elements 
}

let num = [0,7,8,8,6,5,3,8,3,4];
console.log(createPhoneNumber(num));