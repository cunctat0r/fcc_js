function convertHTML(str) {
  // &colon;&rpar;
  var code = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return str.replace(/[&<>\"\']/g, function(match, offset, string){
    return code[match];
  });
}

convertHTML("Dolce & Gabbana");