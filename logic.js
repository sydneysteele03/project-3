// this creates the interactive drop down overview dashboard for each hospital in our dataset. 

//let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
//let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'

function init() {
  let dropdown = d3.select("#selDataset");
  //create dropdown using hospital names
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv';

  d3.csv(hospData).then((data) => {
    for (let i = 0; i < data.length; i++){
        dropdown.append("option").text(data[i]["Hospital Name"]).property("value", data[i]["Hospital Name"]);
    };

    let firstHospital = data[0];
    demographicInfo(firstHospital);
    createBarChart(firstHospital);
  });
}

// repeat for other hospital names
function select(nextHospital) {
  demographicInfo(nextHospital);
  createBarChart(nextHospital);
}

//create the demographics table for each hospital on dropdown menu
function demographicInfo(hospitalInfo) {
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
  let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
  d3.csv(hospData).then((data) => {
    d3.csv(geoData).then((geo) => {
      let hospitalInfo = [];
      for (let i = 0; i < data.length; i++) {
        let demographics = d3.select("#response-hospInfo");
        hospitalInfo.push([data[i]["Hospital Name"], data[i]["City"], data[i]["State"], data[i]["Hospital overall rating"], data[i]['Hospital Type'], geo[i]['beds'], data[i]["Hospital Ownership"], geo[i]['helipad']]);
        let result = hospitalInfo[i];
        //clear previous data
        demographics.html("");
        //get values and table info to match for overivew display 
        for (r in result) {
          demographics.append("h6").text(`${r.toUpperCase()}: ${result[r]}`);
        };
      }
    });
});
}

//create bar chart of the top rated hospitals
function createBarChart(response) {
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv';
  let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
  d3.csv(hospData).then((data) => {
    d3.csv(geoData).then((data) => {
    // set bar chart info
      let hospital_name = data['Hospital Name'];
      let hospital_rating = data["Hospital Overall Rating"];

      let chartSpecs = [
      {
        y: hospital_rating,
        x: hospital_name,
        text: hospital_rating,
        type: 'bar',
        orientation: 'h',
      }];
      //make the plot 
      Plotly.newPlot('bar', chartSpecs, {title: "Top Rated hospitals on the West Coast", xaxis: {title: "Hospitals"}});
  });
  });
 }

// Initialize the hospital overview table
init();
    
