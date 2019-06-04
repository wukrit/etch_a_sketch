var numSquares = 16;
const gridWidth = 500;
const gridHeight = 500;
var opacity = 0.1;

function createGrid(num) {
  for (let i = 1; i <= (num**2); i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.style.width = `${gridWidth / num}px`;
    div.style.height = `${gridHeight / num}px`;
    grid.appendChild(div);
    div.addEventListener("mouseover", paint);
  };
};

function paint(e) {
  switch (modeSelect.value) {
    case "classic":
      e.target.style.opacity = 1;
      e.target.style.background = "black";
      break;
    case "random":
      e.target.style.opacity = 1;
      e.target.style.background = "rgb("+Math.random()*255+", "+Math.random()*255+", "+Math.random()*255+")";
      break;
    case "brush":
      let opacity = Number(e.target.style.opacity);
      opacity += 0.1;
      e.target.style.opacity = opacity;
      e.target.style.background = "black";
  }
};

function clear(e) {
  let div=Array.from(document.querySelectorAll("#grid div"));
  div.forEach(elem =>{elem.remove();});
  createGrid(numSquares);
  opacity = 0.1;
};

function changeGrid(e) {
  numSquares = prompt("Enter new grid size");
  let div=Array.from(document.querySelectorAll("#grid div"));
  div.forEach(elem =>{elem.remove();});
  createGrid(numSquares);
  opacity = 0.1;
}

clearButton.addEventListener("click", clear);
changeButton.addEventListener("click", changeGrid);
createGrid(numSquares);
