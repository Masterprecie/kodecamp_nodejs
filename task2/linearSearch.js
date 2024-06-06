// Create a file named “linearSearch.js” and inside the file, create a function named “linearSearch”. The function should search for a string in an array of strings and return “Yes, the string exists in the array” if the string is found and “No, the string does not exist in the array”. Note: Don't use include or indexOf methods for this exercise.

const stringArray = ["precious", "john", "doe", "emma"];
const linearSearch = (arr, search) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return "Yes, the string exists in the array";
    }
  }
  return "No, the string does not exist in the array";
};

console.log(linearSearch(stringArray, "fruit"));
console.log(linearSearch(stringArray, "john"));
