// Add console.log to check if our code is working
console.log("working");


// We create the tile layer that will be the background of our map.
// id can be changed to the followings mapbox/streets-v11
// mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11

// tileLayer() method
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery c <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.5.4 Create the dark view tile layer that will be an oprion for our map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attricution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMap = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

L.control.layers(baseMap).addTo(map);


// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/Enagai-nagai/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data)
    .addTo(map);
    });

