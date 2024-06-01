const formatThousand = (num) => {
  return num.toLocaleString();
};

let number = 1000000;
let formattedNumber = formatThousand(number);

console.log(formattedNumber); // 1,000,000
