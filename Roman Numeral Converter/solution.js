function convertToRoman(num) {
  digits = {
    'thousands': ['M', 'M', 'M'],
    'hundreds': ['C', 'D', 'M'],
    'tens': ['X', 'L', 'C'],
    'ones': ['I', 'V', 'X'],    
  };
  
  function codeElems(elem, pos) {    
    switch (elem) {
      case '1':        
      case '2':
      case '3':
        console.log(digits[pos][0].repeat(elem));
        return digits[pos][0].repeat(elem);
      case '4':
        return digits[pos][0] + digits[pos][1];
      case '5':
        return digits[pos][1];
      case '6':        
      case '7':
      case '8':
        return digits[pos][1] + digits[pos][0].repeat(elem - 5);
      case '9':
        return digits[pos][0] + digits[pos][2];
    }
  }
  
  function toRoman(elem, index){
    switch (index) {
      case 0:
        return codeElems(elem, 'ones');
      case 1:
        return codeElems(elem, 'tens');
      case 2:
        return codeElems(elem, 'hundreds');
      case 3:
        return codeElems(elem, 'thousands');
    }
  }
  
  var numStr = num.toString()
  .split('')
  .reverse()
  .map(function(elem, index, arr){
    //console.log(elem, index);
    return toRoman(elem, index);
  })
  .reverse()
  .join('');
 return numStr;
}

convertToRoman(36);
