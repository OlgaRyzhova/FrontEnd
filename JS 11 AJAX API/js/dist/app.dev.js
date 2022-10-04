"use strict";

// const xhr = new XMLHttpRequest(); 
// xhr.open('get', 'data/data.json');   // сходи туди і візьми
// xhr.send();  // запускаємо методом send
// console.log(xhr);
// axios(URL + '&t=Dance') Запит, коли заходимо на сторінку
//     .then(res => {
//         // console.log(res);
//         createMovieList([res.data]);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// вивели поле пошуку із фільтрами на movie, series, episode
// const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f55932f2';
// let movieType = 'movie';
// function createMovieList(list) {
//     list.forEach(el => {
//         const ul = document.getElementById('list');
//         const li = document.createElement('li');
//         const img = document.createElement('img');
//         img.setAttribute('src', el.Poster)
//         li.textContent = el.Title;
//         ul.append(img);
//         ul.append(li);
//     });
// }
// function findAFilm() {
//     const query = document.getElementById('search').value;
//     console.log(query);
//     axios(URL + `&t=${query}&type=${movieType}`)
//         .then(res => {
//             createMovieList([res.data]);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
// function changeType(e) {
//     movieType = e.target.value
// }
function pageLoader(page) {
  $.get("pages/".concat(page, ".html"), function (res) {
    $('#main_content').html(res);
  });
}

$('#nav_list a').click(function (e) {
  e.preventDefault();
  $('#nav_list a.active').removeClass('active');
  $(this).addClass('active');
  pageLoader($(this).attr('href'));
});
$(document).on('click', '.page-link', function (e) {
  e.preventDefault();
  getPage($(this).attr('href'));
});
$(document).on('click', '.show-more', function (e) {
  e.preventDefault();
  showInfo($(this).attr('data-id'));
});
$(document).on('click', '.close-modal', function (e) {
  e.preventDefault();
  closeModal();
});
pageLoader('search');
var URL = 'https://www.omdbapi.com/?apikey=f55932f2';
var PAGE = 1;

function createMovieList(list) {
  var html = '';
  list.forEach(function (el) {
    html += "<div class=\"col\">\n            <div class=\"card shadow-sm\">\n                <img class=\"w-100\" src=\"".concat(el.Poster && el.Poster != 'N/A' ? el.Poster : 'https://via.placeholder.com/400x600', "\" alt=\"\">\n                <div class=\"card-body\">\n                    ").concat(el.Title ? '<p class="card-text">' + el.Title + '</p>' : '', "\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary show-more\" data-id=").concat(el.imdbID, ">View</button> \n                    </div>\n                    <small class=\"text-muted\">").concat(el.Year, "</small>\n                    </div>\n                </div>\n            </div>\n        </div>"); //     const ul = document.getElementById('list');
    //     const li = document.createElement('li');
    //     const img = document.createElement('img');
    //     img.setAttribute('src', el.Poster)
    //     li.textContent = el.Title;
    //     ul.append(img);
    //     ul.append(li);
  }); // console.log(html);

  $('#cards').html(html);
}

function showError(err) {
  console.log('Show error', err);
  $('#cards').html("<h2 class='error'>".concat(err, "</h2>"));
}

function showPagination() {
  $('.pagination').css('display', 'flex');
}

function hidePagination() {
  $('.pagination').css('display', 'flex');
}

function managePagination(results) {
  var totalPages = Math.trunc(results / 10);
  $('#results_count').text("Results ".concat(PAGE * 10 - 9, " - ").concat(PAGE * 10, ", from ").concat(results, " results."));
  $('.last-page-link').text(totalPages).attr('href', totalPages);
}

function findAFilm() {
  var query = $('#search').val();
  $.ajax(URL + "&s=".concat(query, "&page=").concat(PAGE)).done(function (res) {
    if (res.Search && res.totalResults > 0) {
      createMovieList(res.Search);

      if (res.totalResults > 10) {
        showPagination();
        managePagination(res.totalResults);
      } else {
        hidePagination();
      }
    } else {
      showError(res.Error);
      hidePagination();
    }
  }).fail(function (err) {
    showError(err.Error);
  });
}

function getPage(page) {
  if (page) {
    if (page === 'prev') {
      PAGE = PAGE === 1 ? 1 : PAGE - 1;
      findAFilm();
    } else if (page === 'next') {
      PAGE = PAGE + 1;
      findAFilm();
    } else {
      PAGE = page;
      findAFilm();
    }
  }
}

function closeModal() {
  $('.modal').removeClass('open');
}

function showModal(film) {
  var html = "<div class=\"modal-header\">\n                    <img class=\"w-100\" src=\"".concat(film.Poster && film.Poster != 'N/A' ? film.Poster : 'https://via.placeholder.com/400x600', "\" alt=\"\">\n                    <h5 class=\"modal-title\">").concat(film.Title, "</h5>\n                </div>\n                <div class=\"modal-body\">\n                    <p>").concat(film.Plot, "</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary close-modal\">Close</button>\n                </div>");
  $('.modal-content').html(html);
  $('.modal').addClass('open');
}

function showInfo(id) {
  $.ajax(URL + "&i=".concat(id)).done(function (res) {
    showModal(res);
  }).fail(function (err) {
    showError(err.Error);
  });
}