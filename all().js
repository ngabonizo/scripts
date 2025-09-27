let promise1 = Promise.resolve(3);
let promise2 = 30; // non promise value resolve as a fulfilled promise;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
});

Promise.all([promise1, promise2, promise3])
.then((value) => {
  console.log(value);
})
.catch((error) => {
  console.error(error);
});

//Promise.all() takes an iterable of promises as input and return a single Promise.
/*

Fulfillment: It fulfills when all of the input Promises fulfill. The fulfillment value is an array containing the fulfillment values of the input Promises, in the same order as the input iterable. If an empty iterable is passed, the returned Promise immediately fulfills with an empty array.

Rejection: It rejects as soon as any of the input Promises rejects. The rejection reason of the Promise.all() Promise is the rejection reason of the first Promise in the input iterable that rejects.

In this example, Promise.all() waits for promise1, promise2, and promise3 to all fulfill. Once they do, the then callback is executed with an array containing their respective fulfillment values. If any of these promises were to reject, the catch block would be executed with the first rejection reason.
*/