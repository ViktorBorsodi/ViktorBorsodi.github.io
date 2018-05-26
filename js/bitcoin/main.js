var btn = document.querySelector('button');
var price = document.querySelector('#price');
var usd = document.querySelector('#usd');
var gbp = document.querySelector('#gbp');
var eur = document.querySelector('#eur');

function getPrice(){
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			var data = JSON.parse(XHR.responseText);
			var currency;
			var value;
			if(usd.checked){
				currency = data.bpi.USD.code;
				value = data.bpi.USD.rate;
			}
			else if(gbp.checked){
				currency = data.bpi.GBP.code;
				value = data.bpi.GBP.rate;
			}
			else if(eur.checked){
				currency = data.bpi.EUR.code;
				value = data.bpi.EUR.rate;
			}
			else{
				currency = data.bpi.HUF.code;
				value = data.bpi.HUF.rate;				
			}						
			price.textContent = value + ' ' + currency;
		}
	}

	var url;
	if(huf.checked){
		url = 'https://api.coindesk.com/v1/bpi/currentprice/HUF.json';
	}
	else{
		url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
	}

	XHR.open('GET',url);
	XHR.send();
}

getPrice();

btn.addEventListener('click',function(){
	getPrice();
});