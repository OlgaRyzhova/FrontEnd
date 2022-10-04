// leaflet map

const map = L.map('map').setView([50.45, 30.53], 15);

const greenIcon = L.icon({
    iconUrl: 'https://www.disneyplusinformer.com/wp-content/uploads/2022/03/Turning-Red-Profile-Avatar.png',

    iconSize:     [38, 38], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const markerLeft = L.marker([50.4501, 30.5234],  {icon: greenIcon},
    {alt: 'Kyiv'}).addTo(map) 
    .bindPopup('Come on visit me right now!');

const markerRirht = L.marker([50.7501, 30.5834],  {icon: greenIcon},
    {alt: 'Kyiv'}).addTo(map) 
    .bindPopup('Come on visit me right now');

L.tileLayer('https://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.45, 30.53], {icon: greenIcon}).addTo(map)
    .bindPopup('Hello my dear visitor')
    .openPopup();
