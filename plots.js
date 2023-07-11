// creating three visualizations, one interactive, for our west coast hospital analysis data. 
function createMap(hospitalLocations) {
  let westMap = L.tilelayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let baseMaps = {
    "West Coast Map": westMap
  };

  let overlayMaps = {
    "Hospital Locations": hospitalLocations
  };

  let map = L.map("map-id", {
    center: [x, y],
    zoom: 5,
    layers: [westMap, hospitalLocations]
  });

  L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
}

function createMarkers(response) {
//need to loop through "array" of hospital locations and bindPopup marker for each hospital ???
  let 
}



