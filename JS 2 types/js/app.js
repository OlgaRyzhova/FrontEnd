// Min 1

let sum = 0.1 +0.2;
alert (sum.toFixed(1))


// Min 2

const a = "1";
const b = 2;

console.log (+a + b);  // first method
console.log (parseInt(a) + b) // second method

alert ()


// Min 3

const flashGb = 1024;
const fileSize = 820;

console.log (Math.floor (flashGb / fileSize))


// Norma 1

const moneyCash = 271.45;
const chocolateBar = 35.99;

console.log (parseFloat(moneyCash % chocolateBar));


// Norma 2 

const userNumber = prompt ('Please, enter a three-digit number');
const randomReverse = Array.from(userNumber).reverse(3).join('');

console.log (randomReverse)


// Max 1

const sumDeposit = prompt ('Please, enter deposit amount for 2 months')
const rateYearly = 0.05;

console.log (sumDeposit * rateYearly / 12 * 2)
