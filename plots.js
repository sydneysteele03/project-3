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
    // center of west coast looked like ashland, OR
    center: [42.1946, 122.7095],
    //set zoom to west coast only 
    zoom: 5,
    layers: [westMap, hospitalLocations]
  });

  L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
}

function createMarkers(response) {
//need to loop through "array" of hospital locations and bindPopup marker for each hospital ???
  let hospitals = 10//pinpoint how to get hospital locations x,y;
  let hMarkers = [];
  for(let i = 0; i <hospitals.length; i++) {
    let hospital = hospitals[i];
    let hMarker = L.marker([hospital.latitidue, hospital.longitude]).bindPopup(""+hospital.name+ "Rated:" + hospital.overall_rating+ "");
    hMarkers.push(hMarker);
  }

  createMap(L.layerGroup(hMarkers));
}

//d3.csv local file path 
d3.csv("").then(createMarkers);

