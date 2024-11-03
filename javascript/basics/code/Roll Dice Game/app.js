const player1 = prompt("Write your name, Mr Player 1");
const player2 = prompt("Write your name, Mr Player 2");

document.querySelector("#player1Name").innerHTML = player1;
document.querySelector("#player2Name").innerHTML = player2;

alert(`${player1} its your turn`);

const player1Element = document.querySelector("#player1");
const player2Element = document.querySelector("#player2");

console.log(player1Element.classList, "==>> player 1");
console.log(player2Element.classList, "==>> player 2");

player1Element.classList.add("activePlayer");
player2Element.classList.remove("activePlayer");

let currentPlayer = true;

let currentScore1 = 0;
let currentScore2 = 0;

function rollDice() {
  console.log("==>> chala");
  const diceNumber = Math.ceil(Math.random() * 6);
  console.log(diceNumber, "==>> diceNumber");
  console.log(document.querySelector("img").src);
  document.querySelector("img").src = `./assets/${diceNumber}.png`;
  if (diceNumber !== 1) {
    if (currentPlayer) {
      currentScore1 += diceNumber;
      document.querySelector("#currentScoreNumber1").innerHTML = currentScore1;
    } else {
      currentScore2 += diceNumber;
      document.querySelector("#currentScoreNumber2").innerHTML = currentScore2;
    }
  } else {
    if (currentPlayer) {
      currentScore1 = 0;
      document.querySelector("#currentScoreNumber1").innerHTML = currentScore1;
    } else {
      currentScore2 = 0;
      document.querySelector("#currentScoreNumber2").innerHTML = currentScore2;
    }
    currentPlayer = !currentPlayer;
    player1Element.classList.toggle("activePlayer");
    player2Element.classList.toggle("activePlayer");
  }
}

function hold() {
  if (currentPlayer) {
    let score1Html = document.querySelector("#totalScoreNumber1");
    score1Html.innerHTML = +score1Html.innerHTML + currentScore1;
    currentScore1 = 0;
    document.querySelector("#currentScoreNumber1").innerHTML = currentScore1;
    if (score1Html.innerHTML >= 100) {
      document.querySelector(
        "#gameArea"
      ).innerHTML = `<h1>Winner is ${player1}</h1>`;
    }
  } else {
    let score2Html = document.querySelector("#totalScoreNumber2");
    score2Html.innerHTML = +score2Html.innerHTML + currentScore2;
    currentScore2 = 0;
    document.querySelector("#currentScoreNumber2").innerHTML = currentScore2;
    if (score2Html.innerHTML >= 100) {
      document.querySelector(
        "#gameArea"
      ).innerHTML = `<h1>Winner is ${player2}</h1>`;
    }
  }
  currentPlayer = !currentPlayer;
  player1Element.classList.toggle("activePlayer");
  player2Element.classList.toggle("activePlayer");
}
