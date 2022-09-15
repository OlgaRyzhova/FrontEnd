"use strict";

// Norm 1
var userName = prompt('What is your name?');
console.log('Hello, ' + userName); // Norm 2

var userAge = prompt('How old are you?');
var userAgeConverted = parseInt(userAge);
console.log("You are ".concat(userAge, " years old")); // Norm 3

var sideLenght = prompt('Specify the length of the side of the square');

if (sideLenght > 0) {
  alert("\u0420erimeter of the square is equal ".concat(+sideLenght * 4));
} else {
  alert("".concat(sideLenght, " is not a number!"));
} // Max 1


var circleRadius = prompt('Please, insert circle radius here');
var circleRadiusConverted = parseFloat(circleRadius);

if (circleRadiusConverted > 0) {
  var circleSquare = Math.sqrt(Math.PI * circleRadiusConverted);
  alert("Circle square qualsto: ".concat(circleSquare));
}

console.log(circleRadiusConverted); // Max 2

var distanceKm = prompt('Please, specify the distance between the two cities you want to visit');
var distanceKmConverted = parseFloat(distanceKm);
var timeArrival = prompt('how many hours do you want to reach your destination?');
var timeArrivalConverted = parseFloat(timeArrival);

if (distanceKmConverted > 0) {
  var speedTest = distanceKm / timeArrival;
  alert("You must move at speed ".concat(speedTest, " km/hr to get there in time"));
} // Max 3


var dollar = prompt('Please, enter the amount in dollars');
var exchangeRate = parseFloat(dollar);

if (exchangeRate > 0) {
  var _exchangeRate = 1.005;
  var euro = dollar / _exchangeRate;
  alert("Amount in euros is ".concat(euro));
}