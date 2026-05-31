/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. 
The following code block will describe all the casing styles to support. We may also receive an array of casing styles, 
and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string 
that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  const splitString = input.split(" ");
  let updateStr = "";
  let finalWords = [];
  let result = "";
  const vowels = ["a", "e", "i", "o", "u"];
  let chars = "";

  if (!Array.isArray(caze)) {
    switch (caze) {
      case "camel":
        splitString.forEach((word, i) => {
          if (i === 0) {
            finalWords.push(word);
          } else {
            updateStr = word[0].toUpperCase() + word.slice(1);
            finalWords.push(updateStr);
            result = finalWords.join("");
          }
        });
        break;

      case "pascal":
        splitString.forEach((word) => {
          updateStr = word[0].toUpperCase() + word.slice(1);
          finalWords.push(updateStr);
          result = finalWords.join("");
        });
        break;

      case "snake":
        result = splitString.join("_");
        break;

      case "kebab":
        result = splitString.join("-");
        break;

      case "title":
        splitString.forEach((word) => {
          updateStr = word[0].toUpperCase() + word.slice(1);
          finalWords.push(updateStr);
          result = finalWords.join(" ");
        });
        break;

      case "vowel":
        chars = input.split("");
        chars.forEach((char, i) => {
          if (vowels.includes(char)) {
            chars[i] = char.toUpperCase();
          }
        });
        result = chars.join("");
        break;

      case "consonant":
        chars = input.split("");
        chars.forEach((char, i) => {
          if (!vowels.includes(char)) {
            chars[i] = char.toUpperCase();
          }
        });
        result = chars.join("");
        break;

      case "upper":
        result = input.toUpperCase();
        break;

      case "lower":
        result = input.toLowerCase();
        break;
    }
  } else {
    caze.forEach((style) => {
      result = makeCaze(input, style);
      input = result;
    });
  }

  return result;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

// console.log(makeCaze("this is a string", "upper")); // THIS IS A STRING
// console.log(makeCaze("THIS IS A STRING", "lower")); //this is a string
// console.log(
//   makeCaze("this is a string", ["upper", "snake", "lower", "consonant"]),
// ); // THiS_iS_a_STRiNG

module.exports = makeCaze;
