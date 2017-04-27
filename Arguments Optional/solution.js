function addTogether() {
  if (arguments.length == 1) {
    if (typeof arguments[0]  === 'number') {
      var val = arguments[0];
      return (function func(num){
      if (typeof num  === 'number') {
        return val + num;
      }      
    });
    }
  } else if (arguments.length == 2) {
    if ((typeof arguments[0]  === 'number') && (typeof arguments[1]  === 'number')) {
      return arguments[0] + arguments[1];
    }
  }      
  return undefined;
}
addTogether(2,3);