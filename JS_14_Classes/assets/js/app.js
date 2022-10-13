// TASK 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.


class Circle {
    constructor(radius) {
    this.radius = radius;
    }

    get getRadiusCircle() {
        return this.radius;
    }
    /**
     * @param {string} newRadiusCircle
     */
    set setRadiusCircle(newRadiusCircle) {
        this.radius = newRadiusCircle;
    }
    get getDiametr() {
        return this.radius *2;
    }
    get getPerimeter() {
        return this.radius * this.radius * Math.PI;
    }
    get getLengthCircle() {
        return this.radius * 2 * Math.PI;
    }
}

const obj = new Circle(4);

console.log(obj.getRadiusCircle);
obj.setRadiusCircle = '8';
console.log(obj.getRadiusCircle);
console.log(obj.getDiametr);
console.log(obj.getPerimeter);
console.log(obj.getLengthCircle);


// TASK 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти: 

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.

class Marker {
    constructor(color, inkPercent) {
        this.color = color;
        this.inkPercent = 44;
    }

    get getMyMarker() {
        return this.inkPercent -str.length *.5;
    }
}

const str = 'Never give UP!';
console.log(str.replaceAll(' ', ''));


console.log(str.length*.5);

const splits = str.split ('', 14);
console.log(splits);

// const counts = (this.inkPercent - str.length) *.5;
// console.log(counts);
console.log(Marker.getMyMarker);

// TASK 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().