// TASK 1

// Я хотіла зробити дерево ДОМ (автор - пісня), але ми ще не вчили, тому зробила список лише по піснях
// Якщо треба інакше - напиши мені будь ласка. Дякую)

const playList = [

{
author: "LED ZEPPELIN",
song:"STAIRWAY TO HEAVEN"
},

{
author: "QUEEN",
song:"BOHEMIAN RHAPSODY"
},

{
author: "LYNYRD SKYNYRD",
song:"FREE BIRD"
},

{
author: "DEEP PURPLE",
song:"SMOKE ON THE WATER"
},

{
author: "JIMI HENDRIX",
song:"ALL ALONG THE WATCHTOWER"
},

{
author: "AC/DC",
song:"BACK IN BLACK"
},

{
author: "QUEEN",
song:"WE WILL ROCK YOU"
},

{
author: "METALLICA",
song:"ENTER SANDMAN"
}

];

const domNav = document.getElementById('nav_list');

playList.forEach(navItem => {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = navItem.song;
    a.setAttribute('href', navItem.url);
    a.setAttribute('target', '_blank');
    li.appendChild(a);

    domNav.appendChild(li);

});


//  TASK 2

function switchModal() {
    const modal = document.querySelector('.modal');

    modal.classList.toggle('open')
};


// TASK 3

// document.getElementById('red').onclick = makeRed; 
// function makeRed() {
// document.getElementById('redLight').style.backgroundColor = 'red'
// };

document.getElementById('red').onclick = makeRed;
document.getElementById('yellow').onclick = makeYellow;
document.getElementById('green').onclick = makeGreen;

function makeRed() {
    clearLight();
    document.getElementById('redLight').style.backgroundColor = "red";
}
function makeYellow() {
    clearLight();
    document.getElementById('yellowLight').style.backgroundColor = "yellow";
}
function makeGreen() {
    clearLight();
    document.getElementById('greenLight').style.backgroundColor =  "green";
}
function clearLight() {
    document.getElementById('redLight').style.backgroundColor =  "black";
    document.getElementById('yellowLight').style.backgroundColor = "black";
    document.getElementById('greenLight').style.backgroundColor = "black";
}