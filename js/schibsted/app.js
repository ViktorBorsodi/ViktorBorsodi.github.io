var photos;
var existingSearch = false;
var firstImage = 0;
var lastImage = 11;

$('#input').keypress(function(event){
	if(event.which === 13){
		var input = $(this).val();
		$(this).val('');
		search(input);
	}
});

$('button').click(function(){
	var searchKeyword = $(this).text();
	search(searchKeyword);
});

function search(input){
	$('.imgContainer').remove();
	firstImage = 0;
	lastImage = 11;
	var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=57f694132e4714c29a64c9af890b124e&text=' + input + '&format=json&nojsoncallback=1&per_page=500';
	fetch(apiUrl)
	.then(function(response){
		return response.json();
	}).
	then(function(data){
		photos = data.photos.photo;
		loadImages();
	}).
	catch(function(error){
		console.log(error);
	});
	existingSearch = true;
}

$(window).scroll(function() {
	if( existingSearch && $(window).scrollTop() >= $(document).height() - $(window).height() - 1 ) {
		loadImages();
	}
});

function loadImages(){
	for(var i = firstImage; i <= lastImage; i++){
		$('#row').append('<div class="imgContainer col-sm-12 col-md-6 col-lg-4 col-xl-3 px-0"><img class="img-fluid"></div>');
		var photo = photos[i];
		var imgUrl = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
		$('img')[i].src = imgUrl;
	}
	firstImage += 12;
	lastImage += 12;
}
