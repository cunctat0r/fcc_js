function diffArray(arr1, arr2) {
  return  arr1.concat(arr2).filter(function(elem){
    return !(arr1.indexOf(elem) !== -1 && arr2.indexOf(elem) !== -1);
  });    
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);