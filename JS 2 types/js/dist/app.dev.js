"use strict";

// Min 1
var sum = 0.1 + 0.2;
alert(sum.toFixed(1)); // Min 2

var a = "1";
var b = 2;
console.log(+a + b); // first method

console.log(parseInt(a) + b); // second method

alert(); // Min 3

var flashGb = 1024;
var fileSize = 820;
console.log(Math.floor(flashGb / fileSize)); // Norma 1

var moneyCash = 271.45;
var chocolateBar = 35.99;
console.log(parseFloat(moneyCash % chocolateBar)); // Norma 2 

var userNumber = prompt('Please, enter a three-digit number');
var randomReverse = Array.from(userNumber).reverse(3).join('');
console.log(randomReverse); // Max 1

var sumDeposit = prompt('Please, enter deposit amount for 2 months');
var rateYearly = 0.05;
console.log(sumDeposit * rateYearly / 12 * 2);