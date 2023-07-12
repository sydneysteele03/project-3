// functions to read in csv data and create visual html plots 
let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'

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
     Locations: location
   };

   L.control.layers(baseMaps, overlayMaps, {
     collapsed: false
    }).addTo(myMap);

};

function createMarker(feature, latlng){

  return L.circleMarker(latlng, {
    radius: markerSize(feature.columns.beds),
    //fillColor: markerColor(feature. INSERT RATING PATH),
    weight: 0.5,
    opacity: 0.5,
    fillOpacity: 1
 });
}

function createMarkers(response){
  let hospitals = response.columns.name;

  let hospitalMarkers = [];

  for (let index = 0; index < name.length; index++){
    let hospital = hospitals[index];

    let hospitalMarker = L.marker([columns.latitude, columns.longitude]).bindPopup(`<h3>Name:</h3> ${feature.columns.name}<h3> Address:</h3> ${feature.columns.address}<h3> Status:</h3>${feature.columns.status}
    ${feature.columns.status}`);
  }

};

function createFeatures(locationinfo){
  
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>Name:</h3> ${feature.columns.name}<h3> Address:</h3> ${feature.columns.address}<h3> Status:</h3> 
    ${feature.columns.status}`);
}

  let location = L.geoJSON(locationinfo, {
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


//}
// create html table from data
// function update(data) {
//     d3.select('#content tbody')
//       .selectAll('tr')
//       .data(data)
//       .join('tr')
//       .html(function(d) {
//         let html = '<tr>';
//         html += '<td>' + d.name + '</td>';
//         html += '<td>' + d.address + '</td>';
//         html += '<td>' + d.city + '</td>';
//         html += '<td>' + d.state + '</td>';
//         html += '<td>' + d.zip + '</td>';
//         html += '<td>' + d.type + '</td>';
//         html += '<td>' + d.status + '</td>';
//         html += '<td>' + d.county + '</td>';
//         html += '<td>' + d.latitude + '</td>';
//         html += '<td>' + d.longitude + '</td>';
//         html += '<td>' + d.owner + '</td>';
//         html += '<td>' + d.beds + '</td>';
//         html += '<td>' + d.helipad + '</td>';
//         html += '</tr>';
//         return html;
//       });
//   }


//   //convert datatypes from string to numbers, to match csv types using + 
//   function convertRow(d) {
//     return {
//       name: d.name,
//       address: d.address,
//       city: d.city,
//       state: d.state,
//       zip: +d.city,
//       type: d.growth,
//       status: d.revenue,
//       county: d.industry,
//       latitude: +d.latitude,
//       longitude: +d.longitude,
//       owner: d.owner,
//       beds: +d.beds,
//       helipad: d.helipad
//     }
//   }


// d3.csv('https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv', convertRow).then(function(data) {
//     update();
// });
