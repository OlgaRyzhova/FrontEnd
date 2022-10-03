"use strict";

// const xhr = new XMLHttpRequest(); 
// xhr.open('get', 'data/data.json');   // сходи туди і візьми
// xhr.send();  // запускаємо методом send
// console.log(xhr);
var URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f55932f2';
axios(URL).then(function (res) {
  console.log(res);
  createMovieList(res.data);
})["catch"](function (err) {
  console.log(err);
});

function createMovieList(list) {
  list.forEach(function (el) {
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.textContent = el.Title;
    ul.append(li);
  });
}