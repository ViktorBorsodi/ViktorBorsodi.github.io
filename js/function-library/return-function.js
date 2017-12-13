var input = document.querySelector('.numberInput');
var para = document.querySelector('p');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  var x = num;
  while (x > 1) {
    num *= x-1;
    x--;
  }
  return num;
}

function circumference(num) {
	return 2 * num * Math.PI;
}

input.focus();

input.onchange = function() {
  var num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '. ' +
                       'The square root of ' + num + ' is ' + Math.sqrt(num) + '. ' +
                       'The cube root of ' + num + ' is ' + Math.cbrt(num) + '. ' +
                       'The circumference of a circle with a radius of length ' + num + ' is ' + circumference(num) + '.';
  }
	input.focus();
}
