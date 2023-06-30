// file for creating data visualizations 


//create function createMap(hospitalLocations) 
function createMap(hospitalLocations) {
// create tile layer that will be the background map 
let streetmap = L.tileLayer("" , {
    attribution: ""});
//create baseMaps object to hold streetmap layer
let baseMaps = {
  "Street Map": streetmap
};
// overlayMaps to hold hospitalLocations later 
let overlayMaps = {
    "Hospital Locations": hospitalLocations
};
//create map object with options
let map = L.map("", {
  //edit these variables 
  center: [x, y],
  zoom: INT,
  layer: [streetmap, hospitalLocations]
};
// layer control, pass it baseMaps and Overlay maps. Add layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false}).addTo(map);
}



// new function createMarkers for hopsital location markers and name/info 
function createMarkers(response) {
//pull the name property from response.data (need to ID response and data) 
let stations = response.data.stations;
// initialize array (named hospitalMarkers) to hold hosptial markers 

// loop through hospital location array

  // for each hospital, create marker and bind popup with name 

  // add marker to hospitalMarkers array

// create layer group from array, pass to createMap function 



}
//perform API call to the [hospital API ???] to get station information. call createMarkers when it completes.
  d3.json();




