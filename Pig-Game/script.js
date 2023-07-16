"use strict";

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const diceEl = document.querySelector(".dice");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");

let currentScore, activePlayer, playingGame, scores;

// starting condition
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playingGame = true;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.classList.add("hidden");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
};

init();

// new game
btnNew.addEventListener("click", init);

// rolling dice
btnRoll.addEventListener("click", function () {
  if (playingGame) {
    // generate dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // displace dice
    diceEl.classList.remove("hidden");
    diceEl.src = `/assets/dice-${dice}.png`;

    // check if rolled 1: if true swith to other player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // current player's currentScore = 0
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;

      // switch to player, reassigning active player
      switchPlayer();

      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;

      console.log("Dice is 1");
      console.log("Player: " + activePlayer);
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playingGame) {
    console.log(currentScore);
    diceEl.classList.add("hidden");

    let score = Number(
      document.querySelector(`#score--${activePlayer}`).textContent
    );

    score += currentScore;
    scores[activePlayer] = score;
    document.querySelector(`#score--${activePlayer}`).textContent = score;

    // check if the score is >= 100
    if (score >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      playingGame = false;
    }

    // switch to player, reassigning active player
    switchPlayer();
  }
});

const switchPlayer = function () {
  currentScore = 0;

  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active");
};
