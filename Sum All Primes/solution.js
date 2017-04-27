function sumPrimes(num) {
  function isPrime(num1) {
    for (var i = 2; i < num1; i++) {
      if (num1 % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  var sum = 2;   
  for (var number = 3; number <= num; number++) {
    if (isPrime(number) === true) {
      sum += number;
    } 
  }
  return sum;
}

sumPrimes(10);
