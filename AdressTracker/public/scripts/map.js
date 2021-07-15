var icon = L.icon({
    iconUrl: 'public/images/icon-location.svg',

    iconSize:     [44, 56], 
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
});

var map = L.map('map').setView([34.04915, -118.09462], 13)

L.marker([34.04915, -118.09462], {icon: icon}).addTo(map)
    .openPopup();

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9s8XQ3zqmr0aA8sy6JXf', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    minZoom: 10,
    maxZoom: 20

}).addTo(map)

function mapView(x, y) {
    map.setView([x, y], 10);

    L.marker([x, y], {icon: icon}).addTo(map)
    .openPopup();
}