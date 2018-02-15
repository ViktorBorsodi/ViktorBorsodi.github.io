var input = $('#input');

$(".normal").on("click", function() {
	var char = $(this).text();
	if (result.text() != '') {
		input.text('');
		result.text('');
	}
	input.text(input.text() + char);
	if (input.text().length > 38) {
		result.text('Max digits reached');
		result.css('font-size','30px');
		input.text('');
	}
});

$(".operator").on("click", function() {
	var lastChar = input.text()[input.text().length-1];
	if (lastChar == '÷' || lastChar == '×' || lastChar == '+' || lastChar == '-') {
		var correction = input.text().slice(0,input.text().length-1);
		input.text(correction);
	}
	if (result.text() != '') {
		input.text(result.text());
		result.text('');
	}
	var char = $(this).text();
	input.text(input.text() + char);
	if (input.text().length > 38) {
		result.text('Max digits reached');
		result.css('font-size','30px');
		input.text('');
	}
});

var result = $('#result');

$('.clear').on('click', function() {
	result.text('');
	input.text('');
});

$('.equal').on('click', function(e) {
	var exp = input.text();
	exp = exp.replace(/÷|×/g, function(match) {
		if (match == '÷') {
			return '/';
		}
		else {
			return '*';
		}
	});
	var resultNum = eval(exp);
	resultNum =	+resultNum.toFixed(2);
	result.text(resultNum);
	var str = resultNum.toString();
	if (str.length > 14) {
		result.text('Max digits reached');
		result.css('font-size','30px');
		input.text('');
	}
});

