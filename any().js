const promise1 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error from promise 1'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Success from promise 2'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 300, 'Error from promise 3'));

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(`Resolved with: ${value}`); // Output: Resolved with: Success from promise 2
  })
  .catch((error) => {
    console.error(`Rejected with: ${error.errors}`);
  });

  

  //if all promises reject, the catch block would be executed
  const promiseA = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error A'));
const promiseB = new Promise((resolve, reject) => setTimeout(reject, 200, 'Error B'));

Promise.any([promiseA, promiseB])
  .then((value) => {
    console.log(`Resolved with: ${value}`);
  })
  .catch((error) => {
    console.error(`Rejected with: ${error.errors}`); // Output: Rejected with: Error A,Error B
  });

  /**
   * In JavaScript, the Promise.any() static method takes an iterable of Promises as input and returns a single Promise. This returned Promise fulfills as soon as any of the input Promises fulfill, with the fulfillment value of that first fulfilled Promise. 
   
   * Conversely, the Promise.any() method only rejects if all of the input Promises reject. In this scenario, it rejects with an AggregateError, which contains an array of the rejection reasons from all the input Promises. If an empty iterable is passed to Promise.any(), it immediately rejects with an AggregateError

   promise2 resolves first, so Promise.any() fulfills with the value 'Success from promise 2'.
   */