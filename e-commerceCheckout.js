// Mock APIs

function getUser(userId){
  return new Promise ((resolve) => setTimeout(() => resolve(
    {id: userId, name: 'Ngabo', zipCode: '250788' }
  ), 1000))
}

function getCart(userId) {
   return new Promise((resolve) => setTimeout(() => resolve(['Book', 'Laptop' , 'Telescope']), 1500));
}

function calculateShipping(cart, zipCode) {
  return cart.length * 2; //$2 per item
}

function placeOrder(cart, shipping) {
  return new Promise((resolve, reject) => setTimeout(() => {
    Math.random() > 0.3 ? resolve(true) : reject("Payment Error");
  }, 2000))
}


// write an async function checkout(userId) that:
// fetches the user and their cart in parallel
// uses the user's zip code and cart to calculate shipping
// places the order
// if successful, logs "Order placed for Alice. Items: Book,Pen,Notebook. Shipping: $6"
//if it fails(eg 'Payment Error'), retry up to 3 times before giving up.
//if it still fails after 3 retries, log: 'Order failed after 3 attempts: Payment Error
