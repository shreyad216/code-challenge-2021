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
	changeDisplay();
	
}

function changeDisplay() {
	document.getElementById("hello_world").style.color = "cyan";
	document.getElementById("hello_world").style.display = "inline";
	document.getElementById("hello_world").style.fontSize = "30pt";
	document.getElementById("hello_world").style.fontWeight = "bold";
	document.getElementById("hello_world").style.outlineStyle = "solid";
	document.getElementById("hello_world").style.outlineColor = "white";
	document.getElementById("h1").style.color = "slateBlue";
	document.getElementById("hello_world").style.borderRadius = "12px";
	document.getElementById("hello_world").style.padding = "3px 12px";
	setTimeout(changeToO, 1000);
	


}

function changeToCyan() {
	document.getElementById("hello_world").style.color = "cyan";
	document.getElementById("hello_world").style.outlineColor = "darkOrchid";
	document.getElementById("hello_world").style.fontStyle = "italic";
	setTimeout(changeToO, 1000);
}
function changeToO() {
	document.getElementById("hello_world").style.color = "darkOrchid";
	document.getElementById("hello_world").style.outlineColor = "cyan";
	document.getElementById("hello_world").style.fontStyle = "normal";
	setTimeout(changeToCyan, 1000);
}