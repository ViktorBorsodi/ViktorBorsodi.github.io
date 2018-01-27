var temp;

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		$.getJSON("https://fcc-weather-api.glitch.me/api/current?lon=" + position.coords.longitude + "&lat=" + position.coords.latitude, function(json) {
			$("#location").html(json.name + ", " + json.sys.country);
			$("#temperatureValue").html(json.main.temp);
			temp = json.main.temp;
			$("#description").html(json.weather[0].main);
			$("#image").prop("src",json.weather[0].icon)
		});
	});
};

var span = document.querySelector("#temperatureScale");
span.onclick = function () {
	var spanClass = span.getAttribute('class');
	if (spanClass == 'celsius') {
		var newTemp = temp * 1.8 + 32;
		$("#temperatureValue").html(newTemp);
		span.setAttribute('class', 'fahrenheit');
		$("#temperatureScale").html("Fahrenheit");
	}
	else {
		$("#temperatureValue").html(temp);
		span.setAttribute('class', 'celsius');
		$("#temperatureScale").html("Celsius");
	}
}