const gameForm = document.querySelector("#game-form");
const gameInputs = gameForm.querySelectorAll("input");
const playInfo = document.querySelector("#play-info");
const playResult = document.querySelector("#play-result");

const HIDDEN_CLASSNAME = "hidden";
const LOST = "You lost!";
const WON = "You won!";

function onPlay(event) {
	event.preventDefault();
	const randNum = Math.ceil(Math.random() * gameInputs[0].value);
	const num = parseInt(gameInputs[1].value);

	console.dir(randNum);
	console.dir(num);

	playInfo.innerHTML = `You chose: ${num}, the machine chose: ${randNum}.`;
	console.log(typeof randNum, randNum)
	console.log(typeof num, num)
	if (randNum === num) {
		playResult.innerHTML = WON;
	}
	else {
		playResult.innerHTML = LOST;
	}
	playInfo.classList.remove(HIDDEN_CLASSNAME);
	playResult.classList.remove(HIDDEN_CLASSNAME);
}

gameForm.addEventListener("submit", onPlay);