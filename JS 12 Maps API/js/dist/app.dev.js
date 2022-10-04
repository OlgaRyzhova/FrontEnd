"use strict";

// leaflet map
var map = L.map('map').setView([50.45, 30.53], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([50.45, 30.53]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();