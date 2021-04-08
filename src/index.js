import "./styles/index.scss";
let score = 0;
let history = [];

const $ = document.querySelector.bind(document);

// =============================================
// Game Grid Animation
// =============================================

function addActiveClass() {
  const gridIndex = Math.floor(Math.random() * 2);
  const previous = document.querySelector(".grid-cell.active")
  if (previous) {
    previous.classList.remove("active");
  }
  const active = document.querySelector(`.grid-cell-${gridIndex}`);
  window.setTimeout(() => {
    active.className += " active"
    history.push(gridIndex);
  }, 1000)
}

function startGame() {
  addActiveClass();
  window.setInterval(() => {
    addActiveClass();
  }, 2000)
}


// =============================================
// Player Input
// =============================================

// Listen for match button click
const button = document.querySelector("#match-button");
button.addEventListener("click", () => {
  const success = document.querySelector(".grid-container");
  if (history[history.length - 1] === history[history.length - 3]) {
    console.log("Match!")
    score += 2;
    success.className += " correct";
    window.setTimeout(() => {
      success.classList.remove("correct")
    }, 1000)
  }
})

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
// Play Game Button Functionality
// =============================================

const transitionTimeSeconds = 1.5;
const shrinkCountdown = (newNum) => {
  $(".countdown").setAttribute("style", "transition: none");
  $(".countdown").classList.remove("smaller");
  $(".countdown-text").innerHTML = "" + newNum;
  window.setTimeout(() => {
    $(".countdown").setAttribute("style", `transition: font-size ${transitionTimeSeconds}s ease-in-out`);
    $(".countdown").classList.add("smaller");
  }, 10);
}

$(".play-game-button").addEventListener("click", () => {
  $(".grid-canvas").classList.add("hidden");
  shrinkCountdown(3);
  window.setTimeout(() => {
    shrinkCountdown(2);
    window.setTimeout(() => {
      shrinkCountdown(1);
      window.setTimeout(() => {
        $(".countdown").classList.add("hidden");
        startGame();
      }, transitionTimeSeconds * 1000)
    }, transitionTimeSeconds * 1000)
  }, transitionTimeSeconds * 1000)
});
