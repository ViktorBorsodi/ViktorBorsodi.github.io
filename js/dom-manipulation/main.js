var list = document.querySelector('ul');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.onclick = function() {
	var newItem = input.value;
	input.value = '';

	var listItem = document.createElement('li');
	var span = document.createElement('span');
	var delBtn = document.createElement('button');

	listItem.appendChild(span);
	listItem.appendChild(delBtn);

	span.textContent = newItem;
	delBtn.textContent = 'Delete';

	list.appendChild(listItem);

	delBtn.onclick = function() {
		list.removeChild(listItem);
	}
	input.focus();
}