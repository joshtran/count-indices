function countLetters (sentence) {
  var allLetters = {};
  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence.charAt(i);

    if (letter === " ") {
      continue;
    }

    if(allLetters[letter] === undefined) {
      allLetters[letter] = String(i);
    } else {
      allLetters[letter] = allLetters[letter] + String(', ' + i)
    }
  }
  return allLetters;
}
var question = 'lighthouse in the house';
var finalQuestion = question.toLowerCase();
console.log(countLetters(finalQuestion));