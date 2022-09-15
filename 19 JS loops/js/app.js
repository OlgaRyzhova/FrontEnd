// MIN 1

let userAge = prompt('how old are you?');

if (userAge <= 11) {
    alert ('You are a child');
} else if (userAge <= 17) {
    alert ('You are teenager');
} else if (userAge <= 59) {
    alert ('You are adult');
} else if (userAge <=100) {
    alert ('You are pensioner');
}
else {
    alert ('You are too young for these question :))');
}


// MIN 2

const numberSymbol = prompt ('Please, enter number from 0 to 9');
let convertedNumber = '';

switch (numberSymbol) {
    case '0':
        convertedNumber = ')';
        break;
    case '1':
        convertedNumber = '!'; 
        break;
    case '2':
        convertedNumber = '@'; 
        break;
    case '3':
        convertedNumber = '#'; 
        break;
    case '4':
        convertedNumber = '$'; 
        break;
    case '5':
        convertedNumber = '%'; 
        break;
    case '6':
        convertedNumber = '^'; 
        break;
    case '7':
        convertedNumber = '&'; 
        break;
    case '8':
        convertedNumber = '*'; 
        break;
    case '9':
        convertedNumber = '('; 
        break;
    default:
        convertedNumber = 'Your number is not correct';
        break;
}

console.log(convertedNumber);

// MIN 3-1


//  Цей варіант запрацював, але нижче зробила через while and for

// const add = arr => arr.reduce((a, b) => a + b, 0);

// let arr = [];
// let sum = add(arr);

// console.log(sum);



// Варіант нижче не вийшов, так як прописувала цифри через кому

// function range(x, y){
//     let rangeNumber = [];
//     while( x <= y ){
//             rangeNumber.push(x);
//             x++;
//         }
//         return rangeNumber;
//     }

// function sum(range){
//         let sumNumber = [];
//         for (let i in range) {
//             sumNumber += range[i];
//         }
//         return sumNumber;
//     }

// x = prompt ('Enter the first number');
// y = prompt ('Enter the second number');
// alert ('Sum ot these numbers is' + range(x,y));
// alert(sum(range(x,y)));


// MIN 3-2

function sumInput() {
    let enteredNumber = [];

    while(true) {
        let value = prompt ('Enter number');

        if (value ==="" || value === null || ! isFinite(value)) break;
        enteredNumber.push(+value);
    }
    let sum = 0;
    for (let number of enteredNumber) {
        sum += number;
    }
    return sum;
}

alert ( sumInput());


// MIN 4


// невдалий варіант задачі

// const myArr = [];
// let a = [];
// let b = [];
// let i;

// console.log (myArr.length)
// for (let i =0; i<= myArr.length -1; i++)
// a%i===0;
// b%i===0;


alert('Enter two numbers to search GCD')
let numb1 = prompt('Enter the first number');
let numb2 = prompt('Enter the second number');
let numb3;

calc(numb1, numb2)
alert('GCD numbers ' + numb1 + ' and ' + numb2 + ' will be: ' + numb3)

function calc(a, b) {
  let c;
  while (a != b) {
    if (a > b) {
      a = a - b;

    } else
    if (a < b) {
      c = a;
      a = b;
      b = c;
    }

  }
  return numb3 = a
}


// MIN 5


// NORMA 1 

let numbers = prompt ('Enter 5 numbers for audit' + []);

alert ( number[1]);
alert ( number[2]);
alert ( number[3]);
alert ( number[4]);
alert ( number[5]);


