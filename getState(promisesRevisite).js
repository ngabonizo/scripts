// Excellent question — this is a great exercise for understanding how to detect a promise’s state (pending, fulfilled, or rejected) in JavaScript.

// Let’s go step by step 👇

// ✅ The Challenge

// You need an async function getState(promise) that returns one of:

// "pending"

// "fulfilled"

// "rejected"

// JavaScript unfortunately doesn’t provide a direct built-in way to check a promise’s internal state.
// But we can infer it using Promise.race().


// How It Works

// We create a unique value using Symbol("unique").

// Promise.race([promise, unique]) will resolve with whichever settles first:

// If promise fulfills first → we get "fulfilled".

// If promise rejects first → we catch it → "rejected".

// If promise doesn’t settle (still pending) → the race resolves immediately with unique → "pending".




function getState(promise) {
   const unique = Symbol("unique");

  return Promise.race([promise, unique])
    .then(value => (value === unique ? "pending" : "fulfilled"))
    .catch(() => "rejected");
}

(async () => {
  const p1 = Promise.resolve("done");
  const p2 = Promise.reject("error").catch(() => {}); // to avoid unhandled rejection warning
  const p3 = new Promise(() => {}); // never resolves

  console.log(await getState(p1)); // "fulfilled"
  console.log(await getState(p2)); // "rejected"
  console.log(await getState(p3)); // "pending"
})();