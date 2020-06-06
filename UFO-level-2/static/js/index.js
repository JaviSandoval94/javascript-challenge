// Save the objects to meaningful variables.
var sightings = data;
var tbody = d3.select("tbody");
var button = d3.select("#button");
var form = d3.select("#form");

// Assign handler function to the target objects in the HTML file. 
button.on("click", runEnter);
// form.on("submit", runEnter);
uniqueShapes = [];
uniqueCountries = [];

// Verify unique values
// Shape
for (var i = 0; i < sightings.length; i ++){
    if (uniqueShapes.includes(sightings[i].shape)){
        console.log("Value repeated. Skipping...");
    }
    else {
        uniqueShapes.push(sightings[i].shape);
    }
};
// Country
for (var i = 0; i < sightings.length; i ++){
    if (uniqueCountries.includes(sightings[i].country)){
        console.log("Value repeated. Skipping...");
    }
    else {
        uniqueCountries.push(sightings[i].country);
    }
};
console.log(uniqueShapes);
console.log(uniqueCountries);

// Declare handler function.
function runEnter(){
    d3.event.preventDefault();
    // Save input values.
    dateInput = d3.select("#date-form-input").property("value");
    cityInput = d3.select("#city-form-input").property("value");
    stateInput = d3.select("#state-form-input").property("value");
    countryInput = d3.select("#selCountry").property("value");
    shapeInput = d3.select("#selShape").property("value");

    // Keep track of input values on the console.
    console.log(`Date: ${dateInput}`);
    console.log(`City: ${cityInput}`);
    console.log(`State: ${stateInput}`);
    console.log(`Country: ${countryInput}`);
    console.log(`Shape: ${shapeInput}`);

    // Empty the table object before appending filter results.
    tbody.html('');

    // Filter sightings in the data to the specified date/time.
    var results = sightings.filter(sighting => (sighting.datetime == dateInput || dateInput == "") &&
                                    (sighting.city == cityInput || cityInput == "") &&
                                    (sighting.state == stateInput || dateInput == "") &&
                                    (sighting.country == countryInput) &&
                                    (sighting.shape == shapeInput)
                                    );

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

