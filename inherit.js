function inherit(p) {
  if (p == null) throw TypeError(); //p must be non-null object
  if(Object.create) return Object.create(p); // then just use it
   
  let t = typeof p;  // do more type checking
  if(t !== 'object' && t !== 'function') throw TypeError();
  function f() {};  // define a dummy constructor function
  f.prototype = p; // set its prototype property to p.
  return new f();  // use f() create on 'heir' of p.
};


//this inherit function simulates Object.create() 