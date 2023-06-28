// Finding the product (factorial) of 10 numbers using a while loop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let product = 1;
let i = 0;

while (i < numbers.length) {
  product *= numbers[i];
  i++;
}

console.log("The product of the numbers is:", product);
