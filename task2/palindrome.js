//Create a file named “palindrome.js” and inside the file, create a function named “palindrome”. The function should accept a word and check if that word is a palindrome. Example, level is a palindrome, energy is not a palindrome.
//Note: A Palindrome is a word that can be spelt the same way forwards and backwards.

const palindrome = (word) => {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
};

console.log(palindrome("level"));
console.log(palindrome("energy"));
