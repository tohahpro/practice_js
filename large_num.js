const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let largeNumber = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largeNumber) {
    largeNumber = numbers[i];
  }
}

console.log("largest number:", largeNumber);