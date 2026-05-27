/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  const splitWord = data.split("");
  const vowels = splitWord.filter(
    (letter) =>
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u",
  );
  const sum = vowels.reduce((total) => total + 1, 0);
  return sum;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
