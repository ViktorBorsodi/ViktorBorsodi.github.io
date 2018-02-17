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

function pomodoro() {
	var timer = new Timer();
	$('h2').text('Session');
	$('.clear').css('border','3px solid chartreuse');
	timer.start({countdown: true, startValues: {minutes: sessionLength}});
	$('#display').html(timer.getTimeValues().toString());
	timer.addEventListener('secondsUpdated', function (e) {
		$('#display').html(timer.getTimeValues().toString());
	});
	$('.clear').addClass('running');
	$('.clear').on('click',function () {
		if ($('.clear').hasClass('running')) {
			timer.pause();			
			$('.clear').removeClass('running');
			$('.clear').addClass('paused');
		}
		else {
			timer.start();
			$('.clear').addClass('running');
			$('.clear').removeClass('paused');
		}
	});
	$('button').on('click',function() {
		timer.stop();
		$('.clear').off('click');
		pomodoro();
	});
	timer.addEventListener('targetAchieved', function (e) {
		var audio = new Audio('bell.mp3');
		audio.play();
		var leisure = new Timer();
		$('h2').text('Break');
		$('.clear').css('border','3px solid crimson');
		leisure.start({countdown: true, startValues: {minutes: breakLength}});
		$('#display').html(leisure.getTimeValues().toString());
		leisure.addEventListener('secondsUpdated', function (e) {
			$('#display').html(leisure.getTimeValues().toString());
		});
		$('.clear').off('click');
		$('.clear').on('click',function () {
			if ($('.clear').hasClass('running')) {
				leisure.pause();
				$('.clear').removeClass('running');
				$('.clear').addClass('paused');
			}
			else {
				leisure.start();
				$('.clear').addClass('running');
				$('.clear').removeClass('paused');
			}
		});
		$('button').on('click',function() {
			leisure.stop();
			$('.clear').off('click');
			pomodoro();
		});
		leisure.addEventListener('targetAchieved', function (e) {
			audio.play();
			pomodoro();
		});	
	});	
};

$('.clear').one('click', pomodoro);

