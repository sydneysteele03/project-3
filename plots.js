// functions to read in csv data and create visual html plots 
let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
function createMap(locations){
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   });
  let myMap = L.map("map", {
     center: [36.778259, -119.417931],
     zoom: 5,
     layers: [street, locations]
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
function createMarker(locationInfo, hospitalInfo){
  let locationMarkers = []
  for (let i = 0; i < locationInfo.length; i++) {
    let location = locationInfo[i]
    let selectedHospital = hospitalInfo.filter((hospital) => {
      // console.log(location.name)
      // console.log(hospital["Hospital Name"])
      return location.name == hospital["Hospital Name"]
    })
    console.log(selectedHospital)
    let locationMarker = L.marker([location.latitude, location.longitude])
      .bindPopup(`<h4>Name:</h4> <h5>${location.name}</h5> <h4>Address:</h4> <h5>${location.address}</h5> 
      <h4>Rating:</h4> <h5>${selectedHospital[0]["Hospital overall rating"]}</h5>`)
    
    locationMarkers.push(locationMarker)
  }
  createMap(L.layerGroup(locationMarkers))
};
// function createFeatures(locationInfo, hospitalInfo){
  
//   function onEachFeature(feature, layer) {
//     layer.bindPopup(`<h3>Name:</h3> ${hospitalInfo.columns.name}<h3> Address:</h3> ${feature.columns.address}<h3> Status:</h3> 
//     ${hospitalInfo.columns["Hospital overall rating"]}`);
// }
//   let location = L.geoJSON(locationInfo, {
//       onEachFeature: onEachFeature,
//       pointToLayer: createMarker
//   });
//   createMap(location);
// };
d3.csv(geoData).then(locationInfo => {
  d3.csv(hospData).then(hospitalInfo =>{
    // console.log(locationInfo)
    // console.log(hospitalInfo)
    createMarker(locationInfo, hospitalInfo)
  })
})



