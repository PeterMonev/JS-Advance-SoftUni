function sameNumbers(input) {
  "use strict";
  const numbers = input.toString().split("").map(Number);
  let result = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
    } else {
      console.log(false);
      return console.log(numbers.reduce((a, b) => a + b, 0));
    }
  }

  console.log(true);
  console.log(numbers.reduce((a, b) => a + b, 0));
}

sameNumbers(2222222);
