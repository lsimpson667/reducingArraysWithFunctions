// 1. Sum of An Array
let input = prompt("Enter numbers separated by commas in order to get the sum.");
let arr = input.split(",")

function sumOf(numbersArray) {
// declare an initial sum value
    let sum = 0;
// create loop that mutates the sum as it loops through each number in array
for (let i = 0; i < numbersArray.length; i++) {
//sum = sum + a numer in the numbers array 
  sum += Number(numbersArray[i]);

}
// after all the loops end, return the sum
    return sum;

}

console.log(sumOf(arr));


// // 2. Average of an Array
function avgOf(numbersArray) {
let sum2 = 0
// create loop that mutates the sum as it loops through each number in array
for (let i = 0; i < numbersArray.length; i++) {
//sum = sum + a numer in the numbers array 
  sum2 += Number(numbersArray[i]);

}
// after all the loops end, return the sum
    return sum2 / numbersArray.length;

}

console.log(avgOf(arr));

// Bonus 1
function avgRefactor(numbersArray) {

let sum3 = sumOf(numbersArray);

    return sum3 / numbersArray.length;

}

console.log(`avgRefactor result ${avgRefactor(arr)}`);


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

let input6 = prompt("Enter numbers separated by commas for your 2nd array.");
arr6 = input6.split(",");

 function largestNumber(array, array2) { 
    return Math.max(...array) + Math.max(...array2);
 }

 console.log(largestNumber(arr5, arr6));


