document.addEventListener("DOMContentLoaded", allWorkAndNoPlayisNoFunAtAll, false);

var myMessage = ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd'];
var i = 0, j = 0, mySound;

function allWorkAndNoPlayisNoFunAtAll() {
	console.log("Get to Play!");

	mySound = document.getElementById("bling");

	while ((i < myMessage.length) && (j < 300)) {
		document.getElementById('hello_world').innerHTML += myMessage[i];
		j++;
	}
}