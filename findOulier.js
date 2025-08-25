function findOutliers(integers){

 let outlierValue;
 let evens = integers.filter(function (x) {
  return x % 2 === 0
 });

 let odds = integers.filter((x) => x % 2 !== 0);
   if(odds.length < evens.length){
    outlierValue = odds[0];
   }else{
    outlierValue = evens[0]
   }

 return outlierValue
}

let outlier = [2, 4, 0, 100, 4, 11, 2602, 36];
let outlier2 = [5,7,9,3,33,77, 2]
console.log(findOutliers(outlier2));
console.log(findOutliers(outlier))