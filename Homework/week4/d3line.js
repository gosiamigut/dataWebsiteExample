"use strict";

// Defines the margins for the SVG
var margin = {
		top: 140,
		right: 20,
		bottom: 30,
		left: 50
	},
	width = 960 - margin.left - margin.right,
	height = 560 - margin.top - margin.bottom;

// The way how to convert a date
var parse_date = d3.time.format("%Y/%m/%d").parse;

// The scale for the x-axis and the y-axis
var x = d3.time.scale()
	.range([0, width]);
var y = d3.scale.linear()
	.range([height, 0]);

// The x-axis and the y-axis defined
var x_axis = d3.svg.axis()
	.scale(x)
	.orient("bottom");
var y_axis = d3.svg.axis()
	.scale(y)
	.orient("left");

// Returns for every row in the data the x-position of the 
// date and the y-position of the temperature (used later)
var line = d3.svg.line()
	.x(function(d) {
		return x(d.date);
	})
	.y(function(d) {
		return y(d.temp);
	});

// Append the SVG to the body with the defined margins
var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Opens the data file
d3.csv("data.csv", function(error, data) {
	if (error) throw error;

	// Reads the data rows
	data.forEach(function(d) {
		d.date = parse_date(d.date); // date
		d.temp = +d.temp / 10; //temp
	});

	// Let the dates fit in the horizontal space
	// and let the temperatures fit in the vertical space
	x.domain(d3.extent(data, function(d) {
		return d.date;
	}));
	y.domain(d3.extent(data, function(d) {
		return d.temp;
	}));

	// Get the minimum and maximum date and temperature
	var min_x = d3.min(data, function(d) {
		return d.date;
	});
	var max_x = d3.max(data, function(d) {
		return d.date;
	});
	var min_y = d3.min(data, function(d) {
		return d.temp;
	});
	var max_y = d3.max(data, function(d) {
		return d.temp;
	});

	// Creates a linear gradient for the line (from the 
	// minimum temperature to the maximum temperature)
	svg.append("linearGradient")
		.attr("id", "temperature-gradient")
		.attr("gradientUnits", "userSpaceOnUse")
		.attr("x1", 0).attr("y1", y(min_y))
		.attr("x2", 0).attr("y2", y(max_y))
		.selectAll("stop")
		.data([{
			offset: "0%",
			color: "#339"
		}, {
			offset: "100%",
			color: "#d33"
		}])
		.enter().append("stop")
		.attr("offset", function(d) {
			return d.offset;
		})
		.attr("stop-color", function(d) {
			return d.color;
		});
		
	// Append information to the screen
	svg.append("text")
		.attr("class", "title")
		.attr("x", width / 2)
		.attr("y", "-90")
		.text("Maximum temperatures The Bilt in 2008");

	var subtitle = svg.append("text")
		.attr("class", "subtitle")
		.attr("x", width / 2)
		.attr("y", "-60")
	subtitle.append("tspan")
		.attr("class", "instruction")
		.text("Instructions:")
	subtitle.append("tspan")
		.text(" Stop moving the cursor over the graph to see the tooltip.");

	svg.append("text")
		.attr("class", "footer")
		.attr("x", width / 2)
		.attr("y", "-35")
		.text("Data from http://projects.knmi.nl/");

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(x_axis);

	svg.append("g")
		.attr("class", "y axis")
		.call(y_axis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Temperature (C°)");

	// Append the line to the graph that goes to every point on the screen
	// (see var line = d3.svg.line())
	svg.append("path")
		.datum(data)
		.attr("class", "line")
		.attr("d", line);

	// The focus with it's circle, line, labels and label-backgrounds
	var focus = svg.append('g').style('display', 'none');

	focus.append('line')
		.attr('id', 'focus-line-x')
		.attr('class', 'focus');
	focus.append('line')
		.attr('id', 'focus-line-y')
		.attr('class', 'focus');
	focus.append('circle')
		.attr('id', 'focus-circle')
		.attr('r', 6)
		.attr('class', 'focus')
	focus.append('rect')
		.attr('id', 'focus-rect-x')
		.attr('width', '50')
		.attr('height', '20')
		.attr('class', 'focus-rect');
	focus.append('rect')
		.attr('id', 'focus-rect-y')
		.attr('width', '20')
		.attr('height', '50')
		.attr('class', 'focus-rect');
	focus.append('text')
		.attr('id', 'focus-text-x')
		.attr('class', 'focus-text');
	focus.append('text')
		.attr('id', 'focus-text-y')
		.attr('class', 'focus-text');

	// For finding the index of a given date in the data:
	var bisectDate = d3.bisector(function(d) {
		return d.date;
	}).left;

	// A timeout for showing the focus.
	var timeout;

	// Appends a transparant rectangle over the graph for 
	// registering mouse hovering
	svg.append('rect')
		.attr('class', 'screen')
		.attr('width', width)
		.attr('height', height)
		
		// Removes the timeout and the focus when leaving
		// the screen with the mouse
		.on('mouseout', function() {
			clearTimeout(timeout);
			focus.style('display', 'none');
		})
		
		// When moving over the screen...
		.on('mousemove', function() {

			// Track the mouse
			var mouse = d3.mouse(this);
			
			// Clear the Timout and remove
			// the focus
			clearTimeout(timeout);
			
			// Show the focus
			focus.style('display', null);
			
			// Gets the mouse_x
			var mouse_x = mouse[0];
			var y0 = y.invert(mouse[1]); // inverts mouse_y
			var x0 = x.invert(mouse_x);  // inverts mouse_x
			var i = bisectDate(data, x0); // get the index of the mouse_x in the data
			
			// Get date of the nearest point in the data
			var d0 = data[i - 1];
			var d1 = data[i];
			var d;
			if (x0 - d0.date > d1.date - x0) {
				d = d1;
			} else {
				d = d0;
			}
			// Get the y position belonging to the mouse_x
			var mouse_y = y(d.temp);

			// Move the focus, circle, line to the right position,
			// dependent of the mouse
			focus.select('#focus-circle')
				.attr('cx', mouse_x)
				.attr('cy', mouse_y);
			focus.select('#focus-line-x')
				.attr('x1', x(min_x)).attr('y1', mouse_y)
				.attr('x2', x(max_x)).attr('y2', mouse_y);
			focus.select('#focus-line-y')
				.attr('x1', mouse_x).attr('y1', y(min_y))
				.attr('x2', mouse_x).attr('y2', y(max_y));
			
			// Change the text of the labels to the values date and temperature,
			// selected by the focus
			focus.select("#focus-text-x")
				.text(d["date"].toDateString().substring(4, 10));
			focus.select("#focus-text-y")
				.attr("transform", "rotate(-90)")
				.text(d["temp"] + " C°");
			
			// The labels will be moved to the horizontal area of the screen with the most room
			if (x(x0) >= x(max_x) / 2) {
				focus.select("#focus-rect-x")
					.attr('x', mouse_x / 2 - 25)
					.attr('y', mouse_y);
				focus.select("#focus-text-x")
					.attr('x', mouse_x / 2)
					.attr('y', mouse_y + 13);
			} else {
				focus.select("#focus-rect-x")
					.attr('x', mouse_x + (x(max_x) - mouse_x) / 2 - 25)
					.attr('y', mouse_y);
				focus.select("#focus-text-x")
					.attr('x', mouse_x + (x(max_x) - mouse_x) / 2)
					.attr('y', mouse_y + 13);
			}
			
			// The labels will be moved to the vertical area of the screen with the most room
			if (y(y0) <= y(min_y) / 2) {
				focus.select("#focus-rect-y")
					.attr('x', mouse_x)
					.attr('y', mouse_y + (y(min_y) - mouse_y) / 2 - 25);
				focus.select("#focus-text-y")
					.attr('x', -(mouse_y + (y(min_y) - mouse_y) / 2))
					.attr('y', mouse_x + 13);
			} else {
				focus.select("#focus-rect-y")
					.attr('x', mouse_x)
					.attr('y', mouse_y / 2 - 25);
				focus.select("#focus-text-y")
					.attr('x', -mouse_y / 2)
					.attr('y', mouse_x + 13);
			}
			
			focus.select("#focus-rect-x").style('display', 'none');
			focus.select("#focus-text-x").style('display', 'none');
			focus.select("#focus-rect-y").style('display', 'none');
			focus.select("#focus-text-y").style('display', 'none');

			// So the timeout only ends if the mouse hasn't moved long enough
			// on the screen
			timeout = setTimeout(function() {
				focus.select("#focus-rect-x").style('display', null);
				focus.select("#focus-text-x").style('display', null);
				focus.select("#focus-rect-y").style('display', null);
				focus.select("#focus-text-y").style('display', null);			
			}, 200); // The timer is set to 200 milliseconds
		});
});