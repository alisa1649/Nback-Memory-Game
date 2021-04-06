import "./styles/index.scss";
let score = 0;
let history = [];

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



window.setInterval(() => {
  const gridIndex = Math.floor(Math.random() * 2);
  addActiveClass(gridIndex)
}, 2000)

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





// Invoke compareCells on click, update score and render green or red grid outline (in index.html for now )
// <button onClick={() => compareCells()}></button>
