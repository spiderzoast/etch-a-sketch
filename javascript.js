const container = document.querySelector(".game-container");
const btn = document.querySelector("button");

createGrid(16);

btn.addEventListener("click", () => {
  const input = prompt("Enter a number from 1 to 100:");
  if (isNaturalNumberBetween1And100(input)) {
    createGrid(input);
  } else {
    alert("Please insert a valid number.");
  }
  return;
})

function createSquare() {
  const square = document.createElement("div");
  square.addEventListener("mouseover", () => {
    square.setAttribute("class", "hovered-square");
  });
  container.appendChild(square);
  return;
}

function createGrid (number) {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastElementChild);
  }
  number = number * number;
  for (let i = 0; i < number; i++) {
    createSquare();
  }
  return;
}

function isNaturalNumberBetween1And100 (num) {
  return Number.isInteger(num) && num >= 1 && num <= 100;
}

