const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved!"), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved!"), 200));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 3 rejected!"), 300));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(`The race winner is: ${value}`))
  .catch((error) => console.error(`The race ended in error: ${error}`));

  /*
  The Promise.race() method in JavaScript takes an iterable (like an array) of Promises as input and returns a single Promise. This returned Promise settles with the eventual state (either fulfilled or rejected) of the first Promise in the input iterable that settles.

  Here's a breakdown of how it works:

  Input: You provide Promise.race() with an array or other iterable containing multiple Promises.

  Racing: All the Promises in the input iterable begin executing concurrently, effectively "racing" each other to settle.

First to Settle Wins: The Promise.race() method waits for the very first Promise in the input iterable to either fulfill (resolve) or reject.

Outcome Adoption:

If the first Promise to settle fulfills, the Promise returned by Promise.race() will also fulfill with the same value.

If the first Promise to settle rejects, the Promise returned by Promise.race() will also reject with the same reason.

Ignoring Others: Once one Promise settles, the outcomes of all other Promises in the input iterable are ignored by Promise.race().

In this example, promise2 will resolve first (after 200ms), so the Promise.race() method will resolve with the value "Promise 2 resolved!". The outcomes of promise1 and promise3 will be disregarded.

 Common Use Cases:

Implementing Request Timeouts: You can race an API call Promise against a timeout Promise, rejecting if the API takes too long.

Fetching from Multiple Sources: You can fetch data from multiple sources and use the result from the fastest one.

Optimizing Performance: In scenarios where you only need the quickest result among several asynchronous operations.
  */