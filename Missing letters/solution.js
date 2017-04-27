function fearNotLetter(str) {
  var beginCharCode = str.charCodeAt(0);
  for (var i = 0; i < str.length; i++){
    var currentCharCode = str.charCodeAt(i);
    var estimatedCharCode = beginCharCode + i;
    if (currentCharCode != estimatedCharCode) {
      return String.fromCharCode(estimatedCharCode);
    }
  }
  return undefined;
}

fearNotLetter("abce");
