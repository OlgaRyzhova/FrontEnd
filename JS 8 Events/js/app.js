// TASK 1

// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.


let task = document.querySelector('.main_page');
document.addEventListener('keydown', function(event) {
    

    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        let textElement = document.getElementById('text');

        let textarea = document.createElement('textarea');
        textarea.value = textElement.textContent;
        textElement.remove ();
        task.appendChild(textarea);
    }
    if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        let textarea = document.querySelector('textarea');

        let textElement = document.createElement('div');
        textElement.setAttribute('id', 'text');
        textElement.textContent = textarea.value;
        textarea.remove ();
        task.appendChild(textElement);
    }
});


// TASK 2



// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

// const solarSystem = [
//     {
//         name: 'Mercury',
//         diameter: 4878,
//         orbit: '88 Earth days',
//         day: '58.6 Earth days'
//     },
//     {
//         name: 'Venus',
//         diameter: 12104,
//         orbit: '225 Earth days',
//         day: '241 Earth days'
//     },
//     {
//         name: 'Earth',
//         diameter: 12760,
//         orbit: '365.24 days',
//         day: '23 hours, 56 minutes'
//     },
//     {
//         name: 'Mars',
//         diameter: 6787,
//         orbit: '-',
//         day: '24 hours, 37 minutes'
//     },
//     {
//         name: 'Jupiter',
//         diameter: 139822,
//         orbit: '11.9 Earth days',
//         day: '9.8 Earth days'
//     },
//     {
//         name: 'Saturn',
//         diameter: 120500,
//         orbit: '29.5 Earth days',
//         day: '10.5 Earth days'
//     },
//     {
//         name: 'Uranus',
//         diameter: 51120,
//         orbit: '84 Earth days',
//         day: '18 Earth days'
//     },
//     {
//         name: 'Neptune',
//         diameter: 49530,
//         orbit: '165 Earth days',
//         day: '19 Earth days'
//     },
//     {
//         name: 'Pluto',
//         diameter: 2301,
//         orbit: '248 Earth days',
//         day: '6.4 Earth days'
//     },
// ];

function sortTable (number) {
    let tableBody = document.querySelector('tbody');
    let tableRows = tableBody.querySelectorAll('tr');

    let sortedRows = [];

    tableRows.forEach(row => {
        sortedRows.push(row);
    })

    //очищаем содерживое tableBody
    tableBody.innerHTML = '';

    //сортируем масссив tableRows 
    sortedRows.sort(function (a, b) {
        let aCols = a.querySelectorAll('td');
        let bCols = b.querySelectorAll('td');
        let aOne = aCols[number].textContent;
        let bOne = bCols[number].textContent;
        if (+aOne >= 0 && +bOne >= 0) {
            return aOne-bOne;
        }
        if (aOne < bOne) {
            return -1;
        }
        if (aOne > bOne) {
            return 1;
        }
        return 0;
    }) 
    
    //вставляем обратно содержимое массивf tablerows в tablebody
    
    sortedRows.forEach (row => {
        tableBody.appendChild(row);
    })
}

// function solarTable() {
//     solarSystem.forEach(el =>{
//         const div = document.createElement('table');
//         div.classList.add('row');

//         const nameSpan = document.createElement('span');
//         const diameterSpan = document.createElement('span');
//         const orbitSpan = document.createElement('span');
//         const daySpan = document.createElement('span');

//         nameSpan.textContent = el.name;
//         diameterSpan.textContent = el.diameter;
//         orbitSpan.textContent = el.orbit;
//         daySpan.textContent = el.day;

//         div.append(nameSpan);
//         div.append(diameterSpan);
//         div.append(orbitSpan);
//         div.append(daySpan);

//         document.querySelector('.table').append(div);
//     });
// }

// const sortHeader = document.querySelectorAll('.sortHeader');
// sortHeader.forEach(el => {
//     el.addEventListener('click', function(e) {
//         const targetItem = e.target;
//         const sortKey = targetItem.dataset.sort;
//         console.log(targetItem);
//     });
// });


// // solarSystem.sort(function(a,b){return b - a});
// // document.getElementsByClassName('.sortHeader').innerHTML = solarSystem;
// // solarSystem.sort();
// solarTable();
