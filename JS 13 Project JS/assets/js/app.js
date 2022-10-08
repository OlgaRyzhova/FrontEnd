$(function() {
    $('.heading_slider').slick({
        // lazyLoad: 'ondemand',
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });
}); 


// NEWS 

$(function() {
    $('.news_wrapper').slick({
        // lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev"><img src="./assets/img/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./assets/img/next.svg"></i></button>',
        variableWidth: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });
}); 


// MAP 

const map = L.map('map').setView([40.665, -73.798], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.665, -73.798], {icon:''}).addTo(map)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


// const map = L.map('map').setView([40.66, -73.79], 15);

// let greenIcon = L.icon({
//     iconUrl: 'map_marker.png',
//     // shadowUrl: 'leaf-shadow.png',

//     iconSize:     [38, 38], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);