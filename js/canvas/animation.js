var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.translate(width/2, height/2);

var image = new Image();
image.src = 'walk-right.png';
image.onload = draw;

var sprite = 0;
var posX = 0;

function draw() {
	
	ctx.fillRect(-(width/2), -(height/2), width, height);

	ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);
	if (posX % 11 === 0) {
		if (sprite === 5) {
			sprite = 0;
		} else {
			sprite++;
		}
	}

	if(posX > width/2) {
		newStartPos = -((width/2) + 102);
		posX = Math.ceil(newStartPos / 11) * 11;
		console.log(posX);
	} else {
		posX += 5;
	}

	window.requestAnimationFrame(draw);

};