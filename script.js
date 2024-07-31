'use strict';


// Elements Selection
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");

const diceImg = document.querySelector(".dice");
const resetBtn = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");

let playerActive, scores, currentScores, rolling; 


 const init = function (){
    currentScores = 0;
    scores = [0, 0];
    score0.textContent =0;
    score1.textContent =0;
    currentScore0.textContent =0;
    currentScore1.textContent = 0;
    playerActive = 0;
    rolling =true;
  
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
 }
 init();

  // Switch active player
  const switchPlayer = function () {
    document.querySelector(`#current--${playerActive}`).textContent = 0;
    currentScores = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    playerActive = playerActive === 0 ? 1 : 0;
  };

  hold.addEventListener("click", function () {
    if (rolling) {
      scores[playerActive] += currentScores;
      document.querySelector(`#score--${playerActive}`).textContent = scores[playerActive];
      if (scores[playerActive] >= 20) {
        rolling = false;
        document.querySelector(`.player--${playerActive}`).classList.add("player--winner");
        document.querySelector(`.player--${playerActive}`).classList.remove("player--active");
        document.querySelector(`#score--${playerActive}`).textContent = `winner!`;
      } else {
        switchPlayer();
      }
    }
  });

  rollDice.addEventListener("click", function () {
    if (rolling) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      diceImg.src = `image/dice-${dice}.png`;
  
      if (dice !== 1) {

        currentScores += dice;
        document.querySelector(`#current--${playerActive}`).textContent = currentScores;
      } else {
        switchPlayer();
      }
    }
  });
  resetBtn.addEventListener("click", init);