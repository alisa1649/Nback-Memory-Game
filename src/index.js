import "./styles/index.scss";
require('file-loader?name=[name].[ext]!../index.html');
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const iterationsPerGame = 20;

let score = 0;
let history = [];
let nBackLevel = parseInt($('.n-size-container').selectedOptions[0].value.split("=")[1]);
let currentBlockIteration = 0;

let nextBlockInterval;
let nextBlockTimeout;
let nextCountdownTimeout;

let recentlyMatched = false;
let gameInProgress = false;

// =============================================
// Game Grid Animation
// =============================================

function activateNextBlock() {
  if (currentBlockIteration >= iterationsPerGame) {
    stopGame();
    return;
  }
  currentBlockIteration += 1;

  const gridIndex = Math.floor(Math.random() * 9);
  const previous = document.querySelector(".grid-cell.active")
  if (previous) {
    previous.classList.remove("active");
  }
  const active = document.querySelector(`.grid-cell-${gridIndex}`);
  nextBlockTimeout = window.setTimeout(() => {
    checkForMissedMatch();
    recentlyMatched = false;
    active.className += " active"
    history.push(gridIndex);
  }, 1000);
}

function switchPlayButton() {
  $('#play').classList.toggle('hidden');
  $('#play-text').classList.toggle('hidden');
  $('#stop').classList.toggle('hidden');
  $('#stop-text').classList.toggle('hidden');
}

function startGame() {
  gameInProgress = true;
  score = 0;
  activateNextBlock();
  nextBlockInterval = window.setInterval(() => {
    activateNextBlock();
  }, 2000)
}

// =============================================
// Player Input
// =============================================

const updateScore = () => {
  $(".score-container-number").innerHTML = score;
};

function addToScore() {
  score += 2;
  updateScore();
  $(".interaction-container").classList.add("success");
  window.setTimeout(() => {
    $(".interaction-container").classList.remove("success");
  }, 100)
}

function deductFromScore() {
  score -= 1;
  updateScore();
  $(".interaction-container").classList.add("fail");
  window.setTimeout(() => {
    $(".interaction-container").classList.remove("fail");
  }, 100)
}

function checkIsMatch() {
  const matchLookback = nBackLevel + 1;
  const isEligible = history.length > nBackLevel;
  const isMatch = (isEligible && history[history.length - 1] === history[history.length - matchLookback]);
  console.log("Most recent: " + history[history.length - 1]);
  console.log("isMatch: " + isMatch);
  console.log("history: " + history);
  console.log("N Back Value: " + history[history.length - matchLookback]);
  console.log("matchLookback: " + (matchLookback));
  console.log("N Back Index: " + (history.length - matchLookback));
  return isMatch;
}

// Listen for match button click
function receiveMatchClick() {
  recentlyMatched = true;
  const isMatch = checkIsMatch();


  if (isMatch) {
    console.log("Match!")
    addToScore();
  }
  else if (!isMatch && gameInProgress) {
    deductFromScore();
  }
  console.log("GAME STARTED?" + (gameInProgress));
}

function checkForMissedMatch() {
  console.log("Checking for missed match...");
  if (checkIsMatch() && !recentlyMatched) {
    console.log("Deducting from score...");
    deductFromScore();
  }
}

$("#match-button").addEventListener("click", receiveMatchClick);

// =============================================
// Instructions Modal Open and Close
// =============================================

let modal = document.querySelector(".modal");
let show = document.querySelector(".how-to-play-button");
let close = document.querySelector(".modal-close");

function toggleModal() {
  modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
  if (event.target === modal || event.target === close) {
    toggleModal();
  }
}

show.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// =============================================
// Play/Stop Game Button Functionality
// =============================================

const transitionTimeSeconds = 1;
const shrinkCountdown = (newNum) => {
  $(".countdown").setAttribute("style", "transition: none");
  $(".countdown").classList.remove("smaller");
  $(".countdown-text").innerHTML = "" + newNum;
  window.setTimeout(() => {
    $(".countdown").setAttribute("style", `transition: font-size ${transitionTimeSeconds}s ease-in-out`);
    $(".countdown").classList.add("smaller");
  }, 50);
}

const startCountdownAnimation = () => {
  switchPlayButton();
  $(".countdown").classList.remove("hidden");
  $(".grid-canvas").classList.add("hidden");
  shrinkCountdown(3);
  nextCountdownTimeout = window.setTimeout(() => {
    shrinkCountdown(2);
    nextCountdownTimeout = window.setTimeout(() => {
      shrinkCountdown(1);
      nextCountdownTimeout = window.setTimeout(() => {
        $(".countdown").classList.add("hidden");
        startGame();
      }, transitionTimeSeconds * 1000)
    }, transitionTimeSeconds * 1000)
  }, transitionTimeSeconds * 1000)
}

const stopGame = () => {
  $('.grid-canvas-score').innerText = "Last Score: " + score;
  switchPlayButton();
  $(".grid-canvas").classList.remove("hidden");
  $(".countdown").classList.add("hidden");
  score = 0;
  currentBlockIteration = 0;
  updateScore();
  window.clearInterval(nextBlockInterval);
  window.clearTimeout(nextBlockTimeout);
  window.clearTimeout(nextCountdownTimeout);

  $$('.grid-cell').forEach(cell => {
    cell.classList.remove('active');
  })
  gameInProgress = false;
}

$(".play-game-button").addEventListener("click", startCountdownAnimation);
$("#play").addEventListener("click", startCountdownAnimation);
$("#stop").addEventListener("click", stopGame);

// =============================================
// Game Setup
// =============================================

function updateNBackLevel() {
  nBackLevel = parseInt($('.n-size-container').selectedOptions[0].value.split("=")[1]);
  console.log(nBackLevel);
}

$(".n-size-container").addEventListener("change", updateNBackLevel);