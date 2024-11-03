let level = 1;

let level2Selection = 5;

let winningNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

console.log(winningNumber, "==>> winningNumber");

const userInput = document.querySelector("#userInput");
const replaceableText = document.querySelector("#replaceableText");
const scoreHtml = document.querySelector("#score");
const highScoreHtml = document.querySelector("#highScore");
const levelHtml = document.querySelector("#level");
const questionMarkbox = document.querySelector("#questionMarkbox");

levelHtml.innerHTML = level;

function check() {
  console.log(userInput.value, "===>> chala");
  if (userInput.value > 20) {
    replaceableText.innerHTML =
      "bhai saab 20 sey ziyaada ka to option hi nahin hai, khamakha point zaaaya hoga";
    return;
  }
  if (level > 1) {
    level2Selection--;
    console.log(level2Selection, "==>> level2Selection");
    questionMarkbox.innerHTML = level2Selection;
    if (level2Selection < 0) {
      winningNumber = Math.ceil(Math.random() * 20);
      if (level == 2) {
        level2Selection = 4;
      } else if (level == 3) {
        level2Selection = 3;
      } else if (level == 4) {
        level2Selection = 2;
      } else if (level == 5) {
        level2Selection = 1;
      }
      questionMarkbox.innerHTML = level2Selection;
    }
  }
  if (userInput.value == winningNumber) {
    replaceableText.innerHTML = "Mubarakaaan jeet gaey";
    if (score > highScore) {
      highScoreHtml.innerHTML = score;
      highScore = score;
    }

    if (score >= 15) {
      level++;
      replaceableText.innerHTML = `Ready for Level ${level}`;
      levelHtml.innerHTML = level;
      if (level == 2) {
        level2Selection = 4;
      } else if (level == 3) {
        level2Selection = 3;
      } else if (level == 4) {
        level2Selection = 2;
      } else if (level == 5) {
        level2Selection = 1;
      }
      winningNumber = Math.ceil(Math.random() * 20);
      score = 20;
      scoreHtml.innerHTML = score;
      questionMarkbox.innerHTML = level2Selection;
    }
  } else {
    score--; // score = score - 1
    scoreHtml.innerHTML = score;
    if (userInput.value < winningNumber) {
      replaceableText.innerHTML = "oooohhhhhhh very low suggestion";
    } else {
      replaceableText.innerHTML = "oooooohhhhhhh very high suggestion";
    }
  }
}

function inputChange() {
  console.log(userInput.value.length, "==>> meray sath kuch horaha hai");
  if (userInput.value.length > 2) {
    userInput.value = userInput.value.slice(0, 2);
  }
}

function again() {
  console.log("=>> chala");
  winningNumber = Math.ceil(Math.random() * 20);
  score = 20;
  scoreHtml.innerHTML = score;
}
