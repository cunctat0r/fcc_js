function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.reduce(function(prev, cur, index, arr){
    if (arr[index].hasOwnProperty(pre) && arr[index][pre]) {
      return prev && true;
    } else {
      return prev && false;
    }    
  }, true);
  //return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
