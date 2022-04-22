function goHome() {
	document.getElementById("contentFrame").setAttribute("src", "home.html");

	document.getElementById("btn__home").style = "background-color: #FFF; color: #000;"
	document.getElementById("btn__game").style = "background-color: #298EB5; color: #FFF;"
	document.getElementById("btn__jukebox").style = "background-color: #298EB5; color: #FFF;"
}

function goGame() {
	document.getElementById("contentFrame").setAttribute("src", "game.html");

	document.getElementById("btn__game").style = "background-color: #FFF; color: #000;"
	document.getElementById("btn__home").style = "background-color: #298EB5; color: #FFF;"
	document.getElementById("btn__jukebox").style = "background-color: #298EB5; color: #FFF;"
}

function goJukebox() {
	document.getElementById("contentFrame").setAttribute("src", "jukebox.html");

	document.getElementById("btn__jukebox").style = "background-color: #FFF; color: #000;"
	document.getElementById("btn__home").style = "background-color: #298EB5; color: #FFF;"
	document.getElementById("btn__game").style = "background-color: #298EB5; color: #FFF;"
}