// 1. Sum of An Array
let input = prompt("Enter numbers separated by commas in order to get the sum.");
let arr = input.split(",")
// declare an initial sum value
let sum = 0;
function sumOf(numbersArray) {
// create loop that mutates the sum as it loops through each number in array
for (let i = 0; i < numbersArray.length; i++) {
//sum = sum + a numer in the numbers array 
  sum += Number(numbersArray[i]);
//   console.log(sum);

}
// after all the loops end, return the sum
    return sum;

}

console.log(sumOf(arr));


// 2. Average of an Array

let input2 = prompt("Enter numbers separated by commas in order to get the average.");
let arr2 = input2.split(",")
// declare an initial sum value
let sum2 = 0;
function avgOf(numbersArray) {
// create loop that mutates the sum as it loops through each number in array
for (let i = 0; i < numbersArray.length; i++) {
//sum = sum + a numer in the numbers array 
  sum2 += Number(numbersArray[i]);
//   console.log(sum);

}
// after all the loops end, return the sum
    return sum2 / numbersArray.length;

}

console.log(avgOf(arr2));
