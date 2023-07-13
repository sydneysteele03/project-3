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

//create bar chart of the top rated hospitals
function createBarChart(response) {
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv';
  d3.csv(hospData).then((data) => {

    // this all probably needs to be in a for loop or fixed when data array is made (?):
    let hospitals = data['Hospital Name'];

    let chartSpecs = [
      {
        y: hospital_rating,
        x: hospital_name,
        text: hospital_name,
        type: 'bar',
        orientation: 'h',
      }
    ];
    Plotly.newPlot('bar', chartSpecs, {title: "Top Rated hospitals on the West Coast", xaxis: {title: "Hospitals"}});
  });
}

//create the demographics table for each hospital on dropdown menu
function demographicInfo(response) {
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
  d3.csv(hospData).then((data) => {

    // let demographics = d3.select("#response-hospInfo");
    // demographics.append(data['State']);
    // demographics.html("");  
    // let result = data['State'];
    // for (r in result) {
    //   demographics.append("h6").text(`${r.toUpperCase()}: ${result[r]}`);
    // };

    for (i = 0; i < data.length; i++) {
      
      let resultArray = [];
      resultArray= [data[i]["City"], data[i]["State"], data[i]['Hospital Type'], data[i]["Hospital Ownership"], data[i]["Hospital Overall Rating"]];
      let result = resultArray[0];
      let demographics = d3.select("#response-hospInfo");
      demographics.append([data[i]["City"], data[i]["State"], data[i]['Hospital Type'], data[i]["Hospital Ownership"], data[i]["Hospital Overall Rating"]]);
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
    // let hospital = data.columns["Hospital Name"];
    // let city = data.columns.City; 
    // let state = data.columns.State; 
    // let type = data.columns["Hospital Type"];
    // let ownership = data.columns['Hospital Ownership'];
    // let rating = data.columns['Hospital overall rating'];

  });
}
// Initialize the hospital overview table
init();



    // const CSVToArray = (data, delimiter = ',', omitFirstRow = true) =>
    // data
    //   .slice(omitFirstRow ? data.indexOf('Hospital Name\nAddress') + 1 : 0)
    //   .split('\n')
    // .map(v => v.split(delimiter));
