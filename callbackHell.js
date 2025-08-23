let stocks = {
  Fruits : ['strawberry', 'grapes', 'banana', 'apple'], 
  liquid : ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
};

let order = (fruit_name, call_production) => {

  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
   call_production() 
  }, 2000) 
  //call_production()
};


let production = () => {
  setTimeout(() => {
    console.log("production has started");

      setTimeout(() => {
        console.log('The fruit has been chopped');

        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

          setTimeout(() => {
            console.log("the machine is started");

            setTimeout(() => {
              console.log(`${stocks.holder[0]}`);

              setTimeout(() => {
                console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} are added on top`);

                setTimeout(() => {
                  console.log("Thanks for ordering")
                }, 3000)
              }, 1000)
            },2000)
          }, 1000)
        },1000)
      },2000)
  }, 0)
};

order(0, production);

