// from data.js
var tableData = data;
// referncing table body
var tbody = d3.select("tbody");
tableData.forEach(ufoSighting => {
    //console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        //console.log(cell)
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
    // Select the input date, state, shape...
    var inputElement = d3.select("#input");
    // Get the value of the input
    var inputValue = inputElement.property("value");
    // Filter Data with your prefernce of variables equal to input value
    var filtData = tableData.filter(event => event.datetime === inputValue ||
                                                    event.city === inputValue ||
                                                    event.state === inputValue ||
                                                    event.country === inputValue ||
                                                    event.shape === inputValue );
    // console.log filter values
    console.log(filtData);
    filtData.forEach(function(selections) {
        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append row to the cell value
        var cell = row.append("td");
        cell.text(value);
        });
    });
});