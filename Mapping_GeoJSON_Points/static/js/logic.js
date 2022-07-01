// Add console.log to check if our code is working
console.log("working");

// Create the map object with a center and zoom level.
// latitude, longitude, zoom level
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
// id can be changed to the followings mapbox/streets-v11
// mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11

// tileLayer() method
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Enagai-nagai/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map);
});

// 13.5.4

