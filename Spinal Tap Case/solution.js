function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(/[\_\ ]/).map(function(elem){
    return elem.replace(/[A-Z]/g, function(match, offset, string){
      console.log(match, offset, string);
      return (offset ? '-' : '') + match.toLowerCase();
    });
  }).join('-');
}

spinalCase('This Is Spinal Tap');