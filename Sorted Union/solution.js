function uniteUnique(arr) {
  var newArr = arguments[0];
  
  var values = [];
  for (var i = 1; i < arguments.length; i++){
    values = values.concat(arguments[i]);
  }
  
  return newArr.concat(values.filter(function(elem){
      return newArr.indexOf(elem) == -1;
  }));
        
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);