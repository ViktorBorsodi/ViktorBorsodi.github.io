var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

$('#xhr').click(function(){
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			var response = JSON.parse(XHR.responseText);
			$('#quote').text(response[0]);
		}
	};
	XHR.open('GET',url);
	XHR.send();
});

$('#fetch').click(function(){
	fetch(url)
	.then(function(response){
		return response.json();
	}).
	then(function(data){
		$('#quote').text(data[0]);
	})
});

$('#jquery').click(function(){
	$.getJSON(url)
	.done(function(response){
		$('#quote').text(response[0]);
	})
});

$('#axios').click(function(){
	axios.get(url)
	.then(function(response){
		$('#quote').text(response.data[0]);
	})
});