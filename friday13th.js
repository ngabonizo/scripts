function killcount(counselors, jason) {
  let arr = [];
  for(let i=0; i<counselors.length; i++){
    if(counselors[i][1] < jason){
      arr.push(counselors[i][0]);
    }
  }
  return arr;
}

function killcount2(counselors, jason){
 return counselors.filter(a => a[1] < jason).map(val => val[0])
}