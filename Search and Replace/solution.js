function myReplace(str, before, after) {
  return str.split(' ').map(function(elem){
    if (elem === before) {
      if (elem[0] === elem[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
      }
      return after;
    }
    return elem;
  }).join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");