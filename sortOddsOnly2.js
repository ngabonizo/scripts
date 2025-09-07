function sortArray(array) {
  if(array.length == 0) {
    return array;
  }

  for(var i=0;i<array.length-1;i++)
  {
    for(var j = i; j < array.length; j++)
    {
      if((array[i] != 0) && (array[i] % 2 != 0) &&
        (array[j] != 0) && (array[j] % 2 != 0))
        {
          if(array[i] > array[j])
          {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
    }
  }
  
  return array;
}