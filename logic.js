// so far this is just some extra practice functions that haven't worked for anything 
// like the belly button one 

function init() {
  let dropdown = d3.select("#selDataset");
  //create dropdown using sample ID numbers 
  d3.csv("https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv").then((data) => {
      console.log(data);
      let hospitalNames = data.name;
      //create dropdown with hospital names
      for (let i = 0; i < hospitalNames.length; i++){
          dropdown.append("option").text(sampleIDs[i]).property("value", sampleIDs[i]);
      };
      //build first plot using the first sample number. use selectSample to do the rest. 
      let firstHospital = hospitalNames[0];
      demographicInfo(firstHospital);

      //createBarChart(firstSample);
      //createBubbleChart(firstSample);
  });
}

// repeat for other hospital names
function select(nextHospital) {
 // createBarChart(nextID);
  //createBubbleChart(nextID);
  demographicInfo(nextHospital);
}

//create the demographics table for each hospital on dropdown menu
function demographicInfo(hospital) {
  d3.csv("https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv").then((data) => {
    //how to separate data by commas for each value for each row??? 
    let metadata = data.metadata;
    //filter data for the specific hospital 
    let resultArray = metadata.filter(sampleObj => sampleObj.id == hospital);
    let result = resultArray[0];
    //select the demographic data from the dropdown with the sample ID of interest 
    let demographics = d3.select("#sample-metadata");
    //need this to reset the table
    demographics.html("");

    //get values and table info to match for overivew display 
    for (r in result) {
      demographics.append("h6").text(`${r.toUpperCase()}: ${result[r]}`);
    };
  });
}


//d3.csv('https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv').then(function(data;
//});


