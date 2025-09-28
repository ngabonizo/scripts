const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error in promise 2'));
const promise3 = Promise.resolve(42);

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    // Expected output:
    // [
    //   { status: 'fulfilled', value: 3 },
    //   { status: 'rejected', reason: 'Error in promise 2' },
    //   { status: 'fulfilled', value: 42 }
    // ]
  });


  

  /*
  The Promise.allSettled() method in JavaScript takes an iterable of Promises as input and returns a single Promise. This returned Promise fulfills after all of the input Promises have "settled," meaning they have either successfully fulfilled or been rejected. 

  Here's how it works:

Input: You provide Promise.allSettled() with an array or other iterable of Promises.

Parallel Execution: The Promises within the iterable are executed concurrently.

Waiting for Settlement: Promise.allSettled() waits for every single Promise in the input iterable to reach a "settled" state (either fulfilled or rejected). Unlike Promise.all(), it does not short-circuit and reject immediately if one of the input Promises rejects.

Fulfillment Value: Once all input Promises have settled, the Promise returned by Promise.allSettled() fulfills with an array of objects. Each object in this array describes the outcome of a corresponding input Promise.

Fulfilled Promise: If an input Promise fulfilled, its corresponding object in the result array will have a status property set to 'fulfilled' and a value property containing the resolved value of that Promise.

Rejected Promise: If an input Promise rejected, its corresponding object will have a status property set to 'rejected' and a reason property containing the rejection reason (error) of that Promise.

Key Advantages:

Comprehensive Outcome Reporting: You get a complete picture of the outcome of all asynchronous operations, regardless of individual success or failure.

Resilience: It allows you to process successful results even when some operations fail, providing more robust error handling and partial data recovery.

No Short-Circuiting: It's ideal when you need to ensure all tasks complete and gather their individual statuses, even if some encounter errors.
  */