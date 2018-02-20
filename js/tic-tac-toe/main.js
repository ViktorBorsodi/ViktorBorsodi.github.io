var player;
var comp;

$('#the-x').on('click',function() {
	player = 'x';
	comp = 'o';
});
$('#the-o').on('click',function() {
	player = 'o';
	comp = 'x';
});

var tds = $('td');

var compSteps = [];
var playerSteps = [];

var wincond = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

var gameOver;

function win() {
	for (var i = 0; i < wincond.length; i++) {
		var resultc = 0;
		var resultp = 0;
		for (var j = 0; j < wincond[i].length; j++) {
			if (compSteps.indexOf(wincond[i][j]) != -1) {
				resultc++;
			};
			if (playerSteps.indexOf(wincond[i][j]) != -1) {
				resultp++;
			};
		};
		if (resultc == 3) {
			tds.off('click');
			tds.removeClass('taken');
			for (var k = 0; k < wincond[i].length; k++) {
				$(tds[wincond[i][k]-1]).css('color','gold');
				$(tds[wincond[i][k]-1]).css('background-color','darkgreen');
			};
			gameOver = true;
			setTimeout(function(){
				tds.css('color','white');
				tds.css('background-color','seagreen');
				$('table').css('display','none');
				$('#compwin').css('display','block');
				$('#compwin').one('click',function() {
					compSteps = [];
					playerSteps = [];
					$('#compwin').css('display','none');
					tds.text('');
					$('#intro').css('display','block');
				});
			}, 2000);
			break;
		};
		if (resultp == 3) {
			tds.off('click');
			tds.removeClass('taken');
			for (var k = 0; k < wincond[i].length; k++) {
				$(tds[wincond[i][k]-1]).css('color','gold');
				$(tds[wincond[i][k]-1]).css('background-color','darkgreen');
			};
			gameOver = true;
			setTimeout(function(){
				tds.css('color','white');
				tds.css('background-color','seagreen');				
				$('table').css('display','none');
				$('#playerwin').css('display','block');
				$('#playerwin').one('click',function() {
					compSteps = [];
					playerSteps = [];
					$('#playerwin').css('display','none');
					tds.text('');
					$('#intro').css('display','block');
				});
			}, 2000);
			break;
		};
	};
};

$('div').on('click',function() {
	gameOver = false;
	$('#intro').css('display','none');
	$('table').css('display','table');
	var tdNum = 9;
	var num = Math.floor(Math.random() * tdNum);
	$(tds[num]).text(comp);
	compSteps.push(Number($(tds[num]).attr('id')));
	$(tds[num]).addClass('taken');
	tdNum--;
	tds.not('.taken').one('click',function(e) {
		$(this).text(player).addClass('taken');
		playerSteps.push(Number($(this).attr('id')));
		tdNum--;
		win();
		if (gameOver == true) {
			return;
		}
		num = Math.floor(Math.random() * tdNum);
		compSteps.push(Number($(tds.not('.taken')[num]).attr('id')));
		$(tds.not('.taken')[num]).text(comp).addClass('taken').off('click');
		tdNum--;
		win();
		if ($('.taken').length == 9) {
			tds.off('click');
			tds.removeClass('taken');
			setTimeout(function(){
				$('table').css('display','none');
				$('#draw').css('display','block');
				$('#draw').one('click',function() {
					compSteps = [];
					playerSteps = [];
					$('#draw').css('display','none');
					tds.text('');
					$('#intro').css('display','block');
				});
			}, 2000);
		};		
	});
});

