let data = [1,2,3,'string',4];

for(let i=0; i<data.length; i++){
   try{
    if(typeof data[i] === 'string') throw new TypeError('strings not allowed');
    console.log(data[i])
   }
   catch(e){
    data[i] = 4444;
   }finally{
    if(data[i] === 4444) console.log(data[i]);
   }
}
