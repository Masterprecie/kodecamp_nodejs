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
