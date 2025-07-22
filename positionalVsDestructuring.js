function introduction(name, age, location){
  console.log(`Hi?, My name is ${name} and am ${age} year old. I come from place called ${location}`);
}

console.log(introduction( 'Ngabo Isaac',200, 'Gasabo'));
// function arguments must be in the right position both in function arguments and function call


function intro({age, name, location}){
   console.log(`Hi?, My name is ${name} and am ${age} year old. I come from place called ${location}`);
}

console.log(intro({location: 'Gasabo', name: 'Ngabo Isaac', age: 200}))

//object destructuring allow unordered access to function arguments