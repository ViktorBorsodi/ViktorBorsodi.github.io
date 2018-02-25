var lever = $('#lever');
var stick = $('#lever div');
var count = $('#count');
var start = $('#start');
var strict = $('#strict');
var green = "green";
var red = "red";
var yellow = "yellow";
var blue = "blue";

var simon = {
	sendColor: function(color){
		if (!simon.sequence.length){
			simon.nextSequence();
		}
		else {
			if (color === simon.sequence[simon.step]) {
				if (simon.step === simon.sequence.length - 1) {
					if (simon.round < 20) {
						simon.step = 0;
						simon.nextSequence();
						simon.round++;
						count.text(simon.round);
						simon.playSequence();
					}
					else {
						simon.step = 0;
						simon.started = false;
						simon.sequence = [];
						simon.round = 0;
						count.text(simon.round);						
					}
				}
				else {
					simon.step++;
				}
			}
			else {
				simon.step = 0;
				if (simon.strict === false) {
					alert('Wrong!');
					simon.playSequence();
				}
				else {
					simon.sequence = [];
					simon.round = 0;
					count.text(simon.round);
					simon.started === false;
					alert('Wrong!');
				}			
			}
		}
	},
	sequence: [],
	colors: [green,red,yellow,blue],
	step: 0,
	nextSequence: function(){
		var nextColor = simon.colors[Math.floor(Math.random() * 4)];
		simon.sequence.push(nextColor);
	},
	on: false,
	started: false,
	colorInterval: '',
	playSequence: function(){
		var i = 0;
		simon.colorInterval = setInterval(function(){
			var id = simon.sequence[i];
			var color;
			var audio;
			switch (id) {
				case 'green':
					color = 'rgb(0,255,0)';
					audio = new Audio('simonSound1.mp3');
					break;
				case 'red':
					color = 'rgb(255,0,0)';
					audio = new Audio('simonSound2.mp3');
					break;
				case 'yellow':
					color = 'rgb(255,255,0)';
					audio = new Audio('simonSound3.mp3');
					break;
				case 'blue':
					color = 'rgb(0,0,255)';
					audio = new Audio('simonSound4.mp3');
					break;
			};
			$('#' + id).css('background-color',color);
			audio.play();
			setTimeout(function(){
				switch (id) {
					case 'green':
						$('#' + id).css('background-color','rgb(0,127,0)');
						break;
					case 'red':
						$('#' + id).css('background-color','rgb(127,0,0)');
						break;
					case 'yellow':
						$('#' + id).css('background-color','rgb(127,127,0)');
						break;
					case 'blue':
						$('#' + id).css('background-color','rgb(0,0,80)');
						break;
				};
			}, 800);
			i++;
			if(i == simon.sequence.length) {
				clearInterval(simon.colorInterval);
			}
		}, 1000);
	},
	round: 0,
	strict: false
};

$(document).ready(function(){
	lever.on('click',function(){
		if (simon.on == false) {
			stick.css('margin-left','21px');
			simon.on = true;
			count.css('color','red');
		}
		else {
			stick.css('margin-left','0px');
			simon.on = false;
			count.css('color','grey');
			simon.started = false;
			simon.sequence = [];
			simon.step = 0;
			simon.round = 0;
			count.text(simon.round);
			clearInterval(simon.colorInterval);
		}
	});
	start.on('click',function(){
		if (simon.on) {
			if (simon.started == false) {
				simon.started = true;
				simon.round++;
				count.text(simon.round);
				simon.nextSequence();
				simon.playSequence();
			}
			else {
				simon.started = false;
				simon.sequence = [];
				simon.step = 0;
				simon.round = 0;
				count.text(simon.round);
				clearInterval(simon.colorInterval);
			}
		}
	});
	strict.on('click',function(){
		if (simon.on) {
			if (simon.strict === false) {
				simon.strict = true;
				$('#light').css('background-color','red');
			}
			else {
				simon.strict = false;
				$('#light').css('background-color','#444');
			}
		}
	});
	$('#red').click(function(){
		if (simon.on && simon.started) {
			$(this).css('background-color','rgb(255,0,0)');
			var audio = new Audio('simonSound2.mp3');
			audio.play();
			setTimeout(function(){
				$('#red').css('background-color','rgb(127,0,0)');
				simon.sendColor(red);
			}, 100);
		}
	});
	$('#green').click(function(){
		if (simon.on && simon.started) {
			$(this).css('background-color','rgb(0,255,0)');
			var audio = new Audio('simonSound1.mp3');
			audio.play();
			setTimeout(function(){
				$('#green').css('background-color','rgb(0,127,0)');
				simon.sendColor(green);
			}, 100);
		}
	});
	$('#yellow').click(function(){
		if (simon.on && simon.started) {
			$(this).css('background-color','rgb(255,255,0)');
			var audio = new Audio('simonSound3.mp3');
			audio.play();
			setTimeout(function(){
				$('#yellow').css('background-color','rgb(127,127,0)');
				simon.sendColor(yellow);
			}, 100);
		}
	});
	$('#blue').click(function(){
		if (simon.on && simon.started) {
			$(this).css('background-color','rgb(0,0,255)');
			var audio = new Audio('simonSound4.mp3');
			audio.play();
			setTimeout(function(){
				$('#blue').css('background-color','rgb(0,0,80)');
				simon.sendColor(blue);
			}, 100);
		}
	});

});