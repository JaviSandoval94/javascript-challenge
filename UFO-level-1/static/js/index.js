// Save the objects to meaningful variables.
var sightings = data;
var tbody = d3.select("tbody");
var button = d3.select("#button");
var form = d3.select("#form");

// Assign handler function to the target objects in the HTML file. 
button.on("click", runEnter);
form.on("submit", runEnter);

// Declare handler function.
function runEnter(){
    d3.event.preventDefault();
    // Assign input value in the form to a variable.
    inputElement = d3.select("#ufo-form-input");
    inputValue = inputElement.property("value");
    // Empty the table object before appending filter results.
    tbody.html('');
    // Filter sightings in the data to the specified date/time.
    var results = sightings.filter(sighting => sighting.datetime == inputValue);
    results.forEach((UFOReport) => {
        // Append a row to the table for each result.
        var row = tbody.append("tr");
        // Append the values of each of the objects in the result as the created rows' content.
        Object.entries(UFOReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

