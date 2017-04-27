function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);
  arr = collection.filter(function(elem){
    var res = true;
    srcKeys.forEach(function(srcKey, index, array){
     res &= (elem.hasOwnProperty(srcKey) && elem[srcKey] == source[srcKey]);
    });
    return res;
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });