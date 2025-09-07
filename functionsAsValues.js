function add(x,y){ return x + y};
function subtract(x,y){ return x - y};
function multiply(x,y){ return x * y};
function divide(x,y){ return x / y};

function operate(operator, operand1, operand2){
  return operator(operand1, operand2)
};

//we could invoke this function like this to compute the value (2+3) + (4*5);
let i = operate(add, operate(add, 2,3),  operate(multiply, 4,5));

//for the sake of the example, we implement the simple function again
//this time using function leterals within an object literal;
let operators = {
  add: function(x,y){ return x+y},
  subtract: function(x,y){ return x-y},
  multiply: function(x,y){ return x*y},
  divide: function(x,y){ return x/y},
  pow: Math.pow //works for predefined functions too
}

//this functin take the same of an operator, looks up that operator
//in the object, and then invokes it on the supplied operands. Note
//the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2){
  if(typeof operators[operation] === 'function')return operators[operation](operand1, operand2);
  else throw "unknown operator";
}

//compute the value ('Hello' + " " + "world") like this:
let j = operate2("add", "hello", operate2('add', ' ',"world"));
//Using the predefined Math.pow() function:
let k = operate2("pow", 10, 2);