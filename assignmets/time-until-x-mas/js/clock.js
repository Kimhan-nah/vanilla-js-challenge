const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	const xMasYear = date.getFullYear();
	if (date.getMonth() === 11 && date.getDate() >= 24) {	// after 12-24
		xMasYear++;
	}
	const xMasDate = new Date(xMasYear, 11, 24);		// 2023-12-24
	const diffTime = xMasDate.getTime() - date.getTime();
	const diffDate = String(Math.floor(diffTime / (1000 * 60 * 60 * 24))).padStart(3, "0");
	const diffHours = String(Math.floor(diffTime / (1000 * 60 * 60)) % 24).padStart(2, "0");
	const diffMinutes = String(Math.floor(diffTime / (1000 * 60)) % 60).padStart(2, "0");
	const diffSeconds = String(Math.floor(diffTime / 1000) % 60).padStart(2, "0");

	clock.innerText = `${diffDate}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
}

getClock();
setInterval(getClock, 1000);	// 1 sec