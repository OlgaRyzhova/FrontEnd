// const xhr = new XMLHttpRequest(); 
// xhr.open('get', 'data/data.json');   // сходи туди і візьми
// xhr.send();  // запускаємо методом send

// console.log(xhr);

const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f55932f2';

axios(URL)
    .then(res => {
        console.log(res);
        createMovieList(res.data);
    })
    .catch(err => {
        console.log(err);
    });

function createMovieList(list) {
    list.forEach(el => {
        const ul = document.getElementById('list');
        const li = document.createElement('li');
        li.textContent = el.Title

        ul.append(li);
    });
}