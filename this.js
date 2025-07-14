var strict = (function () {return !this; }()); //check if we're in strict mode or not
console.log(strict)


//Below are function that will demostrate how the 'this' keyword is affected by how a function is invoked

function checkThis() {
  console.log(this)
};
console.log(checkThis()) // this points to the window object in browsers or the global object in node or if we're in strict mode, this is undefined;

let object = {
  name: 'ngbo isaac',
  greet: function() {
    console.log(this)
  }
}
console.log(object.greet()) // this points to the object before the dot if a function is envoked with method invocation

function callMe(name) {
  this.n = name;
}

let me = new callMe('ngabo isaac');
console.log(me) // calling a function with 'new' creates a new object and 'this' inside the function refers to the newly created object

function show(){
  console.log(this);
};

const obj = {value: 4500};
show.call(obj)// 'this' is manually set to obj
show.apply(obj)// 'this' is manually set to obj
const boundShow = show.bind(obj);// 'this' is bound to obj 

let nameObject = {
  name: 'manzi ivan',
  greet: function() {
    console.log('outer this:', this.name)

    const inner = () => {
      console.log(this) // this should point to 'object'
      console.log('inner this',this.name) // 
    }
    inner();
  }
}

console.log(nameObject.greet()) // arrow function do not have their own 'this' context therefore they inherit the 'this' content from their sarrounding scope. In this case from the greet function.

nameObject = {
  name: 'ngabo isaac',
  outer: function() {
    function inner() {
        console.log(this);// this ->  global or window or undefined;
    }
    inner()
  }
}
console.log(nameObject.outer) // consoles the global (wondow) object

nameObject = {
  name: 'ngabo isaac',
  outer: function () {
    const that = this; // that variable containes the 'this' context

    function inner(){
      console.log(that.name) //  'this' context is set to the outer function 'this' context instead of the global (window) object 
                             // remeber that u can just use arrow functions
    }
    inner();
  }
}
console.log(nameObject.outer())