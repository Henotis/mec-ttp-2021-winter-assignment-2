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
	- For now, assume the same number can be dealt more than four times.
*/

// takes a random element from deck and pushes it into han
var deck = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
];

var wins = 0;
var losses = 0;
var ties = 0;

var aiHand = [];
var userHand = [];

//this variable is used in reduce to add an array together
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// displays wins, losses, and ties
function status() {
	console.log("Wins: " + wins)
	console.log("Losses: " + losses)
	console.log("Ties: " + ties)
}

//adds to player hand only!
function hit() {
	userHand.push(deck[Math.floor(Math.random()*deck.length)])
	userTotal = userHand.reduce(reducer)
	console.log(userTotal);
	if(userTotal > 21){
		losses += 1;
		console.log("You bust! Reset the game to play again!")
		status()
	}
}

// compares total card values and updates wins/losses/ties
function stand() {
	aiTotal = aiHand.reduce(reducer)
	userTotal = userHand.reduce(reducer)

	if(aiTotal > userTotal){
		console.log("AI wins!, Winning Number: " + aiTotal)
		losses += 1;
		status()
		return aiTotal;
	}
	if(aiTotal < userTotal){
		console.log("Congrats! You won!: " + userTotal)
		wins += 1
		status()
		return userTotal;
	}
}


// returns the Blackjack game to its initial state
function reset() {

}

// starts the game
function start() {
	reset();

	aiHand.push(deck[Math.floor(Math.random()*deck.length)])
	aiHand.push(deck[Math.floor(Math.random()*deck.length)])

	//assigns the total in ai's hand to aiTotal
	aiTotal = aiHand.reduce(reducer)
	console.log(aiTotal)

	// todo: populate aiHand based on its standardized rules

	userHand.push(deck[Math.floor(Math.random()*deck.length)])
	userHand.push(deck[Math.floor(Math.random()*deck.length)])
	//assigns the total in user's hand to userTotal
	userTotal = userHand.reduce(reducer)
	console.log(userTotal);

}


// ===== BRAINSTORM SECTION =====

// // returns the total card value of hand
// function calculateTotal(hand) {
// 	let sum = 0;
// 	for (let index = 0; index < hand.length; index++) {
// 		sum += hand[index];
// 	}
// 	return sum;
// }

/*
while(userSum < 22 && aiSum < 22 && endGame = 1){
  var endGame = 0;
  function stand(){
	endGame = 1;
  }

  function hit(){
  userHand.push(deck[Math.floor(Math.random()*deck.length)])
  }
  function aiHit(){
	aiHand.push(deck[Math.floor(Math.random()*deck.length)])
  }
  function ifOver17(aiHand){
	if(aiHand > 17){
	  aiHit();
	}
  }
}
*/

// function dealCards() {
// 	userHand = [];
// 	aiHand = [];
// 	for (var index = 0; index < 2; index++) {
// 		// todo: make sure that the two player's hands are of equal length
// 		//add 2 cards to user and ai hands
// 		userHand.push(deck[Math.floor(Math.random() * deck.length)])
// 		aiHand.push(deck[Math.floor(Math.random() * deck.length)])
// 	}
// 	var userSum = calculateTotal(userHand);
// 	console.log(userSum);
// 	var aiSum = calculateTotal(aiHand);
// 	console.log(aiSum);

// 	//if aisum > 17 call ifOver17
// }
//Can optimize code with class
//Find out how to make a class with javascript

/*
	if(Math.random() < .5){
		// give to the player
		if(Math.random() < .5){
		userHand.push(deck[index]);
		}else{
		userHand.unshift(deck[index]);
		}
	}else{
		// give to the ai
		if(Math.random() < .5){
		aiHand.push(deck[index]);
		}else{
		aiHand.unshift(deck[index]);
		}
	}

	}
}

function play_one_hand(){
	return {
	user_card: userHand.pop(),
	ai_card: aiHand.pop()
	}
}

function determine_outcome(hand){
	if(hand.user_card > hand.ai_card){
	console.log('you won!');
	wins++;
	}else{
	console.log('sorry, you lost!');
	losses++;
	}
}


function start(){
	deal_out_cards();
	var hand = play_one_hand();
	console.log(hand);
	determine_outcome(hand);
}

*/
