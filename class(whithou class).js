function Person(name){
return  this.name = name;
}

Person.prototype.greet = function () {
  return`Hi I am ${this.name}`;
};

let p = new Person ('Ngabo isaac');
console.log(p.greet())

function school(name){
 return this.name = name;
  
}

school.prototype.show = function() {
  return this.name + " is where i went highschool"
};

let sch = new school('Excella');
console.log(sch.show())