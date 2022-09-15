// Norm 1

const userName = prompt('What is your name?');

console.log('Hello, ' + userName)


// Norm 2

const userAge = prompt('How old are you?');
const userAgeConverted = parseInt(userAge);

console.log(`You are ${userAge} years old`)


// Norm 3

const sideLenght = prompt('Specify the length of the side of the square');

if(sideLenght > 0) {
    alert(`Рerimeter of the square is equal ${+sideLenght * 4}`);
} else {
    alert (`${sideLenght} is not a number!`)
}


// Max 1

const circleRadius = prompt ('Please, insert circle radius here');
const circleRadiusConverted = parseFloat(circleRadius);

if (circleRadiusConverted > 0) {
    const circleSquare = Math.sqrt(Math.PI * circleRadiusConverted);
    alert(`Circle square qualsto: ${circleSquare}`)
}
console.log(circleRadiusConverted);


// Max 2

const distanceKm = prompt ('Please, specify the distance between the two cities you want to visit');
const distanceKmConverted = parseFloat(distanceKm);

const timeArrival = prompt ('how many hours do you want to reach your destination?');
const timeArrivalConverted = parseFloat(timeArrival);


if (distanceKmConverted > 0) {
    const speedTest = (distanceKm / timeArrival);
    alert(`You must move at speed ${speedTest} km/hr to get there in time`)
}


// Max 3

const dollar = prompt ('Please, enter the amount in dollars');
const exchangeRate = parseFloat(dollar);

if (exchangeRate > 0) {
    const exchangeRate = 1.005;
    const euro = dollar / exchangeRate;

    alert (`Amount in euros is ${euro}`)
}