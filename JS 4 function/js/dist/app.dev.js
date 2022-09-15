"use strict";

// MIN 1 
// Function Declaration
userName('Mariia');

function userName(name) {
  alert("Hello ".concat(name));
} // Function Expression


var user = function user(person) {
  alert("Привет, " + person);
};

sayHi('Вася');