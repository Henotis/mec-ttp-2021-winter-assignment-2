/*
	MEC TTP 2021 Winter Assignment 2: Blackjack Game Engine
	
	===== PURPOSE =====
	- To practice implementing core javascript principles within the framing of building a blackjack card game engine.
	
	===== MAJOR FEATURES =====
	- User should be able to hit.
	- User should be able to stand.
	- User should be able to check status.
	- User should be able to reset the game.
	- User should be able to start the Blackjack game.

	===== FUNCTION STUBS =====
	- hit()
	- stand()
	- status()
	- reset()
	- start()

	===== GOTCHAS =====
	- The same number cannot be dealt more than four times.

	===== PROBLEM SPACE =====
	- Assume there is no betting involved, only wins, losses, and ties.
	- Assume there are only 2 players: the user and the dealer AI.
	- Assume aces always count as 1.
	- Assume there is no option to split, double down, or buy insurance.
	- Assume that both the dealer's cards are given face up (ie visible).
*/

let deck = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
];

let wins = 0;
let losses = 0;
let ties = 0;

let aiHand = [];
let userHand = [];

// this variable is used in .reduce() to add an array together
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// returns the Blackjack game to its initial state
function reset() {
	deck = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
	];

	aiHand = [];
	userHand = [];
}

// displays wins, losses, and ties
function status() {
	console.log("Wins: " + wins)
	console.log("Losses: " + losses)
	console.log("Ties: " + ties)
}

// this function should remove the card from deck once it's dealt
function cardRemove(index) {
	deck.splice(index, 1);
}

// adds to player hand only!
function hit() {
	cutCard = 0;
	///////////////////////////
	cutCard = Math.floor(Math.random()*deck.length)
	cardIndex = deck[cutCard]
	console.log("Index removed: " + cutCard)
	userHand.push(cardIndex)
	cardRemove(cutCard)
	///////////////////////////
	userTotal = userHand.reduce(reducer)
	console.log(userTotal);
	if (userTotal > 21) {
		losses += 1;
		console.log("You bust! Reset the game to play again!")
		status()
		reset()

	}
}

// user doesn't want to hit anymore and compares their numbers with the AI for the win or loss
function stand() {
	aiTotal = aiHand.reduce(reducer)
	userTotal = userHand.reduce(reducer)

	if (aiTotal > userTotal) {
		console.log("AI wins!, Winning Number: " + aiTotal)
		losses += 1;
		status()
		reset()
	}
	else if (aiTotal < userTotal) {
		console.log("Congrats! You won!: " + userTotal)
		wins += 1
		status()
		reset()
	}
}

// starts the game
function start() {
	reset();
<<<<<<< HEAD
	
	//temporarily holds the card that we want to cut from the deck
	cutCard = 0;

	for(let i = 0; i < 2; i++){
		//assigning a random index from deck size to cutCard
		cutCard = Math.floor(Math.random()*deck.length)
		//assigning value of the index within deck to card Index
		cardIndex = deck[cutCard]
		//tracking the index of the card removed
		console.log("Index removed: " + cutCard)
		//pushing the value if the cardIndex into hand
		aiHand.push(cardIndex)
		//finally cutting out the card!
		cardRemove(cutCard)
	}
	aiTotal = aiHand.reduce(reducer)
	console.log("AI current hand: " + aiTotal)

	for(let i = 0; i < 2; i++){
		cutCard = Math.floor(Math.random()*deck.length)
		cardIndex = deck[cutCard]
		console.log("Index removed: " + cutCard)
		userHand.push(cardIndex)
		cardRemove(cutCard)
	}
	userTotal = userHand.reduce(reducer)
	console.log("User current hand: " + userTotal)
}

=======
>>>>>>> 04e3c798038f38a8de4147030e17ca6ceb05e495

	// holds the index of the card that we want to deal from the deck
	let index = 0;

	for (let i = 0; i < 2; i++) {
		// generates random index
		index = Math.floor(Math.random() * deck.length)
		// push card at index to aiHand
		aiHand.push(deck[index])
		// remove dealt card from deck
		cardRemove(index)
	}
	console.log("AI current hand: " + aiHand.reduce(reducer))

	for (let i = 0; i < 2; i++) {
		// generates random index
		index = Math.floor(Math.random() * deck.length)
		// push card at index to userHand
		userHand.push(deck[index])
		// remove dealt card from deck
		cardRemove(index)
	}
	console.log("User current hand: " + userHand.reduce(reducer))
}