// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

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

// filtering by the button so referncing it from html id

var button = d3.select("#filter-btn");
button.on("click", function(){
    tbody.html("")

    var inputE = d3.select("#datetime");
    var inputV = inputE.property("value");
    //console.log(inputV)
    var filtData = tableData.filter(sighting => sighting.datetime === inputV)
    //console.log(filtData)

    filtData.forEach(event => { 
        //console.log(event)
        var row = tbody.append("tr")

        Object.entries(event).forEach(([key, value]) => {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
            console.log(cell)
        });

    });

});