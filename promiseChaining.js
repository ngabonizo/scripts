function fetchData() {
    return new Promise((resolve, reject) => {
        console.log('Fetching Data...');

        setTimeout(() => {
            let success = Math.random() > 0.3;

            if(success) {
                resolve({ name: 'Isaac', age: 25 });
            } else {
                reject("failed to fetch data");
            }
        }, 2000);
    });
}

fetchData().then(data => console.log('Data recieved: ', data)).catch(error => console.log("Error: ", error)).finally(() => console.log("Request complete."));

fetchData().then(data => {
    console.log("step 1: ", data);
    return "Process data...";
}).then(message => {
    console.log("step 2: ", message);
    return "Done";
}).then(final => {
    console.log("Step 3: ", final);
}).catch(err => console.error("Error in chain: ", err));