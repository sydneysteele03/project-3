// functions to read in csv data and create visual html plots 

// create html table from data
function update(data) {
    d3.select('#content tbody')
      .selectAll('tr')
      .data(data)
      .join('tr')
      .html(function(d) {
        let html = '<tr>';
        html += '<td>' + d.name + '</td>';
        html += '<td>' + d.address + '</td>';
        html += '<td>' + d.city + '</td>';
        html += '<td>' + d.state + '</td>';
        html += '<td>' + d.zip + '</td>';
        html += '<td>' + d.type + '</td>';
        html += '<td>' + d.status + '</td>';
        html += '<td>' + d.county + '</td>';
        html += '<td>' + d.latitude + '</td>';
        html += '<td>' + d.longitude + '</td>';
        html += '<td>' + d.owner + '</td>';
        html += '<td>' + d.beds + '</td>';
        html += '<td>' + d.helipad + '</td>';
        html += '</tr>';
        return html;
      });
  }


  //convert datatypes from string to numbers, to match csv types using + 
  function convertRow(d) {
    return {
      name: d.name,
      address: d.address,
      city: d.city,
      state: d.state,
      zip: +d.city,
      type: d.growth,
      status: d.revenue,
      county: d.industry,
      latitude: +d.latitude,
      longitude: +d.longitude,
      owner: d.owner,
      beds: +d.beds,
      helipad: d.helipad
    }
  }


d3.csv('https://raw.githubusercontent.com/sydneysteele03/project-3/main/westcoast_loc_df.csv', convertRow).then(function(data) {
    update(data);
    console.log(data);
});



