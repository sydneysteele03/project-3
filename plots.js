// functions to read in csv data and create visual html plots 
let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'

function createMap(location){

  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   });

  let myMap = L.map("map", {
     center: [36.778259, -119.417931],
     zoom: 5,
     layers: [street, location]
  });

  let baseMaps = {
     "street Map": street
   };

  let overlayMaps = {
     Locations: location
   };

   L.control.layers(baseMaps, overlayMaps, {
     collapsed: false
    }).addTo(myMap);

};

function createMarker(locationInfo){

  return L.circleMarker(locationInfo, {
    radius: markerSize(locationInfo.columns.beds),
    fillColor: markerColor(hospitalInfo.columns.longitude[2]),
    weight: 1,
    opacity: 0.5,
    fillOpacity: 1
 });
};

function createFeatures(locationInfo, hospitalInfo){
  
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>Name:</h3> ${hospitalInfo.columns.name}<h3> Address:</h3> ${feature.columns.address}<h3> Status:</h3> 
    ${hospitalInfo.columns.Hospital overall rating}`);
}

  let location = L.geoJSON(locationInfo, {
      onEachFeature: onEachFeature,
      pointToLayer: createMarker
  });
  createMap(location);
};

d3.csv(geoData).then(locationInfo => {
  d3.csv(hospData).then(hospitalInfo =>{
    console.log(locationInfo)
    console.log(hospitalInfo)
    createFeatures(locationInfo.features)
  })
})




