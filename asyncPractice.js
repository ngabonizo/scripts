function giveData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45)
    })
  })
};

function getData(value) {
  let result = value * 500;
  return result;
}

function display(res){
  console.log(`Display: ${res}`)
}

giveData().then(getData).then(display)
