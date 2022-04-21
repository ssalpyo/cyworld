const checkAll = () => {
	if (document.getElementById("checkTitle").checked === true) {
		document.getElementById("checkMusic1").checked = true;
		document.getElementById("checkMusic2").checked = true;
		document.getElementById("checkMusic3").checked = true;
		document.getElementById("checkMusic4").checked = true;
		document.getElementById("checkMusic5").checked = true;
	} else {
		document.getElementById("checkMusic1").checked = false;
		document.getElementById("checkMusic2").checked = false;
		document.getElementById("checkMusic3").checked = false;
		document.getElementById("checkMusic4").checked = false;
		document.getElementById("checkMusic5").checked = false;
	}
}