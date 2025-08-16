function double(num) {
  return Promise.resolve(num * 2);
}

function square(num) {
  return Promise.resolve(num * num);
}

function failIfTooBig(num) {
  return new Promise((resolve, reject) => {
    if (num > 50) reject("Too big!");
    else resolve(num);
  });
}

//chain them together starting with the number 5 but if it fails, recover by returning "Recovered"

double(1).then(square).then(failIfTooBig).then(result => console.log(result)).catch((err) => {
  console.log("Error caught:", err);
  return "Resolved"
})