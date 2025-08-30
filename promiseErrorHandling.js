Promise.resolve("start").then(val => {
  throw new Error("Oops!");
  return val;
}).then(val => console.log("will not run"))
.catch(err => console.log("Caught: ", err.message))
.then(() => console.log("Continues after error"));

//invastiage further