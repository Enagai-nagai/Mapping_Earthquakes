// Add console.log to check if our code is working
console.log("working");

// Create the map object with a center and zoom level.
// latitude, longitude, zoom level
let map = L.map('mapid').setView([34.0522, -118.2437],7);

// We create the tile layer that will be the background of our map.
// id can be changed to the followings mapbox/streets-v11
// mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11

// tileLayer() method
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add a Marker to the Map for Los Angeles, California
var marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a Circle to the Map
// Skill Drill
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1',
}).addTo(map);

