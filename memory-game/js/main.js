
const cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-diamonds.png"	
}
];

let cardsInPlay = [];

let numberOfWins = 0;

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		numberOfWins++;
		alert("You found a match!");
		document.querySelector("h3").innerHTML = "Score = " + numberOfWins;

	} else {

		alert("Sorry, try again.");
	}
}


function flipCard() {
	const cardId = this.getAttribute('data-id'); 
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay.length === 2) {
		checkForMatch();	
	}

}



function createBoard() {

	

	for (i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}

}



createBoard();


function resetBoard() {

cardsInPlay = [];

let currentCards = document.querySelectorAll("img");

for (let i = 0; i < currentCards.length; i++) {
	let reset = currentCards[i];
	reset.remove();
}

createBoard();	
}

document.querySelector("button").addEventListener("click", resetBoard);



















