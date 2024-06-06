// Create a file named “removeDuplicate.js” and inside that file create a function named “remove duplicate”. The function should accept an ordered array with duplicate elements and return an array of unique elements. Example input [1, 2, 2, 3, 3, 3, 4, 5, 5], output should be [1, 2, 3, 4, 5].

const input = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const removeDuplicate = (arr) => {
  const uniqueElements = [];
  arr.forEach((item, index) => {
    if (arr[index] !== arr[index + 1]) {
      uniqueElements.push(item);
    }
  });
  return uniqueElements;
};

console.log(removeDuplicate(input));
