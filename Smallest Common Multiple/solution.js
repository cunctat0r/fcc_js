function smallestCommons(arr) {
  
  function gcd(a, b) {
    if (a == b) {
      return a;
    } else if (a > b) {
      return gcd(a - b, b);
    } else {
      return gcd(a, b - a);
    }
  }
  
  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  
  var newArr = [];
  arr.sort(function(a, b){
    return a - b;
  });
  
  for (var i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  
  return newArr.reduce(function(prev, cur, index, arr){
    return lcm(prev, cur);
  }, 1);
}


smallestCommons([1,5]);