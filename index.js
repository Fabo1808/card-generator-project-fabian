let cards = {
	suits: ["&#9830", "&#9829", "&#9824", "&#9827"],
	DownSuits: ["&#9830", "&#9829", "&#9824", "&#9827"],
	numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

};
let buttonCardGenerator = document.querySelector(".generateCard");

let numbersAndSuits = () => {

	let suitsNumbers = Math.floor(Math.random() * cards.numbers.length);
	document.querySelector("#randomNumber").innerHTML = cards.numbers[suitsNumbers];

	let allSuits = Math.floor(Math.random() * cards.suits.length);
	document.querySelector('#suitTop').innerHTML = cards.suits[allSuits];
	document.querySelector('#suitBottom').innerHTML = cards.suits[allSuits];


	if (cards.suits[allSuits] === "&#9830" || cards.suits[allSuits] === "&#9829") {
		document.querySelector("#theCard").classList.add("redSuit");
	} else if (cards.suits[allSuits] === "&#9827" || cards.suits[allSuits] === "&#9824") {
		document.querySelector("#theCard").classList.remove("redSuit");

	}

};

buttonCardGenerator.addEventListener("click", numbersAndSuits);
window.addEventListener("load", numbersAndSuits);