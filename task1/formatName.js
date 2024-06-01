// Create a file named “formatName” that contains a function named “formatName” function. The function should accept a string and return the trimmed and capitalized version of the string. E.g If the input is “   victor red   ”, the return value should be “Victor Red”

const formatName = (str) => {
  return str
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

let fullName = "precious ikpa";
let formattedName = formatName(fullName);

console.log(formattedName); // Precious Ikpa
