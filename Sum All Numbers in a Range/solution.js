function sumAll(arr) {
  var first = Math.min(arr[0], arr[1]);
  var second = Math.max(arr[0], arr[1]);
  var newArr = [];
  
  for (var i = first; i <= second; i += 1) {
    newArr.push(i);
  }
  
  return newArr.reduce(function(a, b) {
    return a + b;
  }, 0);
}

sumAll([1, 4]);