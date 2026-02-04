function getIndexToIns(arr, num){
  let arrCopy = [...arr].sort((a,b) => a - b);
  const index = arrCopy.findIndex((value) => {
    return value > num
  })

  arrCopy.splice(index, 0, num)
  return arrCopy;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
