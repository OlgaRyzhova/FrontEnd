"use strict";

// TASK 1
// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
// let message = document.getElementsByClassName("form-control");
// message.addEventListener("keypress", function(event) {
//     if (event.key === "Ctrl + E") {
//         event.preventDefault();
//         document.getElementsByClassName("form-group").click();
//     }
// });
// function speak(f){
//     var d=new SpeechSynthesisUtterance();
//     var e=speechSynthesis.getVoices();
//     d.voice=e[2];
//     d.voiceURI="native";
//     d.volume=1;
//     d.rate=1;
//     d.pitch=1;
//     d.text=f;
//     d.lang="en-EN";
//     speechSynthesis.speak(d)
// }
// speak("Hello my master!");
// TASK 2
// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
var solarSystem = [{
  name: 'Mercury',
  diameter: 4878,
  orbit: '88 Earth days',
  day: '58.6 Earth days'
}, {
  name: 'Venus',
  diameter: 12104,
  orbit: '225 Earth days',
  day: '241 Earth days'
}, {
  name: 'Earth',
  diameter: 12760,
  orbit: '365.24 days',
  day: '23 hours, 56 minutes'
}, {
  name: 'Mars',
  diameter: 6787,
  orbit: '-',
  day: '24 hours, 37 minutes'
}, {
  name: 'Jupiter',
  diameter: 139822,
  orbit: '11.9 Earth days',
  day: '9.8 Earth days'
}, {
  name: 'Saturn',
  diameter: 120500,
  orbit: '29.5 Earth days',
  day: '10.5 Earth days'
}, {
  name: 'Uranus',
  diameter: 51120,
  orbit: '84 Earth days',
  day: '18 Earth days'
}, {
  name: 'Neptune',
  diameter: 49530,
  orbit: '165 Earth days',
  day: '19 Earth days'
}, {
  name: 'Pluto',
  diameter: 2301,
  orbit: '248 Earth days',
  day: '6.4 Earth days'
}];

function solarTable() {
  solarSystem.forEach(function (el) {
    var div = document.createElement('div');
    div.classList.add('row');
    var nameSpan = document.createElement('span');
    var diameterSpan = document.createElement('span');
    var orbitSpan = document.createElement('span');
    var daySpan = document.createElement('span');
    nameSpan.textContent = el.name;
    diameterSpan.textContent = el.diameter;
    orbitSpan.textContent = el.orbit;
    daySpan.textContent = el.day;
    div.append(nameSpan);
    div.append(diameterSpan);
    div.append(orbitSpan);
    div.append(daySpan);
    document.querySelector('.table').append(div);
  });
}

var sortHeader = document.querySelectorAll('.sortHeader');
sortHeader.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var targetItem = e.target;
    var sortKey = targetItem.dataset.sort;
    console.log(targetItem);
  });
}); // solarSystem.sort(function(a,b){return b - a});
// document.getElementsByClassName('.sortHeader').innerHTML = solarSystem;
// solarSystem.sort();

solarTable();