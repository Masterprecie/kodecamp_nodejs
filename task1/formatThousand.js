// Create a file named “formatThousand” that contains a function named “formatThousand”. The function should accept a number and return the number formatted with commas as thousands separators. E.g If the input is 1000000, return value should be 1,000,000.

const formatThousand = (num) => {
  return num.toLocaleString();
};

let number = 1000000;
let formattedNumber = formatThousand(number);

console.log(formattedNumber); // 1,000,000
