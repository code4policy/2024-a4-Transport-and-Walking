
// Safety Chart 2
// Use the data from safety/data/bicyclist_fatality_rate_highest.csv

// Load the data
d3.csv("data/bicyclist_fatality_rate_highest.csv").then(function(data) {
    // Set up the chart dimensions
    const margin = { top: 80, right: 20, bottom: 0, left: 180 };
    const width = window.innerWidth - margin.left - margin.right;
    const height = data.length * 60 - margin.top - margin.bottom;

    // Create an SVG element with adjusted position
    const svg = d3.select("#safety-chart2")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add chart title
    svg.append("text")
        .attr("x", 200)
        .attr("y", -40)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text("10 States with Highest Bicyclist Fatality Rate");

    // Create a group for each bar
    const barGroup = svg.selectAll(".bar-group")
        .data(data)
        .enter().append("g")
        .attr("transform", (d, i) => "translate(0," + i * 50 + ")");

    // Add bars
    barGroup.append("rect")
        .attr("x", 0)
        .attr("width", d => d["Bicyclist Fatality Rate"] * 70)
        .attr("height", 35)
        .attr("fill", "#de2d26");

    // Add state names on the left side
    barGroup.append("text")
        .attr("x", -5)
        .attr("y", 20)
        .text(d => d.State)
        .attr("fill", "#333")
        .style("text-anchor", "end");

    // Add data on the right side of each bar
    barGroup.append("text")
        .attr("x", d => d["Bicyclist Fatality Rate"] * 70 + 5)
        .attr("y", 20)
        .text(d => d["Bicyclist Fatality Rate"])
        .attr("fill", "#333");
});

// Add this code to set the width of the chart container
const chart2Container = document.getElementById('safety-chart2');
chart2Container.style.width = '100%'; // Adjust the width as needed
