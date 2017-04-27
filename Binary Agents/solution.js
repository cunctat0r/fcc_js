function binaryAgent(str) {
  function fromBin(elem){
    return elem.split('').reverse().reduce(function(prev, cur, index, array){
      return prev + parseInt(cur) * Math.pow(2, index);
    },0);
  }
  
  return str.split(' ').map(function(elem){
    return String.fromCharCode(fromBin(elem));
  }).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");