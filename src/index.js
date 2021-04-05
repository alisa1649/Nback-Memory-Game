import "./styles/index.scss";

function addActiveClass(gridIndex) {
  const previous = document.querySelector(".grid-cell.active")
  if (previous) {
    previous.classList.remove("active");
  }
  const active = document.querySelector(`.grid-cell-${gridIndex}`);
  active.className += " active";
}

// addActiveClass(1);
window.setInterval(() => {
  const gridIndex = Math.floor(Math.random() * 9);
  addActiveClass(gridIndex)
}, 3000)