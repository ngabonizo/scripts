function getWeather() {
  return new Promise(function(resolve, reject){
    setTimeout(()=> {
      resolve('Windy')
    },1000)
  })
}

function getWeatherStatus(weather){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      switch(weather){
        case 'Sunny':
          resolve('Its sunny today');
          break
          case 'Cloudy':
            resolve('Its cloudy today');
            break
            case 'Rainy':
              resolve('Its rainy today');
              break
              default: 
              reject('NO WEATHER STATUS FOUND')
      }
    }, 1000)
  })
} 

function onSuccess(data){
  console.log(`Success ${data}`)
}

function onError(error){
  console.log(`Error: ${error}`)
};

getWeather().then(getWeatherStatus).then(onSuccess, onError)