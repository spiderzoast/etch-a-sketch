const gameContainer = document.querySelector(".game-container");
const btn = document.querySelector("button");

createGrid(16);

btn.addEventListener("click", () => {
  const input = prompt("Enter a number from 1 to 100:");
  if (input === null) {
    return;
  }
  if (isNaturalNumberBetween1And100(Number(input))) {
    console.log("Grid being created!");
    createGrid(input);
    return;
  } else {
    alert("Please insert a valid number.");
    return;
  }
});

// 800 refers to width and height of the game-container,
// this calculation is required to make any grid size 
// from 1 to 100 occupy the same 800x800 pixels.
function createSquare(gridSize) {
  const pixelSize = 800 / gridSize;
  const newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.setAttribute("style", `width: ${pixelSize}px; height: ${pixelSize}px`);
  newCell.addEventListener("mouseover", () => {
    newCell.classList.add("cell-hovered");
  });
  gameContainer.appendChild(newCell);
  return;
}

function createGrid (gridSize) {
  while (gameContainer.hasChildNodes()) {
    gameContainer.removeChild(gameContainer.lastElementChild);
  }
  const totalCells = gridSize ** 2;
  for (let i = 0; i < totalCells; i++) {
    console.log(`Cell #${(i+1)} created.`)
    createSquare(gridSize);
  }
  return;
}

function isNaturalNumberBetween1And100 (num) {
  return Number.isInteger(num) && num >= 1 && num <= 100;
}

