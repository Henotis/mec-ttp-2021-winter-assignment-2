'use strict';

/*
	MEC TTP 2021 Winter Assignment 2: Blackjack Game Engine
	
	===== PURPOSE =====
	- To practice implementing core javascript principles within the framing of building a blackjack card game engine.
	
	===== MAJOR FEATURES =====
	- User should be able to start the Blackjack game.
	- User should be able to hit.
	- User should be able to stand.
	- User should be able to check status.
	- User should be able to reset the game.

	===== FUNCTION STUBS =====
	- start()
	- hit()
	- stand()
	- status()
	- reset()

	===== GOTCHAS =====
	- The same card should not be dealt twice.

	===== REDUCE THE PROBLEM SPACE =====
	- For now, assume there is no suit.
	- For now, assume duplicates are allowed.
*/

// let diamond_suit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// let heart_suit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// let spades_suit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// let clubs_suit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

//There should be a random function that selects
//a random card  from a random deck  

let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

let wins = 0;
let losses = 0;
// let ties = 0;

let user_hands = [];
let ai_hands = [];

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function totalSum(arr) {
	let sum = 0;
	for (let index = 0; index < arr.length; index++) {
		sum += arr[index];
	}
	return sum;
}

/*
//
while(userSum < 22 && aiSum < 22 && endGame = 1){
  let endGame = 0;
  function stand(){
	endGame = 1;
  }

  function hit(){
  user_hands.push(deck[Math.floor(Math.random()*deck.length)])
  }
  function aiHit(){
	ai_hands.push(deck[Math.floor(Math.random()*deck.length)])
  }
  function ifOver17(aiHand){
	if(aiHand > 17){
	  aiHit();
	}
  }
}
*/

function dealCards() {
	user_hands = [];
	ai_hands = [];
	for (let index = 0; index < 2; index++) {
		// todo: make sure that the two player's hands are of equal length
		//add 2 cards to user and ai hands
		user_hands.push(deck[Math.floor(Math.random() * deck.length)])
		ai_hands.push(deck[Math.floor(Math.random() * deck.length)])
	}
	let userSum = totalSum(user_hands);
	console.log(userSum);
	let aiSum = totalSum(ai_hands);
	console.log(aiSum);

	//if aisum > 17 call ifOver17
}
//Can optimize code with class
//Find out how to make a class with javascript


dealCards();

/*
	if(Math.random() < .5){
		// give to the player
		if(Math.random() < .5){
		user_hands.push(deck[index]);
		}else{
		user_hands.unshift(deck[index]);
		}
	}else{
		// give to the ai
		if(Math.random() < .5){
		ai_hands.push(deck[index]);
		}else{
		ai_hands.unshift(deck[index]);
		}
	}

	}
}

function play_one_hand(){
	return {
	user_card: user_hands.pop(),
	ai_card: ai_hands.pop()
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
	let hand = play_one_hand();
	console.log(hand);
	determine_outcome(hand);
}

*/
