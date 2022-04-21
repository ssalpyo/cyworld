const checkAnwser = () => {
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

const getRandom = () => {
	let lotto = [];
	
	while (lotto.length < 6) {
		let num = parseInt(Math.random() * 45) + 1;

		if (lotto.indexOf(num) < 0) {
			lotto.push(num);
		}
	}
	lotto.sort((a, b) => a - b);
	return (lotto);
}

const getLottoNum = () => {
	let lotto = getRandom();

	for (let i = 0; i < lotto.length; i++) {
		document.getElementById(`lottoNum${i}`).innerText = lotto[i];
	}
}