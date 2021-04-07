import "./styles/index.scss";
let score = 0;
let history = [];


// =============================================
// Game Grid Animation
// =============================================

function addActiveClass(gridIndex) {
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

// Adds active class to random grid cell every X seconds
window.setInterval(() => {
  const gridIndex = Math.floor(Math.random() * 2);
  addActiveClass(gridIndex)
}, 2000)

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











