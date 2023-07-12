// overview.js creates the interactive drop down overview dashboard for each hospital in our dataset. 

let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'

function init() {
  let dropdown = d3.select("#selDataset");

  //create dropdown using hospital names
  d3.csv(hospData).then((data) => {
  console.log(data);
  let hospitalNames = data.names;

      //create dropdown with hospital names
      for (let i = 0; i < locationData.length; i++){
          dropdown.append("option").text(hospitalNames[i]).property("value", hospitalNames[i]);
      };

      //build first plot using the first sample number. use selectSample to do the rest. 
      let firstHospital = hospitalNames[0];
      demographicInfo(firstHospital);
  });
}


// repeat for other hospital names
function select(nextHospital) {
  demographicInfo(nextHospital);
}


//create the demographics table for each hospital on dropdown menu
function demographicInfo(response) {
  d3.csv(hospData).then((data) => {
    //how to separate data by commas for each value for each row??? 
    let hospital = data.columns["Hospital Name"];
    let city = data.columns.City; 
    let state = data.columns.State; 
    let type = data.columns["Hospital Type"];
    let ownership = data.columns['Hospital Ownership'];
    let rating = data.columns['Hospital overall rating'];

    let resultArray = [hospital, city, state, type, ownership, rating];

    //filter data for the specific hospital --> old code from belly button: 
    //let resultArray = metadata.filter(sampleObj => sampleObj.id == response);
    let result = resultArray[0];

    //select the demographic data from the dropdown with the hospital name of interest 
    let demographics = d3.select("#sample-metadata");

    //need this to reset the table
    demographics.html("");

    //get values and table info to match for overivew display 
    for (r in result) {
      demographics.append("h6").text(`${r.toUpperCase()}: ${result[r]}`);
    };
  });
}


// Initialize the belly button dashboard
init();

d3.csv(geoData).then(locationInfo => {
  d3.csv(hospData).then(hospitalInfo =>{
    console.log(locationInfo)
    console.log(hospitalInfo)
    demographicInfo//(locationInfo.features)
  });
});
