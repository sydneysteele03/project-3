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

    let firstHospital = data[0]["Hospital Name"];
    demographicInfo(firstHospital);
    createBarChart(firstHospital);
    createPieChart(data);
  });
}

// repeat for other hospital names
function select(nextHospital) {
  demographicInfo(nextHospital);
  createBarChart(nextHospital);
  createPieChart(data);
}

//create the demographics table for each hospital on dropdown menu
function demographicInfo(hospitalName) {
  let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv'
  let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
  d3.csv(hospData).then((data) => {
    d3.csv(geoData).then((geo) => {
      let hospResult = data.filter((hospital) => {
        return hospitalName == hospital['Hospital Name']
      })
      let geoResult = geo.filter((hospital) => {
        return hospitalName ==hospital.name
      })

      let demographics = d3.select("#response-hospInfo");
      //clear table after reselction
      demographics.html("");
      // add the hospital info
      demographics.append("h4").text(`Hospital Name: ${geoResult[0].name}`);
      demographics.append("h4").text(`City: ${geoResult[0].city}`);
      demographics.append("h4").text(`State: ${geoResult[0].state}`);
      demographics.append("h4").text(`Overall Rating Score: ${hospResult[0]["Hospital overall rating"]}`);
      demographics.append("h4").text(`Hospital Type: ${geoResult[0].type}`);
      demographics.append("h4").text(`Ownership: ${geoResult[0].owner}`);
      demographics.append("h4").text(`Number of Beds: ${geoResult[0].beds}`);
      demographics.append("h4").text(`Helipad Available?: ${geoResult[0].helipad}`);
      
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
        Plotly.newPlot('bar', chartSpecs, {title: "", xaxis: {title: "Hospitals"}});
    });
    });
   }

  // Creating pie chart of the different hospital ownership
  function createPieChart(ownership){
    let hospData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_info_df.csv';
    let geoData = 'https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv'
    d3.csv(hospData).then((data) => {
    
      // set pie chart info
      let result = data.filter((hospital)=> {
        return hospital_name = hospital["Hospital Name"]
      })
      let owner = data.filter((hospital)=> {
        return hospital_owner = hospital["Hospital Ownership"]
      })
      
      let onestar = 0;
      let twostar = 0;
      let threestar = 0;
      let fourstar = 0;
      let fivestar = 0;
      let sixstar = 0;
  
      for (let i = 0; i< hospital_owner.length; i++) {
        //if statements to separate rating counts
        if (hospital_owner[i]["Hospital Ownership"] == ["Government - Hospital District or Authority"]) {
          onestar++;
        } else if (hospital_owner[i]["Hospital Ownership"] == ["Voluntary non-profit - Church"]) {
          twostar++;
        }else if (hospital_owner[i]["Hospital Ownership"] == ["Government - Hospital District or Authority"]) {
          threestar++;
        }else if (hospital_owner[i]["Hospital Ownership"] == ["Government - Local"]) {
          fourstar++;
        }else if (hospital_owner[i]["Hospital Ownership"] == ["Voluntary non-profit - Private"]) {
          fivestar++;
        }else if (hospital_owner[i]["Hospital Ownership"] == ["Voluntary non-profit - Other"]) {
          sixstar++;
      }
    }
    let ownership = ["Government - Hospital District or Authority", "Voluntary non-profit - Church", "Government - Hospital District or Authority", "Government - Local, Voluntary non-profit - Private", "Voluntary non-profit - Other"]; 
    let stars = [onestar, twostar, threestar, fourstar, fivestar, sixstar];
    console.log(ownership);
    console.log(stars);
      //let hospital_name = data['Hospital Name'];
      //let hospital_ownership = data["Hospital Ownership"];
        
      let data2 = [{
            values: ownership,
            labels: stars,
            type: 'pie',
            textposition: 'outside',
            automargin: true
          }];
      
      var layout = [{
            height: 400,
            width: 400,
            margin: {"t": 0, "b": 0, "l": 0, "r": 0},
            showlegend: false
            }];

          Plotly.newPlot('pie', data2, layout); 
  });
 
} 
  // Initialize the hospital overview table
  init();