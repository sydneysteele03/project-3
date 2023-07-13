// overview.js creates the interactive drop down overview dashboard for each hospital in our dataset. 

//let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
//let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'

function init() {
  let dropdown = d3.select("#selDataset");
  //create dropdown using hospital names
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
  d3.csv(hospData).then((data) => {
    for (let i = 0; i < data.length; i++){
        dropdown.append("option").text(data[i]["Hospital Name"]).property("value", data[i]["Hospital Name"]);
    };
    let firstHospital = data[0];
    demographicInfo(firstHospital);
  });
}
// repeat for other hospital names
function select(nextHospital) {
  demographicInfo(nextHospital);
}
//create the demographics table for each hospital on dropdown menu
function demographicInfo(response) {
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
  d3.csv(hospData).then((data) => {
    for (i = 0; i < data.length; i++) {
      let hospInfo = data.hospData;
      let resultArray = [];
      let result = resultArray[0];
      let demographics = d3.select("#sample-metadata");

      //need this to reset the table
      demographics.html("");

      //get values and table info to match for overivew display 
      for (r in result) {
        demographics.append("h6").text(`${r.toUpperCase()}: ${result[r]}`);
      };
    };
    
    //how to separate data by commas for each value for each row??? 
    //let resultArray = []
    // for (let i = 0; i < data.length; i++) {
    //   resultArray.append([data[i]["Hospital Name"], data[i].City, data[i].State, data[i]["Hospital Type"], 
    //   data[i]['Hospital Ownership'], data[i]['Hospital overall rating']]);
    // };

    let hospital = data.columns["Hospital Name"];
    let city = data.columns.City; 
    let state = data.columns.State; 
    let type = data.columns["Hospital Type"];
    let ownership = data.columns['Hospital Ownership'];
    let rating = data.columns['Hospital overall rating'];

    //let resultArray = [hospital, city, state, type, ownership, rating];

    //filter data for the specific hospital --> old code from belly button: 
   // let resultArray = hospData.filter(sampleObj => sampleObj.id == response);
    

    //select the demographic data from the dropdown with the hospital name of interest 
    


  });
}
// Initialize the belly button dashboard
init();

///d3.csv(geoData).then(locationInfo => {
  //d3.csv(hospData).then(hospitalInfo =>{
    //console.log(locationInfo)
    //console.log(hospitalInfo)
    //demographicInfo//(locationInfo.features)
  ////});
//});

    // const CSVToArray = (data, delimiter = ',', omitFirstRow = true) =>
    // data
    //   .slice(omitFirstRow ? data.indexOf('Hospital Name\nAddress') + 1 : 0)
    //   .split('\n')
    // .map(v => v.split(delimiter));
