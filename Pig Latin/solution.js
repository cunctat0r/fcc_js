function translatePigLatin(str) {
  return str.split(' ').map(function(word){
    var match = word.match(/^([^aeiou]*).*/);
    var clusterLength = match[1].length;
    if (clusterLength > 0) {
      return word.slice(clusterLength) + word.slice(0,clusterLength) + 'ay';
    }
    return word + 'way'; 
  }).join(' ');
}

translatePigLatin("consonant");
