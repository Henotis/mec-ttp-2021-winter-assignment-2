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
	
	===== GOTCHAS =====
	- The same number cannot be dealt more than four times.

	===== FUNCTION STUBS =====
	- hit()
	- stand()
	- status()
	- reset()
	- start()

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
let index = 0;

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
	index = 0;
	
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

//adds to player hand only!
function hit() {
	index = 0;
	///////////////////////////
	index = Math.floor(Math.random()*deck.length)
	console.log("Index removed: " + index)
	userHand.push(deck[index])
	cardRemove(index)
	///////////////////////////
	userTotal = userHand.reduce(reducer)
	console.log("Your current Total: " + userTotal);
	if (userTotal > 21) {
		losses += 1;
		console.log("You bust! Game has reset! start() to play again!")
		status()
		reset()

	}
}

// user doesn't want to hit anymore and compares their numbers with the AI for the win or loss
function stand() {
	aiTotal = aiHand.reduce(reducer)
	userTotal = userHand.reduce(reducer)

	if (aiTotal > userTotal) {
		console.log("AI wins! Game has reset! start() to play again! Winning Number: " + aiTotal)
		losses += 1;
		status()
		reset()
	}
	else if (aiTotal < userTotal) {
		console.log("You won! Game has reset! start() to play again! Your total is: " + userTotal)
		wins += 1
		status()
		reset()
	}
	else if(aiTotal == userTotal){
		console.log("It's a tie! Game has reset! start() to play again!")
		ties += 1;
		status()
		reset()
	}
}


// starts the game
function start() {
	reset();
	
	//temporarily holds the card that we want to cut from the deck
	index = 0;
	for(let i = 0; i < 2; i++){
		//assigning a random index from deck size to cutCard
		index = Math.floor(Math.random()*deck.length)
		//tracking the index of the card removed
		console.log("Index removed: " + index)
		//pushing the value if the cardIndex into hand
		aiHand.push(deck[index])
		//finally cutting out the card!
		cardRemove(index)
	}

	aiTotal = aiHand.reduce(reducer)
	
	if(aiTotal < 17){
		index = Math.floor(Math.random()*deck.length)
		console.log("Index removed: " + index)
		aiHand.push(deck[index])
		cardRemove(index)
		aiTotal = aiHand.reduce(reducer)
		if(aiTotal > 21){
			console.log("AI has busted! Game has been reset!")
			reset()
			console.log("AI's total was: ")
			return aiTotal
		}
	}
	console.log("AI current hand: " + aiTotal)

	for(let i = 0; i < 2; i++){
		index = Math.floor(Math.random()*deck.length)
		console.log("Index removed: " + index)
		userHand.push(deck[index])
		cardRemove(index)
	}
	userTotal = userHand.reduce(reducer)
	console.log("User current hand: " + userTotal)
}
