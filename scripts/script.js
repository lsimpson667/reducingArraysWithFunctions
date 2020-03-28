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


// // 2. Average of an Array

let input2 = prompt("Enter numbers separated by commas in order to get the average.");
let arr2 = input2.split(",")
// declare an initial sum value
let sum2 = 0
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

// Bonus 1

// Bonus 2: Write a function that takes an array of numbers and returns the largest number.
let input4 = prompt("Enter numbers separated by commas. The largest number will be presented back to you.");
let arr4 = input4.split(",");

function showLargestNumber() {
    return Math.max(...arr4);
}
// console.log(arr4.max);
console.log(showLargestNumber());

// Bonus 3
let input5 = prompt("Enter numbers separated by commas for your 1st array.");
arr5 = input5.split(",");

function LargestNumbersInFirstArray() {
    return Math.max(...arr5);
}
// console.log(LargestNumbersInFirstArray());

let input6 = prompt("Enter numbers separated by commas for your 2nd array.");
arr6 = input6.split(",");

function LargestNumbersInSecondArray() {
    return Math.max(...arr6);
}
// console.log(LargestNumbersInSecondArray());

let biggestNum1 = Math.max(...arr5);
let biggestNum2 = Math.max(...arr6);

function sumOfLargestNumbers() {
    return biggestNum1 + biggestNum2;
}
 console.log(sumOfLargestNumbers());


