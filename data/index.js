// index.js
// Get the context of the canvas elements
var temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
var humidityCtx = document.getElementById('humidityChart').getContext('2d');
var moistureCtx = document.getElementById('moistureChart').getContext('2d');
var waterLevelCtx = document.getElementById('waterLevelChart').getContext('2d');
var waterValueCtx = document.getElementById('waterValueChart').getContext('2d');

// Create the chart instances
var temperatureChart = new Chart(temperatureCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperature',
            data: [],
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)', 
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var humidityChart = new Chart(humidityCtx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Humidity',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var moistureChart = new Chart(moistureCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Moisture',
            data: [],
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: true,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var waterValueChart = new Chart(waterValueCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Water Value',
            data: [],
            borderColor: 'rgba(255, 206, 86, 1)',
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var waterLevelCounts = { LOW: 0, MEDIUM: 0, HIGH: 0 };
var waterLevelChart = new Chart(waterLevelCtx, {
    type: 'pie',
    data: {
        labels: ['LOW', 'MEDIUM', 'HIGH'],
        datasets: [{
            data: [waterLevelCounts.LOW, waterLevelCounts.MEDIUM, waterLevelCounts.HIGH],
            fill: true,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    }
});

function showGraphs() {
    var title = document.getElementById('title');
    var dashboard = document.getElementById('dashboard');
    var graphs = document.getElementById('graphs');
    title.innerText = 'Graphs';
    dashboard.style.display = 'none';
    graphs.style.display = 'block';
}

function showDashboard() {
    var title = document.getElementById('title');
    var dashboard = document.getElementById('dashboard');
    var graphs = document.getElementById('graphs');
    title.innerText = 'Dashboard';
    dashboard.style.display = 'block';
    graphs.style.display = 'none';
}

function mapWaterLevel(value) {
    switch (value) {
        case 0:
            return 'LOW';
        case 1:
            return 'MEDIUM';
        case 2:
            return 'HIGH';
        default:
            return 'N/A';
    }
}

function generateFakeData() {
    return {
        temperature: Math.random() * 40, // random temperature between 0 and 40
        humidity: Math.random() * 100, // random humidity between 0 and 100
        moisture: Math.random() * 100, // random moisture between 0 and 100
        waterLevel: Math.floor(Math.random() * 3), // random water level between 0 and 100
        waterValue: Math.random() * 100 // random water value between 0 and 100
    };
}

function fakeFetch() {
    var data = generateFakeData(); // Use fake data for testing

    // Update HTML elements with received data
    document.getElementById('temperature').innerText = data.temperature.toFixed(2);
    document.getElementById('humidity').innerText = data.humidity.toFixed(2);
    document.getElementById('moisture').innerText = data.moisture.toFixed(2);
    document.getElementById('waterLevel').innerText = mapWaterLevel(data.waterLevel);
    document.getElementById('waterValue').innerText = data.waterValue.toFixed(2);

    // Update the water level count
    waterLevelCounts[mapWaterLevel(data.waterLevel)]++;

    var now = new Date().toLocaleTimeString(); 
    temperatureChart.data.labels.push(now);
    temperatureChart.data.datasets[0].data.push(data.temperature.toFixed(2));
    humidityChart.data.labels.push(now);
    humidityChart.data.datasets[0].data.push(data.humidity.toFixed(2));
    moistureChart.data.labels.push(now);
    moistureChart.data.datasets[0].data.push(data.moisture.toFixed(2));
    waterValueChart.data.labels.push(now);
    waterValueChart.data.datasets[0].data.push(data.waterValue.toFixed(2));

    // Update the pie chart data
    waterLevelChart.data.datasets[0].data = [waterLevelCounts.LOW, waterLevelCounts.MEDIUM, waterLevelCounts.HIGH];

    temperatureChart.update();
    humidityChart.update();
    moistureChart.update();
    waterValueChart.update();
    waterLevelChart.update();
}


function fetchDataAndUpdate() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            // Update HTML elements with received data
            document.getElementById('temperature').innerText = data.temperature.toFixed(2);
            document.getElementById('humidity').innerText = data.humidity.toFixed(2);
            document.getElementById('moisture').innerText = data.moisture.toFixed(2);
            document.getElementById('waterLevel').innerText = mapWaterLevel(data.waterLevel);
            document.getElementById('waterValue').innerText = data.waterValue.toFixed(2);

            // Update the water level count
            waterLevelCounts[mapWaterLevel(data.waterLevel)]++;

            var now = new Date().toLocaleTimeString(); 
            temperatureChart.data.labels.push(now);
            temperatureChart.data.datasets[0].data.push(data.temperature.toFixed(2));
            humidityChart.data.labels.push(now);
            humidityChart.data.datasets[0].data.push(data.humidity.toFixed(2));
            moistureChart.data.labels.push(now);
            moistureChart.data.datasets[0].data.push(data.moisture.toFixed(2));
            waterValueChart.data.labels.push(now);
            waterValueChart.data.datasets[0].data.push(data.waterValue.toFixed(2));

            // Update the pie chart data
            waterLevelChart.data.datasets[0].data = [waterLevelCounts.LOW, waterLevelCounts.MEDIUM, waterLevelCounts.HIGH];

            temperatureChart.update();
            humidityChart.update();
            moistureChart.update();
            waterValueChart.update();
            waterLevelChart.update();
        })
        .catch(error => {  
        if (error.name !== 'SyntaxError') {
            console.error(error);
        }
        });
}


// fetchDataAndUpdate();
fakeFetch();
setInterval(fakeFetch, 2000);
