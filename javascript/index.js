function goHome() {
	document.getElementById("btn__home").style = "background-color: #FFF; color: #000;"
	document.getElementById("btn__game").style = "background-color: #298EB5; color: #FFF;"
	document.getElementById("btn__jukebox").style = "background-color: #298EB5; color: #FFF;"
	
	document.getElementById("page__home").style = null;
	document.getElementById("page__game").style = "visibility: hidden; display: none;";
	document.getElementById("page__jukebox").style = "visibility: hidden; display: none;";
}

function goGame() {
	document.getElementById("btn__game").style = "background-color: #FFF; color: #000;"
	document.getElementById("btn__home").style = "background-color: #298EB5; color: #FFF;"
	document.getElementById("btn__jukebox").style = "background-color: #298EB5; color: #FFF;"

	document.getElementById("page__game").style = null;
	document.getElementById("page__home").style = "visibility: hidden; display: none;";
	document.getElementById("page__jukebox").style = "visibility: hidden; display: none;";
}

function goJukebox() {
	document.getElementById("btn__jukebox").style = "background-color: #FFF; color: #000;"
	document.getElementById("btn__home").style = "background-color: #298EB5; color: #FFF;"
	document.getElementById("btn__game").style = "background-color: #298EB5; color: #FFF;"

	document.getElementById("page__jukebox").style = null;
	document.getElementById("page__home").style = "visibility: hidden; display: none;";
	document.getElementById("page__game").style = "visibility: hidden; display: none;";
}