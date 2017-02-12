"use strict";

/* use this to test out your function */
window.onload = function() {
	
	// Loads the data in JSON format
	var data = JSON.parse(loadData("http://emieldegraaf.github.io/assets/files/populations.json"));
	
	// Color scale created with https://vis4.net/labs/multihue/
	var color_scale = ['#fffacd', '#ffdb9a', '#ffb87a', '#fe9468', '#f2705f', '#e14e54', '#ca2e43', '#ad102a', '#8b0000'];
	
	// Loops through every country
	for (var i = 0; i < data.length; i++) {
		// Gets the ID (used in the SVG) of every country 
		var id = getCountryId(data[i]["Country"]);
		
		// Only for countries that are in the data...
		if (id != undefined) {
			// Get the population of the country
			var population = data[i]["Population"];
		
			// Colors every country
			// Population bigger than or equal to 160000 million people result in the last color of the color_scale
			// Populations lower than 160000 million people result in one of the eight other colors
			var color_value = Math.floor(population / 160000 * 8);
			if (color_value <= 8) {
				var color = color_scale[color_value];
			} else {
				var color = color_scale[8];
			}
			changeColor(id, color);
		}
	}
	
	// Colors the color swatches in the legend
	var color_swatches = document.getElementsByClassName("color_swatch");
	for (var i = 0; i < color_swatches.length; i++) {
        color_swatches[i].style.fill = color_scale[i];
    }
}

// Returns the content of a file on a given location
function loadData(location) {
	var file = new XMLHttpRequest();
	var content = undefined;
	file.open("GET", location, false);
	file.onreadystatechange = function () {
		if(file.readyState === 4) {
			if(file.status === 200 || file.status == 0) {
				content = file.responseText;
			}
		}
	}
	file.send(null);
	return content;
}

function getCountryId(country) {
	// Returns the country_code from a country
	// The mapping is defined in 'countries.js'
	for (var i = 0; i < country_codes.length; i++) {
		if (country == country_codes[i][2]) {
			return country_codes[i][0];
		}
	}
	return;
}

// changeColor takes a path Class and a color (hex value)
// and changes that path's fill color
function changeColor(id, color) {
	var elements = document.getElementsByClassName(id);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fill = color;
    }
}