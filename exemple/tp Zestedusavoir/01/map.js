var carte = L.map('macarte').setView([46.3630104, 2.9846608], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(carte);

var marker = L.marker([46.6835956, -0.4137665], {draggable:'true'}).bindPopup("");
marker.addTo(carte);

marker.on('dragend', relachement);

function relachement(e) {
    marker.getPopup().setContent(''+marker.getLatLng());
    marker.openPopup();
}

var eskimon = L.polyline([
    [47.077766, -0.219043],
    [47.077766, -0.643656],
    [46.912911, -0.643656],
    [46.912911, -0.219043],
    [46.912911, -0.643656],
    [46.778871, -0.643656],
    [46.778871, -0.219043]
], {color: 'red'}).addTo(carte);

var influence = L.circle([46.6835956, -0.4137665], 210000, {
    'color': '#009dff',
    'fill': true,
    'fillColor': '#00ff33',
    'fillOpacity': 0.2,
});
influence.addTo(carte);

function placerMarqueur(e) {
    marker.setLatLng(e.latlng);
};

carte.on('click', placerMarqueur);

marker.bindPopup('I am the king in the world !');
var mapopup = marker.getPopup();

marker.openPopup();
