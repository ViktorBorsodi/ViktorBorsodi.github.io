var search = document.querySelector('#search');

$("#search").on("keypress", function(e){
	if(e.which == 13){
		$("a").css("margin-top","10px");
		$(".linkClass").remove();
		$.ajax( {
			url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&titles=Main%20Page&generator=search&exsentences=1&exintro=1&explaintext=1&exsectionformat=plain&inprop=url&gsrsearch=" + search.value + "&gsrinfo=totalhits%7Csuggestion%7Crewrittenquery",
			dataType: 'jsonp',
			success: function(data) {
			// do something with data
			var pages = data.query.pages;
			for (var i in pages) {
				var title = $( "<h3>" ).text( pages[i].title );
				var extract = $( "<p>" ).html( pages[i].extract );
				var link = document.createElement('a');
				title.appendTo(link);
				extract.appendTo(link);
				document.body.appendChild(link);
				link.setAttribute('class','linkClass');
				link.setAttribute('href',pages[i].fullurl);
				link.setAttribute('target','_blank');
			}
			}
		} );
	}
});
