var sessionLength = 25;

$('#decr-session').on('click', function() {
	sessionLength--;
	$('#session-length').text(sessionLength);
});

$('#incr-session').on('click', function() {
	sessionLength++;
	$('#session-length').text(sessionLength);
});

var breakLength = 5;

$('#decr-break').on('click', function() {
	breakLength--;
	$('#break-length').text(breakLength);
});

$('#incr-break').on('click', function() {
	breakLength++;
	$('#break-length').text(breakLength);
});

var start = $('.countdown');

var display = $('#display');

var title = $('h2');

function showTime(time) {
	var min = Math.floor(time/60);
	var sec = Math.round(time%60);
	if (sec < 10) {
		sec = '0' + sec
	}
	var timeString = min+':'+sec;
	display.text(timeString);
};

var timer;
var leisure;

start.on('click', function() {
	clearInterval(timer);
	clearInterval(leisure);
	title.text('Session');
	start.css('border','3px solid chartreuse');
	sessionLengthInS = sessionLength * 60;
	breakLengthInS = breakLength * 60;
	timer = setInterval(function() {
		sessionLengthInS--;
		if (sessionLengthInS < 0) {
			clearInterval(timer);
			var audio = new Audio('bell.wav');
			audio.play();
			title.text('Break');
			start.css('border','3px solid crimson');
			leisure = setInterval(function() {
				breakLengthInS--;
				if (breakLengthInS < 0) {
					clearInterval(leisure);
					audio.play();
				} else {
					showTime(breakLengthInS);
				}
			}, 1000);
		} else {
			showTime(sessionLengthInS);
		}
	}, 1000);
});

