function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var quotes = [
	"\"The basic ideas of investing are to look at stocks as business, use the market's fluctuations to your advantage, and seek a margin of safety. That's what Ben Graham taught us. A hundred years from now they will still be the cornerstones of investing.\"",
	"\"We simply attempt to be fearful when others are greedy and to be greedy only when others are fearful.\"",
	"\"Price is what you pay. Value is what you get.\"",
	"\"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.\"",
	"\"The investor of today does not profit from yesterday's growth.\"",
	"\"Someone's sitting in the shade today because someone planted a tree a long time ago.\"",
	"\"Rule No.1: Never lose money. Rule No.2: Never forget rule No.1.\"",
	"\"Risk comes from not knowing what you're doing.\"",
	"\"It's only when the tide goes out that you discover who's been swimming naked.\"",
	"\"It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.\"",
	"\"Our favorite holding period is forever.\"",
];

function random(number) {
return Math.floor(Math.random()*number) + 1;
}

function randomQuote() {
	var quote = randomValueFromArray(quotes);
	$("blockquote p").html(quote);
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	$("blockquote, blockquote footer").css("color",rndCol);
	$(".bg-color").css("background-color",rndCol);
	$("#twitter").prop("href","https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote));
};

randomQuote();

$("#quote-button").on("click",function() {randomQuote()});