function permutations(string) {
  var result = [ ];

string = string.replace(/\D/g, '');

  if (string.length === 1) {
      return string;
  } else {
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var otherChar = string.substring(0, i) + string.substring(i + 1);
      var otherPermutations = permutations(otherChar);

      for (var j = 0; j < otherPermutations.length; j++) {
        result.push(firstChar + otherPermutations[j]);
      }
    }

    try {
      if(string == "") throw "Input is empty!";
    }
    catch(err) {
      console.log(err);
    }

    return result;
  }
}

console.log(permutations("123"));
console.log(permutations("1a2v3"));
