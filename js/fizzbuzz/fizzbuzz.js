var ol = document.querySelector('ol');

for (var i = 1; i <= 100; i++) {
	var listItem = document.createElement('li');
	ol.appendChild(listItem);
	if (i % 3 === 0 && i % 5 !== 0) {
		listItem.textContent = 'Fizz'
	}
	else if (i % 5 === 0 && i % 3 !== 0) {
		listItem.textContent = 'Buzz'
	}
	else if (i % 3 === 0 && i % 5 === 0) {
		listItem.textContent = 'Fizzbuzz'
	}
	else {
		listItem.textContent = i
	}
	
}