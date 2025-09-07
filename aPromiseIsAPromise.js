function promiseHellowWorld() {
    return new Promise((resolve, reject) => {
        resolve('Hello World!');
    })
}

promiseHellowWorld().then(message => console.log(message))