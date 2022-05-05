const syllables = require('syllables');

// Count the syllables in a word

// function syllables(word) {
//   //   word = word.toLowerCase();
//   //   if (word.length <= 3) {
//   //     return 1;
//   //   }
//   //   return word
//   //     .replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, "")
//   //     .replace(/^y/, "")
//   //     .match(/[aeiouy]{1,2}/g).length;
// }
function checkLine(sentence) {
  var sentences = sentence.replace(/[^a-zA-Z /]/g, "").split("/");
  console.log(sentences);

  if (sentences.length > 3) {
    return false;
  } else {
    let results = sentences.map(function (val, key) {
      count = 0;
      count += syllables(val);
      console.log(count);
      return count;
    });
    return results;
    console.log(results);
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
}

  result = checkLine(poem);
  console.log(result);
  expected = [5, 7, 5];

  if (arrayCompare(result, expected)) {
    return true;
  }
else
  return false;
}
function arrayCompare(a1, a2) {
  return (
    a1.length == a2.length &&
    a1.every(function (v, i) {
      return v === a2[i];
    })
  );
}
module.exports = haiku;
