var count = 0;
var img = document.querySelector('img');
var playButton = document.querySelector('#play');
var paused = true;
var videoId;
var inputSpeed = document.querySelector('#speed');
var playbackSpeed = 15;
var playbackDisplay = document.querySelector('#playbackDisplay');
var lastImg = 357;
var frameIndex = document.querySelector('#caption');
var searchQuery = 'X-ARHProp-imgframeindex=';

inputSpeed.addEventListener('change',function(){
	playbackSpeed = Number(this.value);
	playbackDisplay.innerText = this.value;
});

playButton.addEventListener('click',function(){
	if(paused){
		play();
		paused = false;
		playButton.innerText = 'Pause';
		$('.frameControls').attr('disabled',true);
	} else {
		pause();
		$('.frameControls').attr('disabled',false);
	}
});

function play(){
	videoId = setInterval(function(){
		count++;
		if(count > lastImg){
			pause();
			count = 0;
			$('.frameControls').attr('disabled',false);
		}
		changeImg();
	}, 1000 / Math.abs(playbackSpeed));
};

function changeImg(){
	var countInString = count.toString();
	if(countInString.length == 1){
		countInString = '00' + countInString;
	}
	else if(countInString.length == 2){
		countInString = '0' + countInString;
	}
	var imgSrc = 'files/000' + countInString + '.jpg';
	img.src = imgSrc;

	var url = 'files/000'+ countInString + '.txt';
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'text';
	request.onload = function() {
		var text = request.response;
		var startOfString = text.indexOf(searchQuery) + searchQuery.length;
		var endOfString = text.indexOf('X', startOfString);
		frameIndex.innerText = text.substring(startOfString,endOfString);
	};
	request.send();
};

function pause(){
	clearInterval(videoId);
	paused = true;
	playButton.innerText = 'Play';
};

$('.frameControls').on('click',function(){
	if(this.innerText == '<'){
		count--;
	}
	else if(this.innerText == '>'){
		count++;
	}
	else if(this.innerText == '<<'){
		count -= 10;
	}
	else if(this.innerText == '>>'){
		count += 10;
	}
	if(count < 0){
		count = 0;
	}
	else if(count > lastImg){
		count = lastImg;
	}
	changeImg();
});
