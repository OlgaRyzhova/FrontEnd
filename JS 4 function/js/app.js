// MIN 1 


// Function Declaration

function userName(name) {
    alert( `Hello ${name}` );
}

userName('Mariia');


// Function Expression

var userName = function(person) {
    alert( 'Hello ' + person );
};

userName('Olga');


// MIN 2

function summ () {
    console.log(arguments.length);
};

summ (45, 444, 9, 21,830, 381, 4);

// MIN 3 

// function compareNumbers() {
//     let a, b;
//     if(a < b === -1; a> b ===1, a = b => 0)
// }


// MIN 4

const number = prompt ('Enter the number');

function a(number) {
    let result = 1;
    for (let i = number; i < 1; i++) {
        result *= i;
    }
    return result;
}

console.log (a(number));


// MIN 5

function a(a, b, c) {
    
    let result = 1;
    for (let i = 1; i <= number; i++) {

    }
    return result;
}

console.log(a.toString()); 


// MIN 6

var a = prompt ('first');
var b = prompt ('second');

function square (a,b) {
    return b ? a*b :a*a
}

console.log(square(a,b));


// Norm 1

function perfectNum(a) {
    let result = 0;
    for (let i = 1; i <= a; i++) {
        if(a%i ===0){
            result = result + i;
        }   
    }

    return a === result ? ' Perfect' : 'Unperfect';
}

console.log(perfectNum(180));

// Norm 2


const bestNum = prompt('Provide number to the test');

function perfectNum(a) {
    let result = 0;
    for (let i = 1; i <= a; i++) {
        if(a%i ===0){
            result = result + i;
        }   
    }

    return a === result ? ' Perfect' : 'Unperfect';
}

console.log(perfectNum(bestNum));
