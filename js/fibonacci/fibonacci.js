var series = [1,1];

while (series.length <= 100) {
	series.push(series[series.length-2] + series[series.length-1]);
}

var ol = document.querySelector('ol');

for (var i = 0; i < series.length; i++) {
	var listItem = document.createElement('li');
	ol.appendChild(listItem);
	listItem.textContent = series[i];
}






