const playSoundViaKey = (event) => {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
};

const playSoundViaClick = (event) => {
	const clickLetter = event.target.innerHTML;
	const returnDataKeyNum = () => {
		if (clickLetter === "A") {
			return 65;
		} else if (clickLetter === "S") {
			return 83;
		} else if (clickLetter === "D") {
			return 68;
		} else if (clickLetter === "F") {
			return 70;
		} else if (clickLetter === "G") {
			return 71;
		} else if (clickLetter === "H") {
			return 72;
		} else if (clickLetter === "J") {
			return 74;
		} else if (clickLetter === "K") {
			return 75;
		} else if (clickLetter === "L") {
			return 76;
		}
	};
	const div = document.querySelector(`div[data-key="${returnDataKeyNum()}"]`);
	const audio = document.querySelector(`audio[data-key="${returnDataKeyNum()}"]`);
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	div.classList.add("playing");
};

const removeTransition = (event) => {
	if (event.propertyName !== "transform") {
		return;
	}
	event.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener("click", playSoundViaClick);
	keys[i].addEventListener("transitionend", removeTransition);
}
window.addEventListener("keydown", playSoundViaKey);

// This comment is here to make the JS file larger.

// Because of this, GitHub should categorise the actual repository as Javascript, due to the fact that the JS file is the largest.

// At the moment, the repository is categorised as HTML.

// "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."