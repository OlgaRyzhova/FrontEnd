"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// MIN 1
var mamShoppingList = [{
  productName: 'Milk',
  quantity: 2,
  status: 'bought',
  price: 32.45,
  amount: 64.90
}, {
  productName: 'Bread',
  quantity: 1,
  status: 'not bought',
  price: 45.23,
  amount: 45.23
}, {
  productName: 'Cheese',
  quantity: 1,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}, {
  productName: 'Eggs',
  quantity: 3,
  status: 'not bought',
  price: 50.61,
  amount: 151.83
}, {
  productName: 'Sour cream',
  quantity: 2,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}];
console.log(mamShoppingList); // MIN 1.1 

mamShoppingList.sort(function (a, b) {
  if (a.status > b.status) {
    return 1;
  } else {
    return -1;
  }
}); // MIN 1.2

mamShoppingList.forEach(function (mamShoppingList) {
  var buyStatus = "I ".concat(mamShoppingList.status, " it");
  console.log(buyStatus);
}); //  Norm 1

var productList = ['flowers', 'baloon', 'candle', 'wine', 'bread', 'present', 'cake'];
productList.splice(3, 2);
console.log(productList); // Norm 2

var shoppingList = [{
  productName: 'Milk',
  quantity: 2,
  price: 32.45,
  amount: 64.90
}, {
  productName: 'Bread',
  quantity: 1,
  price: 45.23,
  amount: 45.23
}, {
  productName: 'Cheese',
  quantity: 1,
  price: 160.99,
  amount: 160.99
}, {
  productName: 'Eggs',
  quantity: 3,
  price: 50.61,
  amount: 151.83
}, {
  productName: 'Sour cream',
  quantity: 2,
  price: 160.99,
  amount: 160.99
}, {
  productName: 'Eggs',
  quantity: 1,
  price: 50.61,
  amount: 50.61
}, {
  productName: 'Cheese',
  quantity: 1,
  price: 160.99,
  amount: 160.99
}];
var newList = shoppingList.filter(function (el) {
  return el.productName === 'Eggs';
}, 'Cheese');
console.log(newList); // MAX 1
// Я не зовсім зрозуміла як я можу зробити множення кількості та ціни всіх продуктів, щоб у мене вийшла сума. Я зробила лише по сумі. Підскажи будь ласка)

var products =
/*#__PURE__*/
function (_Array) {
  _inherits(products, _Array);

  function products() {
    _classCallCheck(this, products);

    return _possibleConstructorReturn(this, _getPrototypeOf(products).apply(this, arguments));
  }

  _createClass(products, [{
    key: "sum",
    value: function sum(key) {
      return this.reduce(function (a, b) {
        return a + (b[key] || 0);
      }, 0);
    }
  }]);

  return products;
}(_wrapNativeSuper(Array));

var dailyProducts = _construct(products, [{
  productName: 'Milk',
  quantity: 2,
  status: 'bought',
  price: 32.45,
  amount: 64.90
}, {
  productName: 'Bread',
  quantity: 1,
  status: 'not bought',
  price: 45.23,
  amount: 45.23
}, {
  productName: 'Cheese',
  quantity: 1,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}, {
  productName: 'Eggs',
  quantity: 3,
  status: 'not bought',
  price: 50.61,
  amount: 151.83
}, {
  productName: 'Sour cream',
  quantity: 2,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}]);

console.log(dailyProducts.sum('amount')); // MAX 2

var boughtList = [{
  productName: 'Milk',
  quantity: 2,
  status: 'bought',
  price: 32.45,
  amount: 64.90
}, {
  productName: 'Bread',
  quantity: 1,
  status: 'not bought',
  price: 45.23,
  amount: 45.23
}, {
  productName: 'Cheese',
  quantity: 1,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}, {
  productName: 'Eggs',
  quantity: 3,
  status: 'not bought',
  price: 50.61,
  amount: 151.83
}, {
  productName: 'Sour cream',
  quantity: 2,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}];
var findedObj = boughtList.filter(function (el) {
  return el.status === 'bought';
});
console.log(findedObj); // MAX 3

var sortList = [{
  productName: 'Milk',
  quantity: 2,
  status: 'bought',
  price: 32.45,
  amount: 64.90
}, {
  productName: 'Bread',
  quantity: 1,
  status: 'not bought',
  price: 45.23,
  amount: 45.23
}, {
  productName: 'Cheese',
  quantity: 1,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}, {
  productName: 'Eggs',
  quantity: 3,
  status: 'not bought',
  price: 50.61,
  amount: 151.83
}, {
  productName: 'Sour cream',
  quantity: 2,
  status: 'bought',
  price: 160.99,
  amount: 160.99
}];

function sortHelper(a, b) {
  return b.amount - a.amount;
  return a.amount - b.amount;
}

sortList.sort(sortHelper);
console.log(sortList);