// functions to read in csv data and create visual html plots 
let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
//let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'

d3.csv(geoData). then(function(locationinfo){

  console.log(locationinfo);
  createFeatures(locationinfo.features);

})

function createMarker(feature, latlng){

  return L.circleMarker(latlng, {
    radius: markerSize(feature.columns.beds),
    //fillColor: markerColor(feature.),
    weight: 0.5,
    opacity: 0.5,
    fillOpacity: 1
 });

}

function createFeatures(locationinfo){
  
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>Name:</h3> ${feature.columns.name}<h3> Address:</h3> ${feature.columns.address}<h3> Status:</h3> 
    ${feature.columns.status}}`);
}

  let location = L.geoJSON(locationinfo, {
      onEachFeature: onEachFeature,
      pointToLayer: createMarker
});


function createMap(location){

    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     });

    let myMap = L.map("map", {
       center: [37.09, -95.71],
       zoom: 5,
       layers: [street, location]
    });

    let baseMaps = {
       "street Map": street
     };

    let overlayMaps = {
       Locations: locations
     };

     L.control.layers(baseMaps, overlayMaps, {
       collapsed: false
      }).addTo(myMap);

};
}