"use strict";

// MIN 1
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
var userAge = prompt('how old are you?');

if (userAge <= 11) {
  alert('You are a child');
} else if (userAge <= 17) {
  alert('You are teenager');
} else if (userAge <= 59) {
  alert('You are adult');
} else if (userAge <= 100) {
  alert('You are pensioner');
} else {
  alert('You are too young for these question :))');
} // MIN 2
// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


var numberSymbol = prompt('Please, enter number from 0 to 9');
var convertedNumber = '';

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

console.log(convertedNumber); // MIN 3-1

var a = 16;
var b = 2;
var c = 0 + 2;
с = 2;

for (var i = 2; i <= a; i++) {
  c = c + i;
}

console.log(c); //  Цей варіант запрацював, але нижче зробила через while and for
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
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

function sumInput() {
  var enteredNumber = [];

  while (true) {
    var value = prompt('Enter number');
    if (value === "" || value === null || !isFinite(value)) break;
    enteredNumber.push(+value);
  }

  var sum = 0;

  for (var _i = 0, _enteredNumber = enteredNumber; _i < _enteredNumber.length; _i++) {
    var _number = _enteredNumber[_i];
    sum += _number;
  }

  return sum;
}

alert(sumInput()); // MIN 4
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// невдалий варіант задачі
// const myArr = [];
// let a = [];
// let b = [];
// let i;
// console.log (myArr.length)
// for (let i =0; i<= myArr.length -1; i++)
// a%i===0;
// b%i===0;

alert('Enter two numbers to search GCD');
var numb1 = prompt('Enter the first number');
var numb2 = prompt('Enter the second number');
var numb3;
calc(numb1, numb2);
alert('GCD numbers ' + numb1 + ' and ' + numb2 + ' will be: ' + numb3);

function calc(a, b) {
  var c;

  while (a != b) {
    if (a > b) {
      a = a - b;
    } else if (a < b) {
      c = a;
      a = b;
      b = c;
    }
  }

  return numb3 = a;
} // MIN 5
// Запитай у користувача число і виведи всі дільники цього числа.
// NORMA 1 
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


var numbers = prompt('Enter 5 numbers for audit' + []);
alert(number[1]);
alert(number[2]);
alert(number[3]);
alert(number[4]);
alert(number[5]); // NORMA 2
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

var summ = 220;
var d;

if (summ <= 300 && summ >= 200) {
  d = summ - summ * 0.03;
  console.log('3%');
}

if (summ <= 500 && summ >= 300) {
  d = summ - summ * 0.05;
  console.log('5%');
}

if (summ >= 500) {
  d = summ - summ * 0.07;
  console.log('7%');
}

console.log(d); // NORMA 3
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
// NORMA 4
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// MAX 1
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
// MAX 2
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// MAX 3 
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.