"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TASK 1
// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.
var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this.radius = radius;
  }

  _createClass(Circle, [{
    key: "getRadiusCircle",
    get: function get() {
      return this.radius;
    }
    /**
     * @param {string} newRadiusCircle
     */

  }, {
    key: "setRadiusCircle",
    set: function set(newRadiusCircle) {
      this.radius = newRadiusCircle;
    }
  }, {
    key: "getDiametr",
    get: function get() {
      return this.radius * 2;
    }
  }, {
    key: "getPerimeter",
    get: function get() {
      return this.radius * this.radius * Math.PI;
    }
  }, {
    key: "getLengthCircle",
    get: function get() {
      return this.radius * 2 * Math.PI;
    }
  }]);

  return Circle;
}();

var obj = new Circle(4);
console.log(obj.getRadiusCircle);
obj.setRadiusCircle = '8';
console.log(obj.getRadiusCircle);
console.log(obj.getDiametr);
console.log(obj.getPerimeter);
console.log(obj.getLengthCircle); // TASK 2
// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти: 
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.
// Продемонструй роботу написаних методів.

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, inkPercent) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.inkPercent = 44;
  }

  _createClass(Marker, [{
    key: "getMyMarker",
    get: function get() {
      return this.inkPercent - str.length * .5;
    }
  }]);

  return Marker;
}();

var str = 'Never give UP!';
console.log(str.replaceAll(' ', ''));
console.log(str.length * .5);
var splits = str.split('', 14);
console.log(splits); // const counts = (this.inkPercent - str.length) *.5;
// console.log(counts);

console.log(Marker.getMyMarker); // TASK 3
// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().