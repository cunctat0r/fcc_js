function pairElement(str) {
  var code = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A'
  };
  var res = [];
  str.split('').map(function(elem){
    console.log(elem, code[elem]);
    res.push([elem, code[elem]]);
  });
  return res;
}

pairElement("GCG");