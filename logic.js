// so far this is just some extra practice functions that haven't worked for anything 


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
});
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

// functions to read in csv data and create visual html plots 

// create html table from data
function update(data) {
  d3.select('#content tbody')
    .selectAll('tr')
    .data(data)
    .join('tr')
    .html(function(d) {
      let html = '<tr>';
      html += '<td>' + d.name + '</td>';
      html += '<td>' + d.address + '</td>';
      html += '<td>' + d.city + '</td>';
      html += '<td>' + d.state + '</td>';
      html += '<td>' + d.zip + '</td>';
      html += '<td>' + d.type + '</td>';
      html += '<td>' + d.status + '</td>';
      html += '<td>' + d.county + '</td>';
      html += '<td>' + d.latitude + '</td>';
      html += '<td>' + d.longitude + '</td>';
      html += '<td>' + d.owner + '</td>';
      html += '<td>' + d.beds + '</td>';
      html += '<td>' + d.helipad + '</td>';
      html += '</tr>';
      return html;
    });
}


//convert datatypes from string to numbers, to match csv types using + 
function convertRow(d) {
  return {
    name: d.name,
    address: d.address,
    city: d.city,
    state: d.state,
    zip: +d.city,
    type: d.growth,
    status: d.revenue,
    county: d.industry,
    latitude: +d.latitude,
    longitude: +d.longitude,
    owner: d.owner,
    beds: +d.beds,
    helipad: d.helipad
  }
}


d3.csv('https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv', convertRow).then(function(data) {
  update();
});


