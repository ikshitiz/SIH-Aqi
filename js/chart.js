    // Load google charts
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      // Draw the chart and set the chart values
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Pollution', 'Pollutants'],
        ['PM 1',38],
        ['PM 2.5',81],
        ['Pm 10',101],
        ['No2',6.51],
        ['CO2',12.6],
        ['CO',12.82],
        ['Humidity',32],
        ['Temp',45]
      ]);

        // Optional; add a title and set the width and height of the chart
        var options = {'title':'Pollution','width':600,'height':400};

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.ColumnChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }