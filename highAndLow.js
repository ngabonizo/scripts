function highAndLow(numbers){
 
  if(numbers.length === 0) return numbers;
  
  const stringArray = [...num];
  let numbersArray = []; 
 let filtered =  stringArray.filter(value => value !== ' ').forEach((prop)=> {
   numbersArray.push(parseInt(prop))
 })
 const highest = Math.max.apply(null,numbersArray);
  const lowest = Math.min.apply(null,numbersArray);
  
  return `${highest} ${lowest}`;
 }

const num = "1 2 3 4 5";
console.log(highAndLow(num))