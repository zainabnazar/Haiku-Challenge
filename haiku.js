// Import syllables library
const syllables = require('syllables');

function checkLine(sentence) {
  var sentences = sentence.replace(/[^a-zA-Z /]/g, "").split("/");
 
 

  if (sentences.length > 3) {
    return false;
  } else {
    let results = sentences.map(function (val, key) {
      count = 0;
      count += syllables(val);
      return count;
    });
    return results;
  }
}
function haiku(poem) {
  if (!poem) {
    return {
      result: false,
      error: "Invalid input. Call haiku(peom string)",
    };
  }

  if ((poem.split('/').length-1)>2) {
    return {
        error: "Invalid input. Enter three sentences",
        result: false,
      };
    };

  if ((poem.split('/').length-1)<2) {
    return {
        error: "Invalid input. Enter three sentences",
        result: false,
      };
    }

  result = checkLine(poem);
  console.log(result);
  expected = [5, 7, 5];

  function arrayCompare(a1, a2) {
    return (
      a1.length == a2.length &&
      a1.every(function (v, i) {
        return v === a2[i];
      })
    );
  }

  if (arrayCompare(result, expected)) {
    return true;
  }
else
  return false;
}

module.exports = haiku;
