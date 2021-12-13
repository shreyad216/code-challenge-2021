document.addEventListener("DOMContentLoaded", allWorkAndNoPlayisNoFunAtAll, false);
document.getElementById("content").className= "visible";
document.getElementById("h1").style.textAlign= "center";
document.getElementById("content").style.textAlign= "center";
document.getElementById('hello_world').addEventListener("click", playSound);

var myMessage = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
var i = 0, j = 0, mySound;

function allWorkAndNoPlayisNoFunAtAll() {
	console.log("Get to Play!");

	mySound = document.getElementById("bling");
	while ((i < myMessage.length) && (j < 300)) {
		document.getElementById('hello_world').innerHTML += myMessage[i];
		i++;
	}

}

function playSound() {
	mySound.play();
	document.getElementById("hello_world").style.color = "cyan";
	document.getElementById("hello_world").style.display = "inline";
	document.getElementById("hello_world").style.fontSize = "30pt";
	document.getElementById("hello_world").style.fontWeight = "bold";
	document.getElementById("hello_world").style.outlineStyle = "solid";
	document.getElementById("hello_world").style.outlineColor = "white";
	document.getElementById("h1").style.color = "slateBlue";




}