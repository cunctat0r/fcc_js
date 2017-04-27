function sumFibs(num) {
  var sum = 1;
  var fib = [];
  fib[0] = 1;
  fib[1] = 1;
  i = 1;
  while (fib[i] <= num) {
    if (fib[i] % 2 == 1) {
      sum += fib[i];
    } 
    i++;
    fib[i] = fib[i - 1] + fib[i - 2];
    
  }
  return sum;
}


sumFibs(4);