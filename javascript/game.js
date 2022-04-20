function checkAnwser() {
	let sgtWord = document.getElementById("endTalkWord").innerText;
	let inputValue = document.getElementById("inputEndTalk").value;

	if (inputValue.length > 1 && inputValue[0] === sgtWord[sgtWord.length - 1]) {
		document.getElementById("endTalkWord").innerText = "제시어 : " + inputValue;
		document.getElementById("resultEndTalk").innerText = "정답입니다.";
	} else {
		document.getElementById("resultEndTalk").innerText = "틀렸습니다.";
	}
	document.getElementById("inputEndTalk").value = null;
}