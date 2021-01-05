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

let deck = [1,2,3,4,5,6,7,8,9,10];
let wins = 0;
let losses = 0;
// let ties = 0;

let user_deck =[];
let ai_deck = [];

function deal_out_cards(){
    for(let index = 0; index < deck.length; index ++){
        if(Math.random() < .5) {
            // give to the player
            if (Math.random() < .5){
                user_deck.push(deck[index]);

            }else{
                user_deck.unshift(deck[index]);
            }
        else{
            //give to ai
            if (Math.random() < .5){
                ai_deck.push(deck[index]);
            }else{
                ai_deck.unshift(deck[index]);
            }
            }
        }
    }
}
