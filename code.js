  
/*
   MEC TTP 2021 Winter Assignment 2: Blackjack Game Engine
   Use this js file to write your project outline and your core game logic.
   You will use your browser's javascript console to interact with the game.
 */

/*
    MEC TTP 2021 Winter Assignment 2:  BlackJack card game engine
    Purpose
    To practice implementing core javascript principles within the framing of building a blackjack card game engine.
    Background
    Blackjack is a very common, popular card game with relatively simple rules. 
    A hand can end as quickly as only dealing 4 cards but has also given rise to advanced analysis like card counting.
    
    Equally well known as Twenty-One. The rules are simple, the play is thrilling, and there 
    is opportunity for high strategy. In fact, for the expert player who mathematically plays a 
    perfect game and is able to count cards, the odds are sometimes in that player's favor to win.
   But even for the casual participant who plays a reasonably good game, the casino odds are less,
   making Blackjack one of the most attractive casino games for the player. While the popularity of
   Blackjack dates from World War I, its roots go back to the 1760s in France, where it is called Vingt-et-Un 
   (French for 21). Today, Blackjack is the one card game that can be found in every American gambling casino.
   As a popular home game, it is played with slightly different rules. In the casino version, the house is the dealer 
   (a "permanent bank"). In casino play, the dealer remains standing, and the players are seated.
   The dealer is in charge of running all aspects of the game, from shuffling and dealing the cards to
   handling all bets. In the home game, all of the players have the opportunity to be the dealer (a "changing bank").
   Each participant attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.
*/

/*
  TASKS:


  ///////////////////////////////////////////////

  At the very least, your code should be able to:

For example, only 1 king of spades should be dealt out to any player until the entire deck is reshuffled. 
Assume the deck is reshuffled after every hand.
The player is able to execute the following commands at their respective appropriate times: hit(), stand(), status(), reset(), start().
The dealer AI runs automatically based on the following (standardized) rules:

There must be some way to track the player's progress, at the very least the number of wins, losses, and ties.
  
  Assume there is no betting involved, only wins, losses, and ties.
Assume there are only 2 players: the user and the dealer AI.
Assume aces always count as 1.
Assume there is no option to split, double down, or buy insurance.
Assume that both the dealer's cards are given face up (ie visible).
This should simplify the game enough that you are able to accomplish this in the time allotted. If you want extra practice, 
you can begin removing the assumptions one by one and implementing the necessary changes in your game engine.



  
 */




/*
outlining major features:
Task:
1:Shuffle deck
  Human Features:
  1: Start()
  2: Hit
  3: Stand
  4: Check status
  5: Reset
  

  AI Features:
  1: If the dealer's total card value is 17 or more, the dealer must stand.
  2: If the total is 16 or under, they must hit.

*/

/* 
creating function stubs:

start(){}
aiFunction(){}
hit(){}
stand(){}
status(){}
reset(){}


*/ 


/* 
identifying gotchas
*/
   
  /* 
  writing pseudocode*/


let suit = [D, H, S, C];
let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let wins = 0;
let losses = 0;
// let ties = 0;

let user_deck = [];
let ai_deck = [];

function deal_out_cards(){
    user_deck = [];
    ai_deck = [];
    for(let index = 0; index < deck.length; index++){
	// todo: make sure that the two player's decks are of equal length
	if(Math.random() < .5){
	    // give to the player
	    if(Math.random() < .5){
		user_deck.push(deck[index]);
	    }else{
		user_deck.unshift(deck[index]);
	    }
	}else{
	    // give to the ai
	    if(Math.random() < .5){
		ai_deck.push(deck[index]);
	    }else{
		ai_deck.unshift(deck[index]);
	    }
	}

    }
}

function play_one_hand(){
    return {
	user_card: user_deck.pop(),
	ai_card: ai_deck.pop()
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
